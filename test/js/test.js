//lesson: STYLE and NAMING
// let myName                               // new style name                     // value of let can be changed AMAP
// myName = 'Manuchehr'                     // its value
// console.log(myName)                      // shows it
// const mySurname = 'Qoriev'               // new styel name                     // value of const must not be changed till the end of the program
// console.log(myName + mySurname)          // connceting both in one.




//lesson: OBJECT
// const myGoal = 'Financial Independence' // expression with value of a string
// const myProfile = {          // creats object
//     myName: 'Manuchehr',     // key: value,
//     mySurname: 'Qoriev',     // key: value,
//     myAge: 18, 
//     myGoal: myGoal,          // connecting expression that the name of it and value was given before. Dublicate 
//     // myGoal,                  // short type of Dublicate writing. Recomended to put them in the begining 
//     myUltimateGoal: myGoal,  // creating new key with value of the expression that was given
//     myInfo: {                // object inside of object
//         netWorth: 10^6,
//         mentalHealth: 'stable'
//     },                       // don't forget about coma (,) in order to add more property to the object
//     // myChildren: function () {
//     //     console.log('hello')
//     // }, 
//     myChildren(){
//         console.log('hello')      // short form of writing a method
//     }      
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
 



// // lesson: MUTATION 
// const a = 10
// let b = a
// b = 30 
// console.log(a) //10
// console.log(b) //30


// const person = { // changing prepertie's value of object
// age: 21,
// name: 'Manu'
// }
// person.age = 22
// person.name =' Manuchehr'
// console.log(person.age)  // 22
// console.log(person.name) // Manuchehr


// const post = { //mutating object by adding change through copying object
// year: 12,
// authour: 'me'
// }

// const newPost = post
// newPost.year = 34             // changing property's value of the object through another it's copy
// newPost.authour = 'not me' 
// console.log(newPost.year)
// console.log(newPost.authour) // getting acces through newPost copy of the object
// console.log(post.year)
// console.log(post.authour)    // getting acces through post copy of the object





// // lesson:  how to avoid mutation     

// // 1st avoides mutation only from the Root Object
// const main = {
//     name: 'no mutaion yet',
//     age: 22
// }
// const insideMain = main
// insideMain.address = 'Earth'
// insideMain.name = 'Inside first option'
// const mainMutation = Object.assign({}, main)  //2nd option:avoides mutation only from the Root Object - const mainMutation = {...main} 
// mainMutation.name = 'Mutation happend'
// console.log(main.name)                // object without mutation
// console.log(mainMutation.name)        // new object that is connected to main object but they are not mutated
// console.log(insideMain.name)
// console.log(main.age)                 
// console.log(mainMutation.age)         // both showing the same value because it was initially in the Root object and in the object of mainMutation
// console.log(main.address)             
// console.log(mainMutation.address)  
// console.log(insideMain.address)       // three of them are showing the same value because if object has copy to another object and from another object  was shared a value it would be saved to all



// console.log('Third option')
// // 3rd Option: 
// const post = {
//     name: 'no mutaion yet',
//     age: 22
// }
// const insidePost = post
// insidePost.name = 'Inside third option'
// const postMutation = JSON.parse(JSON.stringify(post))  
// postMutation.name = 'Mutation happend'
// console.log(post.name)               
// console.log(postMutation.name)   
// console.log(insidePost.name)  //bug: what is difirence between these three option of avoiding mutation  



//lesson: FUNCTION

// let a = 5
// let b = 3
// let c 
// c = a + b         // two line of the same code, it can be opitmized
// console.log(c)     
// a = 10
// b = 20
// c = a + b         // two line of the same code, it can be opitmized
// console.log(c)



// // EXAMPLES
// let d = 8
// let e = 4
// function add(d, e) {
//     const f = d + e         
//     console.log(f)          // if you write sum it would automatically add and show the value
// } 
// function sub(d, e){
//     const g = d - e 
//     console.log(g)
// }
// function div(d, e){
//     const h = d / e
//     console.log(h)
// }
// function mul(d, e){
//     const i = d * e
//     console.log(i)
// }
// function perimeterOfRectangle(d, e){
//     const j = 2 * (d + e)
//     console.log(j)
// }
// function areaOfRectangle(d, e){
//     const k = d * e
//     console.log(k)
// }
// function perimeterOfSquare(d, e){
//     e = d
//     const l = e * 4
//     console.log(l) 
// }
// function areaOfSquare(d, e){
//     e = d
//     const m = e * e
//     console.log(m)
// }
// console.dir(areaOfSquare)

// add(d, e)
// sub(d, e)
// div(d, e)
// mul(d, e)
// perimeterOfRectangle(d, e)
// areaOfRectangle(d, e)
// perimeterOfSquare(d, e)
// areaOfSquare(d, e) 



