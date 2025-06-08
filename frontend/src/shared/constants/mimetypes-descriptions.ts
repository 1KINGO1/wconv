import { MimeType } from '@/shared/constants/mimetype'

export const descriptionsByKey: Record<keyof typeof MimeType, string> = {
  JPEG: '.jpg and .jpeg image files',
  PNG: '.png image files',
  GIF: '.gif image files',
  WEBP: '.webp image files',
  SVG: '.svg vector images',
  BMP: '.bmp image files',
  TIFF: '.tif and .tiff image files',
  ICON: '.ico icon files',
  HEIC: '.heic image files (iPhone photos)',
  AVIF: '.avif image files',

  MP3: '.mp3 audio files',
  OGG_AUDIO: '.ogg audio files',
  WAV: '.wav audio files',
  WEBM_AUDIO: '.webm audio files',
  AAC: '.aac audio files',
  FLAC: '.flac audio files',
  WMA: '.wma audio files',

  MP4: '.mp4 video files',
  WEBM_VIDEO: '.webm video files',
  OGG_VIDEO: '.ogv video files',
  AVI: '.avi video files',
  MPEG: '.mpeg and .mpg video files',
  MOV: '.mov video files',
  MKV: '.mkv video files',

  PLAIN: '.txt plain text files',
  HTML: '.html and .htm HTML files',
  CSS: '.css stylesheet files',
  CSV: '.csv comma-separated files',
  MARKDOWN: '.md Markdown files',
  XML: '.xml text files',

  JSON: '.json files',
  JAVASCRIPT: '.js JavaScript files',
  PDF: '.pdf files',
  ZIP: '.zip compressed files',
  SEVEN_ZIP: '.7z compressed files',
  RAR: '.rar compressed files',
  TAR: '.tar archive files',
  GZIP: '.gz compressed files',
  MS_WORD: '.doc Microsoft Word files',
  MS_WORD_OPENXML: '.docx Word files',
  MS_EXCEL: '.xls Excel files',
  MS_EXCEL_OPENXML: '.xlsx Excel files',
  MS_PPT: '.ppt PowerPoint files',
  MS_PPT_OPENXML: '.pptx PowerPoint files',
  FORM_URLENCODED: 'Form URL-encoded data',
  OCTET_STREAM: 'Binary data (generic)',

  TTF: '.ttf font files',
  WOFF: '.woff font files',
  WOFF2: '.woff2 font files',
  EOT: '.eot font files',

  MULTIPART_FORM_DATA: 'Form data with file upload',
};

// mimetype -> description
export const mimeDescriptions = new Map<string, string>();

for (const key in MimeType) {
  const mimeArray = MimeType[key as keyof typeof MimeType];
  const description = descriptionsByKey[key as keyof typeof descriptionsByKey];
  if (description && mimeArray) {
    for (const mime of mimeArray) {
      mimeDescriptions.set(mime, description);
    }
  }
}