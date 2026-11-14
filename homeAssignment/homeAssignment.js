// Find the Missing element in the sequence


let arr = [1,2,3,5,6];
 for (i=1; i<=6; i++){
    let found = false;
    for(j=0; j<arr.length;j++){

     if (i === arr[j]){

        found = true;
        break;
      
        }
    }
    if (!found){
          console.log("Missing element is" +i);
    }
 }
 
// Find missing element [10, 11, 12, 14, 15]

let arr1= [10, 11, 12, 14, 15]

for (i=10; i<=15; i++){
    
    let found = false;
   
    for (j=0; j<arr1.length;j++){

        if (i===arr1[j]){
            found=true;
            break;
         
        }
        
      
    }
if(!found){
        console.log("Missing element is" +i);
        }
}

// Find the Missing element [2, 3, 4, 6, 7, 8]

let arr2 = [2, 3, 4, 6, 7, 8];

for (i=2;i<=8;i++){
    let found = false;
    for(j=0;j<arr2.length;j++){
        if(i===arr2[j]){
            found=true;
            break;
        }        
    }
    if(!found){
        console.log("Missing Element is" +i);
    }
}

// Find the missing element [20, 21, 23, 24]

let arr3 = [20, 21, 23, 24];

for (i=20;i<=24;i++){
    let found = false;
    for(j=0;j<arr3.length;j++){
        if(i===arr3[j]){
            found = true;
            break;
        }
    }
    if(!found){
        console.log("Missing element is"+i)
    }
}
