let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
  
let mycreatedDate = new Date(2023, 5, 5);
let dob = new Date("2004-07-15");

console.log(dob.toLocaleString());
console.log(dob.toDateString());
console.log(mycreatedDate.toLocaleString());
console.log(mycreatedDate.toDateString());

console.log(mydate.getDate());
console.log(mydate.getDay());
console.log(mydate.getFullYear());


