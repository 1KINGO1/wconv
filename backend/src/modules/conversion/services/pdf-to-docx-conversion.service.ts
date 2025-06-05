import { Injectable, OnModuleInit } from '@nestjs/common'
import { promises as fs } from 'fs'
import path from 'path'
import os from 'os'
import { spawn } from 'child_process'

@Injectable()
export class PdfToDocxConversionService implements OnModuleInit {
  async onModuleInit() {
    const isAvailable = await this.checkPdf2DocxAvailability();
    if (!isAvailable) {
      throw new Error('pdf2docx library is not available. Please install it using: pip install pdf2docx')
    }
  }

  async processPdfToDocx(inputBuffer: Buffer, conversionType: string) {
    let tempInputPath: string | null = null
    let tempOutputPath: string | null = null

    try {
      // Create temporary directory
      const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'pdf-conversion-'))

      // Generate unique filenames
      const timestamp = Date.now()
      const randomId = Math.random().toString(36).substring(7)
      tempInputPath = path.join(tempDir, `input-${timestamp}-${randomId}.pdf`)
      tempOutputPath = path.join(tempDir, `output-${timestamp}-${randomId}.docx`)

      // Write input buffer to temporary file
      await fs.writeFile(tempInputPath, inputBuffer)

      // Verify input file exists and has content
      const stats = await fs.stat(tempInputPath)
      if (stats.size === 0) {
        throw new Error('Input PDF file is empty')
      }

      // Execute Python pdf2docx conversion
      const conversionResult = await this.executePdf2DocxConversion(tempInputPath, tempOutputPath)

      if (!conversionResult.success) {
        throw new Error(`PDF to DOCX conversion failed: ${conversionResult.error}`)
      }

      // Verify output file was created
      try {
        await fs.access(tempOutputPath)
      } catch (error) {
        throw new Error('Output DOCX file was not created')
      }

      // Read the converted DOCX file
      const outputBuffer = await fs.readFile(tempOutputPath)

      if (outputBuffer.length === 0) {
        throw new Error('Output DOCX file is empty')
      }

      return outputBuffer
    } catch (error) {
      console.error('PDF to DOCX conversion error:', error)

      // Log additional context for debugging
      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          conversionType,
          inputBufferSize: inputBuffer.length,
          tempInputPath,
          tempOutputPath,
        })
      }

      return null
    } finally {
      // Cleanup temporary files
      await this.cleanupTempFiles([tempInputPath, tempOutputPath])
    }
  }

  private async executePdf2DocxConversion(
    inputPath: string,
    outputPath: string,
  ): Promise<{ success: boolean; error?: string }> {
    return new Promise(resolve => {
      const pythonScript = `
import sys
import traceback
from pdf2docx import Converter

try:
    # Create converter instance
    cv = Converter('${inputPath.replace(/\\/g, '\\\\')}')
    
    # Convert PDF to DOCX
    cv.convert('${outputPath.replace(/\\/g, '\\\\')}')
    
    # Close converter
    cv.close()
    
    print('SUCCESS: PDF to DOCX conversion completed')
    
except ImportError as e:
    print(f'IMPORT_ERROR: pdf2docx library not found. Install with: pip install pdf2docx')
    sys.exit(1)
    
except FileNotFoundError as e:
    print(f'FILE_ERROR: Input file not found: {str(e)}')
    sys.exit(1)
    
except PermissionError as e:
    print(f'PERMISSION_ERROR: Permission denied: {str(e)}')
    sys.exit(1)
    
except Exception as e:
    print(f'CONVERSION_ERROR: {str(e)}')
    print(f'TRACEBACK: {traceback.format_exc()}')
    sys.exit(1)
`

      const python = spawn('python', ['-c', pythonScript], {
        stdio: ['pipe', 'pipe', 'pipe'],
        timeout: 120000, // 2 minute timeout
      })

      let stdout = ''
      let stderr = ''

      python.stdout.on('data', data => {
        stdout += data.toString()
      })

      python.stderr.on('data', data => {
        stderr += data.toString()
      })

      python.on('close', code => {
        if (code === 0 && stdout.includes('SUCCESS')) {
          resolve({ success: true })
        } else {
          const errorMessage = stderr || stdout || `Process exited with code ${code}`
          resolve({
            success: false,
            error: this.parsePythonError(errorMessage),
          })
        }
      })

      python.on('error', error => {
        resolve({
          success: false,
          error: `Failed to start Python process: ${error.message}. Ensure Python 3 and pdf2docx are installed.`,
        })
      })

      // Handle timeout
      python.on('timeout', () => {
        python.kill()
        resolve({
          success: false,
          error: 'Conversion timed out after 2 minutes',
        })
      })
    })
  }
  private parsePythonError(errorOutput: string): string {
    if (errorOutput.includes('IMPORT_ERROR')) {
      return 'pdf2docx library not installed. Run: pip install pdf2docx'
    }

    if (errorOutput.includes('FILE_ERROR')) {
      return 'Input PDF file not found or inaccessible'
    }

    if (errorOutput.includes('PERMISSION_ERROR')) {
      return 'Permission denied accessing files'
    }

    if (errorOutput.includes('CONVERSION_ERROR')) {
      const match = errorOutput.match(/CONVERSION_ERROR: (.+)/)
      return match ? match[1] : 'PDF conversion failed'
    }

    return errorOutput || 'Unknown conversion error'
  }
  private async cleanupTempFiles(filePaths: (string | null)[]) {
    const cleanupPromises = filePaths
      .filter((path): path is string => path !== null)
      .map(async filePath => {
        try {
          await fs.unlink(filePath)

          // Also try to remove the parent directory if it's empty
          const parentDir = path.dirname(filePath)
          if (parentDir.includes('pdf-conversion-')) {
            try {
              await fs.rmdir(parentDir)
            } catch {
              // Directory not empty or other error, ignore
            }
          }
        } catch (error) {
          // Log but don't throw - cleanup errors shouldn't break the main flow
          console.warn(`Failed to cleanup temp file ${filePath}:`, error)
        }
      })

    await Promise.allSettled(cleanupPromises)
  }
  private async checkPdf2DocxAvailability() {
    return new Promise(resolve => {
      const python = spawn('python', ['-c', 'import pdf2docx; print("pdf2docx AVAILABLE")'], {
        stdio: ['pipe', 'pipe', 'pipe'],
        timeout: 5000,
      })

      let stdout = ''

      python.stdout.on('data', data => {
        stdout += data.toString()
        console.log(stdout)
      })

      python.on('close', code => {
        resolve(code === 0 && stdout.includes('AVAILABLE'))
      })

      python.on('error', () => {
        resolve(false)
      })
    })
  }
}
