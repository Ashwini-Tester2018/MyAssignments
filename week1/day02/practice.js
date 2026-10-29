// Ask learners to create a new file named practice.js and complete the following tasks.

// Declare a variable named studentName and assign your name.
// Declare a variable named studentAge and assign your age.
///Declare a variable named isStudent and assign true.
//Declare a variable named phoneNumber without assigning any value.
//Declare a variable named address and assign null.
//Display the value of each variable using console.log().
//Display the data type of each variable using typeof.
//Declare a BigInt variable named accountNumber with the value 9876543210987654321n.
//Display the value and data type of accountNumber.
//Access Number.MAX_SAFE_INTEGER and display its value.

var studentName = "Ashwini Jawahar";
var studentAge = 30;
var isStudent = true;
var phoneNumber;
var address = null;
console.log (studentName, studentAge, isStudent, phoneNumber,address );
console.log (typeof studentName, typeof studentAge, typeof isStudent, typeof phoneNumber,typeof address );
var accountNumber = 9876543210987654321n;
console.log (accountNumber, typeof accountNumber);
var safeNumber = Number.MAX_SAFE_INTEGER;
console.log (safeNumber);