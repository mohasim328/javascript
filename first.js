console.log("MOHD HASIM");
  
// // diff between var let const ---------------------

const accountId = 12345;
let accountEmail = "mohasim@gmail.com";
var accountPasword  = "161651";
accountCity = "Bareilly"  //not good practice to declare the variavle

let accountState ;  //   undifined


// // accountId = 54321  // it cn not be cange becoue of const
/* prefer not to use var becouse of  essue in block scope and functional scope*/
 console.log(accountId);
 console.log(accountEmail);
 console.log(accountPasword);
 console.log(accountCity);


accountEmail =  "mosasim@gmail.com"
accountPasword  = "99566";
accountCity = "Bangluru";
console.log("edited variable");
console.table([accountEmail, accountPasword, accountCity]);


 