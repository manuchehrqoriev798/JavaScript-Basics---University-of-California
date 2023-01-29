// let myName                               // new style name                     // value of let can be changed AMAP
// myName = 'Manuchehr'                     // its value
// console.log(myName)                      // shows it
// const mySurname = 'Qoriev'               // new styel name                     // value of const must not be changed till the end of the program
// console.log(myName + mySurname)          // connceting both in one.




// const myGoal = 'Financial Independence' // expression with value of a string
// const myProfile = {          // creats object
//     myName: 'Manuchehr',     // key: value,
//     mySurname: 'Qoriev',     // key: value,
//     myAge: 18, 
//     myGoal: myGoal,          // connecting expression that the name of it and value was given before. Dublicate 
//     myGoal,                  // short type of Dublicate writing. Recomended to put them in the begining 
//     myUltimateGoal: myGoal,  // creating new key with value of the expression that was given
//     myInfo: {                // object inside of object
//         netWorth: 10^6,
//         mentalHealth: 'stable'
//     },                       // don't forget about coma (,) in order to add more property to the object
//     myChildren: function () {
//         console.log('hello')
//     }, 
//     myChildren(){
//         console.log('hello')      // short form of writing a method
//     },      
// }
// console.log(myProfile.myGoal)             // calling property
// console.log(myProfile.myChildren())       // calling method   //bug: why this is showing underfined and not showing just hello
// delete myProfile.myInfo.netWorth
// myProfile.myAdress = 'Naryn' // adding new value
// delete myProfile.myAdress    // deleting value
// console.log(myProfile)       // showed
// const myPassport = myProfile // created new link to the object
// myPassport.myAge = 'Eighteen'// edited the value that was given 
// const myAdress = 'Earth'     // created new property with name Earth 
// myProfile[myAdress]= 'Tjk'   // connected the property name to object and adds value to it 
// delete myProfile[myAdress]   // deletes new created preperty through square breckets
// console.log(myProfile.myChildren())
// console.log(myProfile.myGoal)
// console.log(myPassport)      // shows the final result   // window.console.log(myProfile) showed using global object window. window.console and just console the same 
// JSON.stringify(myProfile)    //bug: not showing convertation
 



// Mutation 
const a = 10
let b = a
b = 30 
console.log(a) //10
console.log(b) //30


const person = { // changing prepertie's value of object
age: 21,
name: 'Manu'
}
person.age = 22
person.name =' Manuchehr'
console.log(person.age)  // 22
console.log(person.name) // Manuchehr


const post = { //mutating object by adding change through copying object
year: 12,
authour: 'me'
}

const newPost = post
newPost.year = 34             // changing property's value of the object through another it's copy
newPost.authour = 'not me' 
console.log(newPost.year)
console.log(newPost.authour)