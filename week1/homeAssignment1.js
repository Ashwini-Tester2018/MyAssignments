// Assignment Palindrome of a number
let num = 121; 
let reverse = 0;
let originalNumber = num;

for (; num>0; num=Math.floor(num/10)){

    let digit = num%10; // digit will have value 1 
    // 121/10 = 1
    // 12 /10 = 2
    //1/10

    reverse = reverse*10 + digit; // reverse has value 1

    // 0 = 0*10 + 1 >> 0+1 >> 1
    // 1 = 1*10 + 2 >> 10+2 >>12
}



    if (reverse == originalNumber){
        console.log ("The number is Palindrome");
            }

    else{
        console.log ("The number is not a Palindrome");
        
    }

let num1 = 1331; 
let reverse1 = 0;
let originalNumber1 = num1;

for (; num1>0; num1=Math.floor(num1/10)){

    let digit1 = num1%10; // digit will have value 1 
 
    reverse1 = reverse1*10 + digit1; // reverse has value 1

}



    if (reverse1 == originalNumber1){
        console.log ("The number is Palindrome");
            }

    else{
        console.log ("The number is not a Palindrome");
        
    }


let num2 = 123; 
let reverse2 = 0;
let originalNumber2 = num2;

for (; num2>0; num2=Math.floor(num2/10)){

    let digit2 = num2%10; // digit will have value 1 
 
    reverse2 = reverse2*10 + digit2; // reverse has value 1

}



    if (reverse2 == originalNumber2){
        console.log ("The number is Palindrome");
            }

    else{
        console.log ("The number is not a Palindrome");
        
    }

let num3 = -121; 
let reverse3 = 0;
let originalNumber3 = num3;

for (; num3>0; num3=Math.floor(num3/10)){

    let digit3 = num3%10; // digit will have value 1 
 
    reverse3 = reverse3*10 + digit3; // reverse has value 1

}



    if (reverse3 == originalNumber3){
        console.log ("The number is Palindrome");
            }

    else{
        console.log ("The number is not a Palindrome");
        
    }

let num4 = -121; 
let reverse4 = 0;
let originalNumber4 = num4;

for (; num4>0; num4=Math.floor(num4/10)){

    let digit4 = num4%10; // digit will have value 1 
 
    reverse4 = reverse4*10 + digit4; // reverse has value 1

}



    if (reverse4 == originalNumber4){
        console.log ("The number is Palindrome");
            }

    else{
        console.log ("The number is not a Palindrome");
        
    }