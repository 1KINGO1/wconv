import { Injectable } from '@nestjs/common'
import * as mammoth from 'mammoth'
import { promises as fs } from 'fs'

@Injectable()
export class DocxToHtmlConversionService {

  async processDocxToHtml(inputPath: string, outputPath: string) {
    const result = await mammoth.convertToHtml({path: inputPath});
    const html = result.value;
    await fs.writeFile(outputPath, html, 'utf8')
  }

}
