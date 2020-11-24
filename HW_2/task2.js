//Мій варіант
// const calculateEngravingPrice = (message, pricePerWord) => {
//     return message.split(' ').length * pricePerWord;
//   };
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); // 80
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160
  
//   console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200
  
//   console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100


//Перший спосіб
// const calculateEngravingPrice = function (message, pricePerWord) {
//   let numberOfWords = 0;
//   for(let i = 0; i < message.lenght; i +=1){
//     if(message[i] === ' '){

//     }
//   }
//   numberOfWords +=1;
//   return(numberOfWords * pricePerWord);
// };

//Другий спосіб
const calculateEngravingPrice = function (message, pricePerWord) {
  let word = message.split(" ");
  return word.length * pricePerWord;
}

