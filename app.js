// // const age = 20

// // if (age > 18){
// //     console.log("You can vote now!");

// // }
// // else{
// //     console.log("You can play pubg now");

// // }


// // console.log("Hey there this is my first program of nodejs")

// /*
// setInterval(() =>{
//     console.log("Hello world")
// }, 1000)

// */

// // Modules 

// const Peter = "Shreyansh"
// const age = 23 

// const sayHi= (name) =>{
//     console.log(`hello there ${name}`);
    

// }

// sayHi("Praveen")
// sayHi(Peter)
// sayHi("My age is "+age)

// console.log(process.env.USERNAME)

// console.log(__dirname)
// console.log(__filename)
// console.log(module)


const {readFileSync, writeFileSynce} = require('fs')

const first = readFileSync('./nothing.txt', 'utf8')

console.log(first)
