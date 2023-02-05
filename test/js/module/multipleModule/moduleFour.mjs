import {                            
    one,                           // name should be the same
    two,                           // name should be the same
    three as renamedThree                   // this one is already renamed
} from './moduleThree.mjs'
console.log(one)
console.log(two)
console.log(renamedThree)