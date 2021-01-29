const people = [
    {
      id: 1,
      name: "ivan",
      money: 22,
    },
    {
      id: 2,
      name: "petro",
      money: 200,
    },
    {
      id: 3,
      name: "vasyl",
      money: 800,
     },
     {
      id: 4,
      name: "vlad",
      money: 4000,
     },
     {
      id: 5,
      name: "sviat",
      money: 10,
     },
 ];
 
 // task 1
 const sumMoney = people.reduce((acc, person) => 
     acc + person.money, 0
 );
 
 console.log(sumMoney);

 
 // task 2
 const filteredPeople = people.filter((person) => {
     if(person.money > 100) {
         return person;
     }
 });
 
 console.log(filteredPeople);
 