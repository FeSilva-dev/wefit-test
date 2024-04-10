export function removeSpecialCharacters(text: string) {
  return text.replace(/[^\w\s]/gi, '');
}

export function standardizeText(text: string) {
  return removeSpecialCharacters(text)
    .replace(/\s/g, '')
    .toLowerCase()
}