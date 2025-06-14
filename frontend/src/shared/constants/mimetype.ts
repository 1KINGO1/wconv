// Todo: Refactor

export const MimeType: Record<string, string[]> = {
  JPEG : ['image/jpeg'],
  PNG : ['image/png'],
  GIF : ['image/gif'],
  WEBP : ['image/webp'],
  SVG : ['image/svg+xml'],
  BMP : ['image/bmp'],
  TIFF : ['image/tiff'],
  ICON : ['image/x-icon'],
  HEIC : ['image/heic'],
  AVIF : ['image/avif'],

  MP3 : ['audio/mpeg'],
  OGG_AUDIO : ['application/ogg'],
  WAV : ['audio/wav'],
  WEBM_AUDIO : ['audio/webm'],
  AAC : ['audio/aac', 'audio/vnd.dlna.adts'],
  FLAC : ['audio/x-flac', 'audio/flac'],
  WMA : ['audio/x-ms-wma'],

  MP4 : ['video/mp4'],
  WEBM_VIDEO : ['video/webm'],
  OGG_VIDEO : ['video/ogg'],
  AVI: ['video/x-msvideo'],
  MPEG : ['video/mpeg'],
  MOV : ['video/quicktime'],
  MKV : ['video/x-matroska'],

  PLAIN : ['text/plain'],
  HTML : ['text/html'],
  CSS : ['text/css'],
  CSV : ['text/csv'],
  MARKDOWN : ['text/markdown'],
  XML : ['text/xml'],

  JSON : ['application/json'],
  JAVASCRIPT : ['application/javascript'],
  PDF : ['application/pdf'],
  ZIP : ['application/zip'],
  SEVEN_ZIP : ['application/x-7z-compressed'],
  RAR : ['application/x-rar-compressed'],
  TAR : ['application/x-tar'],
  GZIP : ['application/gzip'],
  MS_WORD : ['application/msword'],
  MS_WORD_OPENXML : ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'],
  MS_EXCEL : ['application/vnd.ms-excel'],
  MS_EXCEL_OPENXML : ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  MS_PPT : ['application/vnd.ms-powerpoint'],
  MS_PPT_OPENXML : ['application/vnd.openxmlformats-officedocument.presentationml.presentation'],
  FORM_URLENCODED : ['application/x-www-form-urlencoded'],
  OCTET_STREAM : ['application/octet-stream'],

  TTF : ['font/ttf'],
  WOFF : ['font/woff'],
  WOFF2 : ['font/woff2'],
  EOT : ['application/vnd.ms-fontobject'],

  MULTIPART_FORM_DATA : ['multipart/form-data'],
};

export type MimeType = (typeof MimeType)[keyof typeof MimeType];