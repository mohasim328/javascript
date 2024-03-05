/*data type in javacsript 
1. primitive (stack memory) data type 7 type => nummber , string ,boolean , symbol ,null , undifined, bigint
 
these kind of data type does not change but changement is done in the copy

2.non primitive (heap memory)  (reference type) => array ,object ,function
  

changement is done in the original copy 
*/ 
const score =100;
const scoreValue = 103.3;
const islogedIn =false;
const outsideTemp = null;
let cityName ; // undifined

const bigNumber = 4545454535161n; 


const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const hero = ["salman", "shahrukh", "aamir"];

let myObj ={ 

    name:"hasim",
    course: "b.tech",
    branch: "csit",
    age:20
}

const myfunction = function(){

    console.log("helo function");
}


//    type of all  the variable cost and object

console.table([typeof myfunction ,typeof myObj ,typeof hero ,typeof bigNumber ,typeof cityName , typeof outsideTemp , typeof id] ); // fuction ,object ,object,bigint,undefined ,object


