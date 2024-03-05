// stack and heap memory in js 

// all primitive data type occupide the stack memory 
// all non primitive and refrance type occupide heap memoery 


let myName = "Mo Hasim";
let anotherName = myName;
 anotherName = "mohd hasim";

console.log(myName);
console.log(anotherName); // not changes




let userOne ={

    email:"mohasim3283@gmail.com",
    upi:"mohasim@paytm"
}
let userTwo = userOne;

userTwo.email = "mohasim32834@gmail.com"; // change the emalil in both the object

console.log(userOne);
console.log(userTwo);
