export const DISCOUNT_THRESHOLD = 50000
export const DISCOUNT_RATE = 0.05
export const FREE_SHIPPING_THRESHOLD = 2000
export const SHIPPING_FEE = 99

export function calculateOrderTotals(subtotal) {
  const discount = subtotal >= DISCOUNT_THRESHOLD ? subtotal * DISCOUNT_RATE : 0
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FEE
  const total = subtotal - discount + shipping
  return { discount, shipping, total }
}