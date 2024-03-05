const score = 400;
const balance = new Number(400);
const balance1 = new Number(400.57);
const balance2 = new Number(400000);


console.log(score);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));
console.log(balance1.toPrecision(3));
console.log(balance2.toLocaleString());


// maths function

console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.max(4 , 6));
console.log(Math.min(4 , 6));
console.log(Math.floor(Math.random()*1000) +1 );