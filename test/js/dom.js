
// prompt('What is your name?')
// window.alert('Type ok to continue')


const header = document.getElementById('header')              // selecting element through Id
console.log(header)
console.dir(header.textContent)
header.textContent = 'Hello DOM !'
console.dir(header.textContent)

const header2 = document.querySelector('#h2-id')
const anotherHeader = header2.nextElementSibling            

setTimeout(() => {
    addStyles(header, 'JavaScript', 'white', 'red', '50px')
}, 2300);

setTimeout(() => {
    addStyles(header2, 'Practice', 'gold', 'white','70px')
}, 3300);

setTimeout(() => {
    addStyles(anotherHeader,'And you would succed !', 'white', 'green', )
}, 4300);

function addStyles (node, text, color = 'red', backgroundColor = 'gold', fontSize){
    node.textContent = text
    node.style.color  = color
    node.style.backgroundColor = backgroundColor
    node.style.padding = '2rem'
    node.style.textShadow = '3px 3px 20px white'
    node.style.textTransform = 'uppercase'
    node.style.wordSpacing = '20px'
    node.style.letterSpacing = '5px'
    node.style.textAlign  = 'center'
    if (fontSize){
        node.style.fontSize = fontSize
    } else {
        node.style.fontSize = '100px'
    }
}
4



// important: querySelector selects only the first element that is in the object
// // const header2 = document.querySelector('h2')
// const header2 = document.querySelector('.h2-class')
// const header2 = document.querySelector('#h2-id')
// // const header2 = document.querySelector('h2')
// console.dir(header2)

// const anotherHeader = header2.nextElementSibling            // selecting element that is sibling of another element
// console.dir(anotherHeader)      

const h2List = document.querySelectorAll('h2')
console.dir(h2List)                              
console.dir(h2List.length - 1)
console.dir(h2List[1])                                         // selecting element through grouping all same elements and then selecting neccesary one through massive index



// styling h2 through JS 
// header.style.color  = 'red'
// header.style.textAlign  = 'center'
// header.style.backgroundColor = 'gold'
// header.style.padding = '2rem'
// header.style.textShadow = '3px 3px 20px white'
// header.style.textTransform = 'uppercase'
// header.style.wordSpacing = '20px'
// header.style.letterSpacing = '5px'






// important: Course is informative. Check for information in MDN website