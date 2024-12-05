// 1.number
const num=23; 
const bol=23.123;
console.log(typeof(num));
console.log(typeof(bol));

//2 null
const nulldata=null;  
console.log(typeof(nulldata));  //object             exeception

//3 bigInt
const big=123n;
console.log(typeof(big));
//4 boolean
const isAdmin=true;
console.log(typeof(isAdmin));
 
//5 string
const str="hello";
const str1="5";
console.log(typeof(str));
console.log(typeof(str1));
//6 symbol
const sym1=Symbol('hello')
const sym2=Symbol('hello')
console.log(sym1==sym2)

//7 undefine
let num3;
console.log(typeof(num3))

