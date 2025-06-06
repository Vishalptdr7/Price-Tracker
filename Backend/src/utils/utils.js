export const parseFloatFromPrice = (priceStr) => {
  try {
    return parseFloat(priceStr.replace(/[₹,]/g, ""));
  } catch {
    return null;
  }
};
