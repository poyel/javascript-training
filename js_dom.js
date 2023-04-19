/*
 * window and document are global variable, always available
 * that contains all the properties and method to navigate through the DOM,
 * manipulate the DOM, get reference to elements in page,
 * add and remove event listener to and from elements.....
 */
console.log(window);

/*
 * the document property is contained inside the window,
 * but is possible to omit the window variable when access to document property.
 *  window.document === document
 */
console.log(document);

// how to get elements pointer array using its tag name
const main = document.getElementsByTagName('main');
// how to get elements pointer array using the class name
const mainFromClass = document.getElementsByClassName('main-title');

// change dinamycally the color of the main tag
main.item(0).style.color = 'blue';

// assign a click event listener to the button
document.getElementById('test-button').addEventListener('click', (event) => {
  alert('Pressed');
});

// assign a click event listener to title
main.item(0).addEventListener('click', (event) => {
  alert('Pressed from title');
});

// navigate down the tree of the dom
console.log(main.item(0).getElementsByTagName('h1').item(0)); // inside the main tag
console.log(main.item(0).nextElementSibling); // as next sibling in the same level
