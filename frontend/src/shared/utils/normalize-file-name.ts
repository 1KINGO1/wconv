// transforms 123124512412_file-name.jpg to file-name.jpg
export function normalizeFileName(fileName: string) {
  const filePartsArray = fileName.split('-')
  return filePartsArray.slice(filePartsArray[0] === 'converted' ? 2 : 1).join('-')
}
