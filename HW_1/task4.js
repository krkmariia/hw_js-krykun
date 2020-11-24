const credits = 23580;
const pricePerDroid = 3000;


let numberOfDroids = prompt("Введіть кількість дроїдів");

let totalPrice = numberOfDroids * pricePerDroid;
let balance = credits - totalPrice;

if (numberOfDroids === null) {
  console.log("Скасовано користувачем");
} else if (totalPrice > credits) {
  console.log("Недостатньо коштів на рахунку!");
} else {
  console.log(
    `Ви купили ${numberOfDroids} дроїдів, на рахунку залишилося ${
      credits - totalPrice
    } кредитів.`
  );
}