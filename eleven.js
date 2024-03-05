//array 
// in array there are multipe data type elemnet can be there (mix type)
// it can acsess with index 
// it makes the shallow copy  (changement is done in original array )



const myArr = [0,1,2,3,4,5,6];

console.log(myArr[0]);
 
const myArr2 = new Array(1,2,3,4,5,6);

console.log(myArr2[0]);

myArr.push(7);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(10);
console.log(myArr);

myArr.shift();
console.log(myArr);


console.log(myArr.includes(5));
console.log(myArr.indexOf(5));

console.log(myArr)
console.log(myArr.join())

// slice 

const Arr3 = [10,20,30,40,50,60,70];
console.log(Arr3);
console.log(Arr3.slice(0,3));

console.log(Arr3);

console.log(Arr3.splice(0,3))
console.log(Arr3);