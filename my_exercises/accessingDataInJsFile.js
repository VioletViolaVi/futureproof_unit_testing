const { person } = require("./dataInJs");

console.log(person);

console.log(person.favDrink);

console.log(person["otherLikedDrinks"]);

console.log(person["whoToMeetForDrink"][3]);

console.log(person.favDrink.howFrequentlyPerDay);

console.log(person.favDrink.hasVariations);

console.log(person["favDrink"]["nutritionalInfo"]["magnesium"]);

console.log(person.favDrink.avgPrice);

console.log(person.favDrink.nutritionalInfo.sugars);
