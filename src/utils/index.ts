export function removeSpecialCharacters(text: string) {
  return text.replace(/[^\w\s]/gi, '');
}

export function standardizeText(text: string) {
  return removeSpecialCharacters(text)
    .replace(/\s/g, '')
    .toLowerCase()
}

export function formatMoney(money: number) {
  return money.toLocaleString('pt-br', {
    style: 'currency', currency: 'BRL'
  })
}