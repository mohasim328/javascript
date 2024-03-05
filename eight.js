// all about string in javascript


const Name = "Mohd Hasim";
const repo = 20;

console.log(Name + repo); // concatinate  not to prefer these kind of concatination

// using backtick

console.log(`hello my name is ${Name} and my repo is ${repo}`);



// other method for string 

const myStr = new String('MOHD HASIM');
console.log(myStr);
console.log(myStr.__proto__);
console.log(myStr.length);
console.log(myStr.toLowerCase());
console.log(myStr.toLocaleLowerCase());
console.log(myStr.charAt(2));
console.log(myStr.indexOf('H'));
console.log(myStr.slice( 0, 5)); //negetive index values is allowed 
console.log(myStr.substring(0 , 5)); // negetive value is not allowed
console.log(myStr.split(" ")); 





const newStr = "   mohd hasim   ";
console.log(newStr);
console.log(newStr.trim());
console.log(newStr.replace('m' ,'M'));
console.log(newStr.includes('mo'));



