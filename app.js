console.log("Heelo");
// console.log("hello World")
// const cowsay = require("cowsay");
// console.log(cowsay.say({text:"i m a mooodule", e:"^^",T:"V"}))

// let a = 5;       // making variables
// const abc = 10;   //making constants
// console.log("The value of a is "+a);   /* 2 ways to print */
// console.log(`The value of a is also ${a}`);

// function greet(name,age) //function working
// {
//     let message = `Hello, ${name}! I am ${age} years old`;
//     return message;
//     }
//     const greeting = greet("Alice",25);
//     console.log(greeting);

// let counter = 0 ;                   // while loop
// while (counter<3){
//     console.log(`Loop iteration: ${counter}`);
//     counter +=1;
// }
// console.log("while loop is finished.")

// const fruits = ["mango", "apple","papaya","orange"]       // for loop using arrays
// for(i=0;i<=fruits.length-1;i++)
// {
//     const fruit = fruits[i];
//     console.log(`Fruit at index ${i} is : ${fruit}`)
// }

// let temp =15;               // conditional statements
// if (temp>30){
//     console.log("Its a hot day");
// }
// else if(temp>20){
//     console.log("Its a pleasant day");
// }
// else{
//     console.log("Chill day");
// }

// function calcArea(length, width = 1){       // fn applications
//     return length*width;
// }
// const areaRec= calcArea(5,10);
// console.log(`The area of the Rectangle is : ${areaRec}`);
// const areaSq= calcArea(4,4);
// console.log(`The area of the Square is : ${areaSq}`);

// const getSum = function(a,b) {return a+b;};  //more ways to use functions
// const sum = getSum(5,20);
// console.log(`The sum is ${sum}`);


// const getMul =  (a,b) => a*b;
// const mul = getMul(5,20);
// console.log(`The multiplication is ${mul}`);


// find sum of all numbers under 1000 that are divisible by 3 or 5
// let i = 0;
// let sum=0;
// for (i=0;i<1000;i++)
//     {
//     if (i%3==0 || i%5==0 )
//     {
//         sum = sum+i;
//     }
//     }
//     console.log(`The sum of all the numbers divisible by 3 or 5 under 1000 is : ${sum}`);


//sum of all even fibonacci numbers undr 400000 
// let a=1;
// let b=1
// let sum=0;
// let nextno=0;
// while (nextno<4000000)
// {   
//     nextno = a+b;
//     a=b; 
//     b=nextno;
//         console.log(nextno);
// if (nextno % 2== 0)
// {
//     sum=sum + nextno;
// }   
// }
// console.log(`The sum of all fibonacci numbers under 4000000 is ${sum}`);


/*prime factors of 13195 are 5,7,13,29                                     // nahi hua ye
what is the largest prime factor of 600851475146*/


//sum of digits of 100 factorial                      //wrong code corretc it
// function fact(n)
// {
// let n = 
// }
// let i=0;
const digits = ["1","2", "3", "4", "5", "6", "7", "8", "9"];
let result = "";
let nd=digits.join("")
for (let i=0; i<= digits.length;i++)
{
    
    result+=digits[i];
}
/////////////////////////////////
console.log(nd)
// let sum=0;
// let fact = 1;
// for(i=100;i>0;i--) 
// {
//     fact = fact*i;
// }
// console.log(fact)
/////////////////////////////

