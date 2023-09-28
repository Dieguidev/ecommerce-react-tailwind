/**
 * This function calculates total price of a new order
 * @param {Array} cartProducts
 * @returns {number} Total price
 */
export const totalPrice = (cartProducts) => {
  const total = cartProducts.reduce((sum, product) => sum + product.price, 0);
  return total;
};
