// Convert Characters at Odd Indexes to Uppercase
//         0123456789     
let str = "javascript";

let oddStr = "";

for (i=0; i<str.length; i++){
       
    if(i%2==1){

        oddStr = oddStr + str[i].toUpperCase();        
        }
    
    else {
        oddStr = oddStr + str[i]
    }   
} 
 console.log(oddStr);

// Convert Characters at Odd Indexes to Uppercase - hello
         
//          01234
let str1 = "hello";

let oddStr1="";

for(i=0;i<str1.length;i++){

    if(i%2==1){
        oddStr1 = oddStr1 + str1[i].toUpperCase();
        }

    else {
        oddStr1 = oddStr1 + str1[i];
    }
}
console.log(oddStr1);

// Convert Characters at Odd Indexes to Uppercase - testleaf

//        01234567
let str2="testleaf";

let oddStr2 ="";

for(i=0;i<str2.length;i++){
    if(i%2==1){
        oddStr2 = oddStr2 + str2[i].toUpperCase();
    }
    else{
        oddStr2 = oddStr2 + str2[i]
    }
}
console.log(oddStr2);

// Convert Characters at Odd Indexes to Uppercase - automation

let str3="automation";

let oddStr3 = "";

for(i=0;i<str3.length;i++){
    if(i%2==1){
        oddStr3 = oddStr3 + str3[i].toUpperCase();
    }
    else{
        oddStr3 = oddStr3 + str3[i]
    }
}
console.log(oddStr3);