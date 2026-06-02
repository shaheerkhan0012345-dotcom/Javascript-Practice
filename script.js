//ARRAYS

let fruit = ["mango", "apple", "apricot","banana"]

//FOR LOOP

for(let i=0; i<fruit.length;i++){
    console.log(fruit[i]);
}


//FOR-OFF LOOP

let cities = ["peshawar", "karachi","lahore","kashmir","chitral"];

for(let city of cities){
    console.log(city.toUpperCase());
}



//Practice

let marks = [45 , 98 , 67 , 55 , 33 , 84];

let sum = 0;


for(let val of marks){

    sum = sum + val;
}


let avg= sum / marks.length;
console.log(`Average Marks Of Student = ${avg}`);