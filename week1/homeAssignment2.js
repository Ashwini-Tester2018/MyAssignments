// Assignment - Practice the difference between let, var and const

// Redeclaration means declaring the same variable again using the same keyword
var a = 10;
var a = 20; // Redeclare
a = 30;     // Reassignment

console.log (a + " is " + " var Can Redeclare and Reassign ");

// Reassignment means changing the value of an already declared variable without declaring it again
let b = 10;
 b =20; // Reassignment

 console.log (b + " is " + " let Can only Reassign and it cannot redeclare");

const c = 40;

console.log (c + " is " + " const cannot redeclare and reassign");



// Block Scope
{
let name ="Ashwini"; // can only access inside the block {}
var age = 20;        // can only access inside and outside the block {}
const address = "Bangalore" // can only access inside the block {}

console.log(name, age, address);

}

console.log(age); // out will print
// console.log(address); // out will display ReferenceError: address is not defined
// console.log(name); // out will display ReferenceError: name is not defined


// Hoisting var,let,const

console.log(hoist);
 var hoist = 10; // output undefined

/* console.log(hoist1);
 let hoist1 = 20; */ // output reference error

/*  console.log(hoist2);
 const hoist2 = 30; */  // output reference error


 // Function declaration

 function practice(){
    console.log("Function decalartion");
 }
 practice();


 // Function scope with var

 var functionscope = 10;

 function practiceFunScp(){
    var functionscope = 20;
    console.log(functionscope);
 }
 practiceFunScp();

 console.log(functionscope);

 // Function scope with let

 let funScp = 10;

 function letFunctionScope(){
    console.log(funScp);
 }
letFunctionScope();

