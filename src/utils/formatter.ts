export const dateFormatter = new Intl.DateTimeFormat('pt-bR')

export const priceFormatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
})
