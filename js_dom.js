console.log(window);
console.log(document);

const main = document.getElementsByTagName('main');
const mainFromClass = document.getElementsByClassName('main-title');

main.item(0).style.color = 'blue';

document.getElementById('test-button').addEventListener('click', (event) => {
  alert('Pressed');
});

main.item(0).addEventListener('click', (event) => {
  alert('Pressed from title');
});

console.log(main.item(0).getElementsByTagName('h1').item(0));
