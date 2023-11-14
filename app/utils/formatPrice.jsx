// Convert the price (in centimes) in euro
// and add the € at the end

function formatPrice(priceInCentimes) {
  const priceInEuros = priceInCentimes / 100;
  return priceInEuros.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
}

export default formatPrice;