// function myFirstFn(a, b){
//     let c
//     a = a + 1
//     c = a + b
//     console.log(c) 
//     return c            // after this line function stops working 

// }
// myFirstFn(20, 13) // 34

// function myFn (){}
// myFn() // underfined
 




// // example: MUTATED
// const personOne = {                             // there is an object with property age and value 19
//     name: 'Manu',
//     age: 19
// }
// const personTwo = {                             // there is an object with property age and value 18
//     name: 'Manu',
//     age: 18
// }
// function increaseAgePerson(NameOfPerson){       // function that increases age property by 1 
//     NameOfPerson.age += 1
//     return NameOfPerson
// }
// increaseAgePerson(personOne)  //mutated to object, NOT GOOD    connecting link of object to the function                    
// increaseAgePerson(personTwo)  //mutated to object, NOT GOOD    connecting link of object to the function 
// console.log(personOne.age)
// console.log(personTwo.age)                      // requesting to show the final result to the screen


// // example UNMUTATED
// function changeNameOfThePerson(changeName){              
//     const changeNamePerson = Object.assign({}, changeName) // creating copy of the object
//     changeNamePerson.name = 'Manuchehr'
//     return changeNamePerson
// }
// const changeNamePerson = changeNameOfThePerson(personOne) // connecting copy of object to function
// console.log(personOne.name)
// console.log(changeNamePerson.name)



// example Callback Function

// function printName(){
//     console.log('Manuchehr')
// }
// setTimeout(printName, 1000);





// lesson: Global and Local variables

// let a = 20                  // global variable
// console.log(a)
// let b                       // global variable 
// function myFn (){
//     let b                   // local variable. Name of global and local variables can be the same
//     b = true                // this b property is new
//     a = 10                  // search for a inside here couldnt find. search outside there is so this a is let a in the begining
//     console.log(b)
// } 
// myFn()                     // true because of console
// console.log(a)             // 10 because of let a in the first
// console.log(b)             // underfined because let b is local variable and let b in the begining does not have any value




// const a = 10                 // constant value
// function myFn (){            // function
//     function insideMyFn(){   // function inside function
//         console.log(a)       // result 10
//         // insideMyFn()         // nothing happens because calling function inside of function is nothing
//     }
//     insideMyFn()             // сall funtion inside of big function in the big function
// }
// // insideMyFn()              // eror
// myFn()



 
// lesson: 'use strict'                 // with this line in the begining it shows eror     
// function myFn(){
//     a = 10
//     console.log(a)
// }
// myFn()                          // without 'use strict' it shows 10



// Lesson: OPERATORS

// Boolean (0)                     // false
// Boolean (4.5)                   // true
// Boolean ('something')           // true
// Boolean (undefined)             // false
// typeof 10                       // 'number'
// typeof 'something'              // 'string'
// typeof false                    // boolean
// typeof undefined                // 'underfined'
// typeof 10 === 'my name'         // false
// typeof 10 === 'number'          // true 
// typeof x === y                  // if you do not know type of object just use typeof to find rather type of the object


// 1st Logicaly

// Operator !. 
// if it is false becomes true. Also opposite

// console.log(!10)        //false
// console.log(!0)         //true     
// console.log(!undefined) //true
// console.log(!'abc')     //false           
// console.log(!')        //true       
// console.log(!false)     //true  
// Double !!
// console.log(!!10)        //true
// console.log(!!0)         //false     
// console.log(!!undefined) //false
// console.log(!!'abc')     //true           
// console.log(!!')        //false       
// console.log(!!false)     //false 
// console.log(!!!0)        // true

// const main = {}             // empty object is still true
// console.log(!!main)



// Operator &&.
// property_1 && property_2. Search for the first false property and that would be the value. Both should be correct and result would be value of Second property.
// console.log(10 && 'Manu')          // both correct, so answer is Manu
// console.log(false && 'Manu')       // one of them is false, so result would be false  
// console.log(true && false)         // one of them is false, so result would be false   
// let b = 10
// b && console.log('Mission passed succesfully !')   // 'Mission passed succesfully !'
// let c
// c && console.log('Mission passed succesfully')     // undefined, because c is indefined
// console.log(10 && 15 && 0 && 'Manu')                  // 0 is the first false value, so it would be the final value
// console.log(0 && 15 && 0 && 'Manu')                   // 0 is the first false value, so it would be the final value, the rest would be ignored
// console.log(true && 15 && ' ' && 'Manu')              // all correct so final value is last value





// Operator ||.
// property_1 || property_2. Search for the first true property and that would be the value. Both should be correct and result would be value of  second property.
// console.log(10 || 'Manu')         // both correct, final value is first true one
// console.log(false || 0)           // both of them are incorrect, second one is final value. 0
// console.log(0 || false)           // none of them are incorrect, second one if final value. false
// console.log(false || 10)          // 10 is first correct so it would be final value          
// console.log(10 || false)          // 10 is first correct so it would be final value  
// console.log(10 || true||30 || ' ')               // first is correct so it would be the final answer and other values would be ignored 
// console.log(10 || undefined || 0 || '')          // first is correct so it would be the final answer and other values would be ignored 
// console.log(false || undefined || 15 || 0 || '') // 15 is the first true value, so it would be the final value
// console.log(false || undefined || '' || false)   // all are incorect, so final value is last value



// console.log( 0 || false || 10 && false || false)






// Spread operator. ...
// const buy = {
//     size: 14,
//     request: 'look',
//     color: 'blue'
// }
// const buyButton = {
//     color: 'white',      // rewrite
//     ...buy,              // again rewrite index color 
//     color: 'red',        // again rewrite index color
//     request: 'buy'       // again rewrite index request
// }
// console.table(buyButton) 
// const orderButton = {
//     order: 'taxi',
//     request: 'order'
// }
// const buyCombination = {
//     ...buy,
//     ...buyButton,
//     ...orderButton
// }
// console.table(buyCombination)





// Concatenation of strings. '' + ''
// let c 
// const myName = 'Manuchehr'      
// const mySurname = 'Qoriev'
// c = myName + ' ' + mySurname
// console.log(c)

// f = `${myName} ${mySurname}`      // template string
// console.log(f)
// g = `${'My'} ${'name'} ${'is'} ${'Manuchehr'}${'.'} ${'I'} ${'am'} ${'student'} ${'of'} ${'UCA'}${'.'} `
// console.log(g)
// h = `${'My name is Manuchehr. I am student of UCA'}`
// console.log(h)

// let d = 'Manuchehr' + ' Qoriev'   // there is a space before Qoriev
// console.log(d)
// let e = 'Manuchehr' + ' ' + 'Qoriev'
// console.log(e)

// console.log(10 + 'Manuchehr')     // coertion here. 10 from number to string automatically
// console.log('Manuchehr' + 10)     // coertion here. 10 from number to string automatically
// console.log(undefined + 'abc')    // undefinedabc. WTF. Always be sure about the type of your values






// lesson: Functional Expression

// const myFn = {
//     age: 18,
//     size: 16, 
// }

// // function avarage (myFn){
// //     let avarageNumber
// //     avarageNumber = (myFn.size + Myfn.age) / 2
// //     console.log(avarageNumber) 
// // }
// // avarage()

// const myFunction = function() {
//     let a
//     let b
//     let c
//     a = myFn.age 
//     b = myFn.size
//     c = (myFn.age + myFn.size) / 2
//     console.log(c)
// }
// myFunction()
// setTimeout( function() {                      // no name of function here. Anonym funcion
//     console.log('Final result')
// }, 1000 )


// const sayHello = function(name) {
//     console.log(`Hello, ${name}!`);
// };
// sayHello('Manuchehr')




// // lesson: Arrow funtion
// const myFn = {
//     age: 18,
//     size: 16, 
// }

// const myFunction = () => {     // like funtion expression with shorter form.    =>
//     let a
//     let b
//     let c
//     a = myFn.age 
//     b = myFn.size
//     c = (myFn.age + myFn.size) / 2
//     console.log(c)
// }
// myFunction()
// setTimeout( () => {                      
//     console.log('Final result')
// }, 1000 )



// // How to make Arrow function even shorter.

// (a) => {                                 // when it has just one parameter
//     // body of funcion
//     // return is used
// }

// (a, b) => a + b                         // no {} if function has just one expression. Return does not needed. It would be automatically.





// // Lesson: Default Funtion

// function mulTwoNumber (first, second = 1){     // second = 1 is a default value
//     console.log(first * second) 
// }
// mulTwoNumber(2, 3)                       // 6 because there are two variables that has been multiplied
// mulTwoNumber(4)                          // 4 because just 4 multiply by default value(1) 

// // function multiplyTwoNumber (value, multiplier = 2){
// //     console.log(value * multiplier)
// // } 
// // multiplyTwoNumber(2, 3)                 // 6 because there are two variables that has been multiplied
// // multiplyTwoNumber(10)                   // 4 because just 4 multiply by default value(1) 

// const myFE = function(value, multiplier = 2){  // Function Expression 
//     console.log(value * multiplier)
// }
// myFE(12, 12)
// myFE(2)

// const myAF = (one, two = 0) => {             //  Arrow Function
//     console.log(one * two)
// }
// myAF(2, 3)
// myAF(7)



// const newArticle = (article, time = Date()) => ({  //Implicit return   // bug: did not understand what does this mean. Video Bagdan 4:57 
//     ...article, 
//     time: time,  
// })                                                 //Implicit return
// const newAuthor = {
//     id: 1,
//     author: 'Manuchehr'
// }
// newArticle(newAuthor)   
// console.table(newArticle(newAuthor))

