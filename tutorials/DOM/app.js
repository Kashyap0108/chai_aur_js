// // DOM Manipulation

// // Event Delegation



// document.querySelector('#sports').addEventListener('click', function(e) {

//     console.log(e.target.id + " is clicked");

//     const target = e.target;
    
//     if( target.matches('li')){
//           target.style.backgroundColor = 'lightgrey'
//   }
// });


// const sports = document.querySelector('#sports');
// const newSport = document.createElement('li');


// newSport.innerText = 'rugby';
// newSport.setAttribute('id', 'rugby');

// sports.appendChild(newSport)

// DOM manipulation

// Get element by id
// const title = document.getElementById('main-heading')
// console.log(title)

// get element by class name 
// const listItem = document.getElementsByClassName('list-items')
// console.log(listItem)

// get element by tag name 
// const listItem = document.getElementsByTagName('li')
// console.log(listItem);

// querySelector()
// const conatainer = document.querySelector('div')
// console.log(conatainer);


// querySelectorAll()
// const conatainer = document.querySelectorAll('div')
// console.log(conatainer);

// const title = document.querySelector('#main-heading')
// console.log(title);

// const listItem = document.querySelectorAll('list-items');
// for(i=0;i<listItem.length;i++){
//   listItem[i].style.fontSize = '2rem'

// }

// Create Elements

// const ul = document.querySelector('ul')
// const li = document.querySelector('li')

// adding the elements
// ul.append(li)

// modifying the text
// const firstListItem = document.querySelector('.list-items')


// modifying the text
// li.innerText = 'X-men'

// Modifyting the attributes and Classes
// li.setAttribute('id', 'main-heading')
// li.removeAttribute('id')

// const title = document.querySelector('#main-heading')
// console.log(title.getAttribute('id'))

// Traverse the DOM
// Parent Node Traversals
let ul = document.querySelector('ul')
console.log(ul)

// Child Node Traversals


// Sibling Node Traversals


// Event listeners 
const buttonTwo = document.querySelector('.btn-2')
function alertBtn(){
  alert('I also love javascript')
}
buttonTwo.addEventListener("click", alertBtn)
