import { Injectable } from '@nestjs/common'
import { execFile } from 'child_process'
import { promisify } from 'util'
import * as path from 'path'
import {promises as fs} from 'fs'

const execFileAsync = promisify(execFile)

@Injectable()
export class DocxToPdfConversionService {

  async processDocxToPdf(inputPath: string, outputPath: string) {
    const outputDir = path.dirname(outputPath)
    const expectedPdfName = `${path.basename(inputPath, path.extname(inputPath))}.pdf`
    const generatedPdfPath = path.join(outputDir, expectedPdfName)

    await execFileAsync('soffice', [
      '--headless',
      '--nologo',
      '--nolockcheck',
      '--convert-to',
      'pdf',
      '--outdir',
      outputDir,
      inputPath,
    ], {
      timeout: 60000,
      env: {
        ...process.env,
        HOME: outputDir,
      },
    })

    if (generatedPdfPath !== outputPath) {
      await fs.rename(generatedPdfPath, outputPath)
    }
  }

}
