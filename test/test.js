// let myName                               // new style name                     // value of let can be changed AMAP
// myName = 'Manuchehr'                     // its value
// console.log(myName)                      // shows it
// const mySurname = 'Qoriev'               // new styel name                     // value of const must not be changed till the end of the program
// console.log(myName + mySurname)          // connceting both in one.




const myProfile = {          // creats object
    myName: 'Manuchehr',     // key: value,
    mySurname: 'Qoriev',     // key: value,
    myAge: 18                 
}
myProfile.myAdress = 'Naryn' // adding new value
delete myProfile.myAdress    // deleting value
console.log(myProfile)       // showed
const myPassport = myProfile // created new link to the object
myPassport.myAge = 'Eighteen'// edited the value that was given 
const myAdress = 'Earth'     // created new style with name Earth 
myProfile[myAdress]= 'Tjk'   // connected the style name to object and adds value to it 
delete myProfile[myAdress]   // deletes new created style and value through square breckets
console.log(myPassport)      // shows the final result


