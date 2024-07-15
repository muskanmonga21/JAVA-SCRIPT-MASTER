"use strict";

function calcAge(birthYear){
    const age = 2024 - birthYear;
    // console.log(firstName);
    
     function printAge(){
         const output = `${firstName}, You were ${age}, born in ${birthYear}`;
           console.log(output);
         
            if(birthYear >= 2000 && birthYear <= 2005){
                var millenial = true;
        //Creating NEW variable with same name as outer scope's variable;
        const firstName = "Joe";
        
        //Reassigning outer scope's variable
        const output = "NEW OUTPUT!!!";
        const says = `OH! ${firstName} You're very lucky!`;
        // console.log(output);
        console.log(says);
        
        function add(a,b){
            return a+b;
        }
    }   
    console.log(millenial);
    //  console.log(says);
    // console.log(add(3,4));
    console.log(output);
}
    printAge();
    return age;
}

const firstName = "Muskan";
calcAge(2002);
// console.log(age);
// printAge();