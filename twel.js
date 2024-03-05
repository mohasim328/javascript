const Arr1 = [1,2,3,4,5,6];
const Arr2 = [7,8,9,10,11,12];

Arr1.push(Arr2);

console.log(Arr1);


const arr3 = Arr1.concat(Arr2);

console.log(arr3);


const newarr = [...Arr1, ...Arr2];
console.log(newarr);

const another_arr = [1,2,3,4,5,[6,5,7,[7,8,9]]];

const real_another_arr = another_arr.flat(Infinity);

console.log(real_another_arr);