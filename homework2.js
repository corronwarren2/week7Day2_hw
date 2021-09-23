//============ Exercise #1 ============//
/*
Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" 
Expected output
Given arr: ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
Output arr: ["even index","Baseball","even index","Goku","even index","Rodger"]
*/

const testArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //syntax -- for (counter; expression; incrementation/decrementation){ code for each loop }
    for (let i = 0; i <=arr.length; i+=2){
        arr.splice(i, 1, 'even index');
    }
    console.log(arr)
    // console.log(newNames);
    // newNames.splice(0,1, 'Brian');
    // console.log(newNames)
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))
//splice() syntax -> arrayname.splice(start,stop,)


//============ Exercise #2 ============//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

const person = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Taco Bell",
    burgers:"Shake Shack",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Shamrock Shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(person.pizza[0]);
console.log(person.pizza[1]);
console.log(person.shakes[0].mcDonalds)
console.log(person.shakes[0].cupids_candies)