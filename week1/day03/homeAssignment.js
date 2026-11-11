// Activity Grade Classification using if...else if...else
//90–100: Grade A
let student1Mark = 95;
     
    // 95<0               95>100
    //  false                   False
if (student1Mark < 0 || student1Mark > 100 ){
    console.log("Invalid mark");
  
}           //95>=100
else if (student1Mark<=100 ){
    console.log("Grade A");

}
 
//80–89: Grade B

let student2Mark = 85;
    // 85<0                85>100
    // False               False
if (student2Mark < 0 || student2Mark > 100 ) // condition will be false it will go to else if
    
    {
    console.log("Invalid mark");
  
}           //85>=80
            //True
else if (student2Mark>=80 ){
    console.log("Grade B");

}

//70–79: Grade C
let student3Mark = 75;
        //75<0         75>10
        //False        False
if (student3Mark<0 || student3Mark >100){
    console.log("Invalid mark");
}
        //75>=70 true
else if (student3Mark>=70)
{
    console.log("Grade C");
}

 //60–69: Grade D
let student4Mark = 65;
        //65<0         65>100
        //False        False
if (student4Mark<0 || student4Mark >100){
    console.log("Invalid mark");
}
        //65>=70 true
else if (student4Mark>=60)
{
    console.log("Grade D");
}

//50–59: Grade E
let student5Mark = 55;
    //55<0         55>100
        //False        False
if (student5Mark<0 || student5Mark >100){
    console.log("Invalid mark");
}
        //55>=50 true
else if (student5Mark>=50)
{
    console.log("Grade E");
}

//0–49: Grade F (Fail)
let student6Mark = 35;

        //35<0         35>100
        //False        False
if (student6Mark<0 || student6Mark >100){
    console.log("Invalid mark");
}
        //35>=0 true
else if (student6Mark>=0)
{
    console.log("Grade F (Fail)");
}

//Below 0 or above 100: Invalid mark
let student7Mark = -5;
        //-5>0         
        //false        
if (student7Mark>0){
    console.log("Negative Mark");
}
        //-5<0 true
else if (student7Mark<0)
{
    console.log("Invalid Mark");
}

//Below 0 or above 100: Invalid mark
let student8Mark = 105;
        //105 <0 false
if (student8Mark<0){
    console.log("Negative Mark");
}
        //105==100 true
else if (student8Mark==100)
{
    console.log("Grade A");
}
else{
    console.log("Invalid Mark");
}