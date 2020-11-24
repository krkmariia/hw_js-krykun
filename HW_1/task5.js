let input = prompt("Введіть країну");
let inputLower = input.toLowerCase();
console.log(inputLower);
let cost = 0;
switch (inputLower) {
  case "китай":
    cost = 100;
    break;
  case "чилі":
    cost = 250;
    break;
  case "австралія":
    cost = 170;
    break;
  case "індія":
    cost = 80;
    break;
  case "ямайка":
    cost = 120;
    break;
  default:
    alert("У вашій країні доставка недоступна");
}
console.log(`Доставка в ${inputLower} буде коштувати ${cost} кредитів`);