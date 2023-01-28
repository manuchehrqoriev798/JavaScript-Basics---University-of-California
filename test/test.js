// let myName                               // new style name                     // value of let can be changed AMAP
// myName = 'Manuchehr'                     // its value
// console.log(myName)                      // shows it
// const mySurname = 'Qoriev'               // new styel name                     // value of const must not be changed till the end of the program
// console.log(myName + mySurname)          // connceting both in one.



const myGoal = 'Financial Independence' // expression with value of a string
const myProfile = {          // creats object
    myName: 'Manuchehr',     // key: value,
    mySurname: 'Qoriev',     // key: value,
    myAge: 18, 
    myGoal: myGoal,          // connecting expression that the name of it and value was given before. Dublicate 
    myGoal,                  // short type of Dublicate writing. Recomended to put them in the begining 
    myUltimateGoal: myGoal,  // creating new key with value of the expression that was given
    myInfo: {                // object inside of object
        netWorth: 10^6,
        mentalHealth: 'stable'
    }                 
}
delete myProfile.myInfo.netWorth
myProfile.myAdress = 'Naryn' // adding new value
delete myProfile.myAdress    // deleting value
console.log(myProfile)       // showed
const myPassport = myProfile // created new link to the object
myPassport.myAge = 'Eighteen'// edited the value that was given 
const myAdress = 'Earth'     // created new style with name Earth 
myProfile[myAdress]= 'Tjk'   // connected the style name to object and adds value to it 
delete myProfile[myAdress]   // deletes new created style and value through square breckets
console.log(myPassport)      // shows the final result


