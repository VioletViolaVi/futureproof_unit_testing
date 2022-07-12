// 1 . Variables
const person = {
  hadCoffeeToday: false,
  howMuchCoffeeToday: 0,
  likesCoffee: false,
  favDrink: {
    type: "water",
    whereToBuy: "shop",
    name: "Volvo",
    avgPrice: 1.99,
    isHealthy: true,
    nutritionalInfo: {
      sugars: 0,
      calories: 0,
      calcium: 10,
      magnesium: 11,
      sodium: 45,
      potassium: 78,
    },
    howFrequentlyPerDay: 8,
    hasVariations: false,
  },
  otherLikedDrinks: ["juice", "fizzy pop", "milkshake", "flavoured water"],
  whoToMeetForDrink: ["Dan", "April", "Emily", "Reese"],
};

module.exports = {
  person,
};
