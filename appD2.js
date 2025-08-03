// const myObject = {"Name":"Pokemon", "age": 25, "isStudent": true, "hobbies":["chess","badminton"], "address":{"city":"mumbai","zipCode":400001}}
//  console.log("Name : "+myObject.Name)
//   console.log(myObject.age)
//    console.log(myObject.isStudent)
// console.log(myObject.hobbies[0])
// console.log(`My code is ${myObject.address.zipCode}`)


/*create array of 1 to 100
triple each value
keep only those divisible by 5
sum all values
*/
let a = [];
//const na = Array.from( {length:100}, (_,index) => index+1)


// for (i=0;i<=100;i++)a.push(i)
//     a.map(x=>x*3).filter(x=>x%5==0).reduce((a,x)=>a+x)
// funtion abc(x) {return x*3}

//sum of all positive nos. in array
// a = [3,4,-5,-6,7]
// let sum = a.filter(x=> x>0).reduce((a,x)=>a+x)
// console.log(sum)



const users = [
    {name : "avin", age : 19},
    {name : "prem", age : 25},
    {name : "bob", age : 13}
];
let b = users.reduce((a,x)=>a+x.age,0)
const avg = b / users.length;
console.log(avg)