/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const basicDiscount = 20;
  const additionalDiscount = 50;

  const totalCost = days * dailyCost;

  if (days >= 7) {
    return totalCost - additionalDiscount;
  }

  if (days >= 3) {
    return totalCost - basicDiscount;
  }

  return totalCost;
}
module.exports = calculateRentalCost;
