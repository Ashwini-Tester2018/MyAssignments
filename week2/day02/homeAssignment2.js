// Check Whether Two Strings Are Anagrams listen and silent

let str1 = "SILENT".toLowerCase();
let str2 = "LISENT".toLowerCase();

if (str1.length == str2.length){
    
  let sort1 = str1.split('').sort().join('');
  let sort2 = str2.split('').sort().join('');

   if(sort1 == sort2){

    console.log("The strings are Anagrams");
   }
   else{
    console.log("The strings are Not Anagrams");
   }
} 

// Check Whether Two Strings Are Anagrams triangle and integral

let str3 = "triangle".toLowerCase();
let str4 = "integral".toLowerCase();

if (str3.length == str4.length){
    let sort3 = str3.split('').sort().join('');
    let sort4 = str4.split('').sort().join('');

    if(sort3 == sort4){
        console.log(`${str3} and ${str4} strings are Anagrams`);
            }
            else{
                console.log(`${str3} and ${str4} strings are Anagrams`);
            }
}

// Check Whether Two Strings Are Anagrams hello and world

    let str5 = "hello".toLowerCase();
    let str6 = "World".toLowerCase();

    if(str5.length==str6.length){
        let sort5 = str5.split('').sort().join('');
        let sort6 = str6.split('').sort().join('');

        if(sort5==sort6){
            console.log(`${str5} and ${str6} are Anagrams`);
        }
        else{
            console.log(`${str5} and ${str6} are not Anagrams`);
        }
    }

    // Check Whether Two Strings Are Anagrams aabb and abbb

    let str7 = "aabb".toLowerCase();
    let str8 = "abbb".toLowerCase();

    if(str7.length == str8.length){
        let sort7 = str7.split('').sort().join('');
        let sort8 = str8.split('').sort().join('');

        if(sort7==sort8){
            console.log(`${str7} and ${str8} are Anagrams`);
        }
        else{
            console.log(`${str7} and ${str8} are not Anagrams`);
        }
    }

    // Check Whether Two Strings Are Anagrams Debit Card and Bad Credit

    let str9 = "Debit Card".toLowerCase();
     str9 = str9.split(' ').join('');
    let str10 = "Bad Credit".toLowerCase();
     str10 = str10.split(' ').join('');
   if(str9.length == str10.length){
    let sort9 = str9.split('').sort().join('');
    let sort10 = str10.split('').sort().join('');
    if(sort9==sort10){
        console.log(`${str9} and ${str10} are Anagarms`);
    }
    else{
        console.log(`${str9} and ${str10} are Not Anagrams`);
    }
   }