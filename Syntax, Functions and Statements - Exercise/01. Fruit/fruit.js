function fruit(fruitName, weightInGrams, pricePerKilogram) {
let kilograms = weightInGrams / 1000;
let price = kilograms*pricePerKilogram;
console.log(`I need $${price.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruitName}.`);
}
fruit('orange', 2500, 1.80)