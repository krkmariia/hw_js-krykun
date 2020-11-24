const findBestEmployee = function (employees) {
    let theBiggestNumber = 0;
    let theMostProductive;
    for( const key in employees){
      if((employees[key])>theBiggestNumber){
        theBiggestNumber = (employees[key]);
        theMostProductive = key;
      }
    }
return theMostProductive;
  };
  
 
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux