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






// lesson:  Error Handling

// const errorHandling = () => {
//     throw new Error('Error come to your program !!!')
// }
// errorHandling()                                       // till here goes and stops analizing
// console.log('Continue my child...')                   // did not show up because there were uncought errro in the program




// const errorHandling = () => {                              // you cannot see the result in the terminal. See it in the browser
//     throw new Error('Error come to your program !!!')
// }
// try {
//     errorHandling()     
// } catch (error) {
//     console.error(error)
//     console.log(error.massage)
// }
// console.log('continue my child ...')





// // lesson: Statement

// 'abc';
// a = a + 2;
// c = a + b;                                   // instruction that does a task
// c = a + b                                    // expression that returns value
// d = 'Good ' + 'morning!';
// myFn(c, d); 
// console.log('Hey put ; after all instruction (not after blocks)');



// lesson: Arrays
// const myArray = [1, 2, 3]
// console.log(myArray)
// const myArray2  = new Array (1, 2, 3)
// console.log(myArray2)

// console.log(myArray === myArray2)             // because array is an object and these two arrays have difirent link that is connected to a part in storage of laptob

// const myArray3 = myArray                      // links are copyid
// // // const myArray3 = [1, 4]
// // console.log(myArray3)                      // bug: how to connect two arrays         
// console.log(myArray === myArray3)             // true. Because both has the link is connected to one object 



// const myObject = {                               // object that has the same values as array. Even though they have the same properties they are object and array.
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3
// }
// console.log(myObject)
// console.log(myObject[0])                          // using [] for number
// console.log(myObject.length)                      // using . for string

// // const myArray = [1, 2, 3]                       // array that has the same values as object. Even though they have the same properties they are object and array.
// // console.log(myArray)



// const myArray = new Array(1, 2, true, 'Manuchehr')
// console.log(myArray)
// // console.log(myArray.0)                            // not possible because values of array are number type and calling them through . is not ok. Use []
// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])
// console.log(myArray[3])
// console.log(myArray.length)

// // myArray.length = 7                                   // not recommended to use such kinda influation
// // console.log(myArray)                                 // 3 empty items

// myArray[1] = 'changed'
// myArray[4] = 'new item in array'
// console.log(myArray)
// console.log(myArray.length)




// Array methods

// const newMyArray = [1, 2, 3, 4]
// // console.log(newMyArray)
// // // push
// // newMyArray.push(5, true, 'adds')                                      // adds in the end of array one or more element
// // console.log(newMyArray)
// // // pop
// // newMyArray.pop()                                                      // deletes the last element of the arrary. 
// // console.log(newMyArray)
// // const removedLastElement = newMyArray.pop()                               // deletes the last element and returns it through a new variable
// // console.log(removedLastElement)                                           // deleted element
// // console.log(newMyArray)
// // // unshift
// // newMyArray.unshift('add in the begining')                             // adds in the begining of the array. Rare used thing because index of all elements inside the array changes
// console.log(newMyArray)
// // shift
// newMyArray.shift()-                                                   // deletes the first element of the array
// console.log(newMyArray)
// const removedFirstElement = newMyArray.shift()
// console.log(removedFirstElement)
// console.log(newMyArray)


// // forEach - does the statement with each element of the array
// const newArray = [1, 2, 3]                                          // it does not mutate the original arrary
// // console.log(newArray)
// // newArray.forEach((a) => {                                           // this is not shorter form 
// //     console.log(a*3)                                                // does a  statement with each element of the array
// // })
// // console.log(newArray)

// const result = newArray.forEach(a => console.log(a*5))
// console.log(result)                                                    // in the end there is undifined, because forEach just does the statement and does not return any other value
// console.log(newArray)


// map - does the same as forEach, but returns the result in the form of new array
// const myArray = ['a', 'b', 'c']
// console.log(myArray)                                                  
// // const newArray = myArray.map((a) => {                                 // array function 
// //     return a + 'eeeee'
// // })    
// const newArray = myArray.map(function (a) {                              // Anonym function
//     return a + 'eeeee'
// })                                                                     
// console.log(newArray)                                                     // new array
// console.log(myArray)                                                      // original array





// lesson: Destructuring in JavaScript

// const studentProfile = {
//     name: 'Sangali',
//     surname: 'Sangaliev',
//     age: 18,
//     hasRegistered: false,
// }
// const {name, surname, age, hasRegistered} = studentProfile                   // destructuring an object
// console.log(name)
// console.log(surname)
// console.log(age)
// console.log(studentProfile)

// const myArray = new Array (1, 2, 3, 4) 
// const [numberFirst, numberSecond, numberThird, numberFourth] = myArray       // destructuring an array
// console.log(numberFirst)
// console.log(numberSecond)
// console.log(numberThird)
// console.log(numberFourth)
// console.log(myArray)


// const studentProfile = {
//     name: 'Sangali',
//     surname: 'Sangaliev',
//     age: 18,
//     hasRegistered: false,                                            // i did not destructured this parameter of the object
// }
// const studentInfo = ({name, surname, age}) => {                      // destructuring parameters of a function 
//     if (!age || age < 0) {
//         return console.log(`User ${name} ${surname} did not indicate his/her age `)        
//     }
//         return console.log(`User ${name} ${surname} is ${age} years old `)
// }
// studentInfo(studentProfile)






// lesson: Conditional statements 
// if
// let a = 10
// if (a > 5) {                                                             // only if expression is true then it does the statement. If no it returns the original value
//     a +=20
// }
// console.log(a)

// const studentName = {
//     name: 'Manucher'
// }
// const {name} = studentName
// const studentInformation = ({name}) => {
//     if (!!studentName.name){
//     console.log(`Welcome to your impire dear ${name}`)
// }
// }
// studentInformation(studentName)


// if ... else
// let a = 18

// if (18 > a > 0){
//     console.log(`You are an underage, go and drink milk`)
// } else {
//     console.log(`You are an adult, good luck in your life`)
// }



// if...else if...else
// let age = 14
// if (age >= 18){
//     console.log(` You are an adult, good luck in your life`)
// } else if (age > 0 && age < 18){
//     console.log(`You are an underage, go and drink milk`)
// } else {
//     console.log(`Are you fucking kinding me. Go and study math`)
// }



// let age = 18                                                             // better readable structure rather than if...else if...else
// if (age >= 18){
//     console.log(` You are an adult, good luck in your life`)
// }
// if (age < 18 && age > 0){
//     console.log(`You are an underage, go and drink milk`)
// } 

// if (age <= 0){
//     console.log(`Are you fucking kinding me. Go and study math`)
// }




// lesson: Using if in function

// const sumPositiveNumbers = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return console.log('One of the arguments is not a number')
//     }           

//     if (a <= 0 || b <= 0) {
//         return console.log('One of the number is not positive')
//     }

//     return console.log(a + b)
// }
// sumPositiveNumbers(12, 2)




// lesson: Switch statement
// const month = 2
// switch (month){
//     case 1:
//         console.log('January')
//         break
//     case 2: 
//         console.log('February')
//         break
//     case 12: 
//         console.log('December')
//         break
//     default:
//         console.log('Not a winter month')
// }




// lesson: Ternary statement/operator


// const value = '12'

// value 
// ? console.log('Result is true')
// : console.log('Result is false')



// const value1 = 7
// const value2 = 10
// value1 && value2
// ? myFn(value1, value2)
// : myFn2()
// myFn()


// let value = -11
// console.log(value >= 0 ? value : -value)            // if number is less than zero, it makes it positive

// value = -25
// const rest = value >= 0 
// ? value 
// : -value
// console.log(rest)



// lesson: Loop - do not use in arrays

// without for loop
// let i = 0
// console.log(i)
// i ++
// console.log(i)
// i ++
// console.log(i)
// i ++
// console.log(i)
// i ++    

// const myArray = [true, 'abc', 2]
// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])

// const myObject = {
//     age: 12,
//     registered: false,
//     company: 'IPAM'
// }
// console.log(myObject.age)
// console.log(myObject.registered)
// console.log(myObject.company)



// with for loop
// for (let i = 0; i < 10; i += 2){                                         
//     console.log(i)
// }


// const myArray = ['First', 'Second', 'Third', true, false]                             // hard to read and harder to got what does it mean.
// for ( let i = 0; i < myArray.length; i++){
//     console.log(myArray[i])
// }


// const myForeachArray = ['first', 'second', 'third', 'fourth']                         // easy to read and more undestandable
// myForeachArray.forEach((element, index) => {
//     console.log(element, index)                                                      // element means value of element inside of array. Index means index of the element
// })



// While loop
// let i = 0
// while (i < 10){                            // has limit
//     console.log(i)
//     i ++                                   // starts with initial given value. In our case 0
// }
// let i = 0
// while (i < 10){                            
//     i ++                                   // start with i++ from initial. One more than initial value that was given. In our case it was given 0, but it starts with 1
//     console.log(i)
// }
// let a = 0
// while (a > 10) {                           // infinity 
//     console.log(a)
//     a++
// }


// Do while loop - 
// let i = 1
// do {
//     console.log(i)
//     i++
// } while ( i < 0)

// let i = 0                                 // works at least once
// do {
//     console.log(i)
//     i++
// } while ( i < 0)



// For-in loop
// const myObject = {                          
//     status: 'unemployed',
//     age: 18
// }
// for ( const key in myObject){               // for-in loop in object
//     console.log(key, myObject[key])
// }
// Object.keys(myObject).forEach(key =>{      // forEach instead of for-in in object
//     console.log(key, myObject[key])
// })
// Object.values(myObject).forEach(value =>{  // forEach for getting just value of the object
//     console.log(value)
// })

// const myArray = [1, 2, 3, 4, 'five']       // for-in loop in array
// // for ( const key in myArray){
// //     console.log(key, myArray[key])
// // }
// myArray.forEach(function(element){
//     console.log(element)
// })

// myArray.forEach(element =>{
//     console.log(element)
// })


// For-of loop
// const myString = 'Manuchehr'
// for (const letter of myString){
//     console.log(letter)
// }
// const myArray = ['first', 'second', 'third']

// for (const element of myArray){                    // for-of
//     console.log(element)
// }
// myArray.forEach(something => {                     // forEach is better
//     console.log(something)
// })
// for (const index of myArray){                      // this two are showing the same as two previous one, because name here does not matter. All name are value of the elements in array           
//     console.log(index)
// }
// for (const value of myArray){                      // this two are showing the same as two previous one, because name here does not matter. All name are value of the elements in array    
//     console.log(value)
// }



// Lesson: Module 






