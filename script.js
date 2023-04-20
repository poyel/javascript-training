const GLOBALB = 10;

// differences when use let and var to define a variable
// in different scopes
function function1() {
  var x = 2;
  if (true) {
    var x = 1;
    console.log(x);
  }
  console.log(x);
}

function function2() {
  let x = 2;
  if (true) {
    let x = 1;
    console.log(x);
  }
  console.log(x);
}

function functionConstUndefined() {
  const lolcab = '';
  let change; // undefined
  let i = 0;
  while (i <= 10) {
    change = change + 1;
    i++; // i = i + 1;
  }
  console.log(change); // will print nan (not a number cause change has not a initial value)
}

function functionConstCorrect() {
  const lolcab = '';
  let change; // undefined
  let i = 0;
  change = 0;
  while (i <= 10) {
    change = change + 1;
    i++; // i = i + 1;
  }
  console.log(change);
}

function functionNullUndefined() {
  const nullValue = null;
  let undefinedValue; // const undefinedValue = undefined;
  console.log(typeof nullValue); // will print object
  console.log(typeof undefinedValue); // will print undefined
}

// DIFFERENCE IN CLASS AND SHORTHAND
// If you use the String Class and you instantiate the string object
// with its constructor
// string are always treat as array
const stringObject = new String('hello'); // ['h', 'e', 'l', 'l', 'o']
console.log('string - print without toString', stringObject);
console.log('string - print with toString', stringObject.toString());
const stringConstant = 'hello'; // ['h', 'e', 'l', 'l', 'o']
console.log('string - print when shorthand', stringConstant);

// DATE

const dateExample = new Date();
console.log('date - timezone offset', dateExample.getTimezoneOffset());
console.log('date - toString', dateExample.toString());
console.log('date - to iso string', dateExample.toISOString());
console.log('date - locale date string', dateExample.toLocaleDateString());
console.log('date - utc string', dateExample.toUTCString());

// ARRAY
// array are always dynamic
// also when you define an array using the constructor and pass a initial dimension
const newArray = [];
const newArrayIns = new Array(5);
newArrayIns.fill('');
newArray.push('', 'hello', 'world');
newArray[3] = 'CGM';
newArrayIns[5] = 'hello';

let newNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// loop with for loop
function loopArrayWithForLoop() {
  for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
  }
}

function loopWithForEach() {
  for (let value in newArray) {
    console.log(value);
  }
}

function loopWithIterator() {
  let sum = 0;
  newArray.forEach((value) => {
    sum = sum + value;
    console.log(value);
  });
}

function mapArrayWithIterator() {
  return newNumberArray.map((value) => {
    return value * 2;
  });
}

function filterWithIterator() {
  return newNumberArray.filter((value) => value % 2 === 0);
  /*
    const newArray = [];
    for() {
      if (condition) {
        add in the new Array
      }
    }
    return newArray
  */
}

// OBJECT

const object1 = { a: '1' };
const object2 = { a: '1' };
const object3 = object1;

const complexObject = {
  b: {
    c: {
      d: {},
    },
  },
};

// deep clone object
// with spred operator
const object4 = { ...object1 };
// or using built-in structuredClone method to perform deep clone of the object
const object5 = structuredClone(object1);

console.log(typeof object1);
console.log(typeof object2);
console.log(typeof object3);

// COMPARISON
// = assignment
// == check (not strict)
// === check strict

const op1 = '1';
const op2 = 1;

console.log(typeof op1);
console.log(typeof op2);
console.log(object1 == object2);
console.log(object1 === object2);
console.log(object1 == object3);
console.log(object1 === object3);
console.log(object1 === object4);

object3.a = '3';

console.log(object1.a);

console.log(op1 == op2);
console.log(op1 === op2);

console.log(newNumberArray);

newNumberArray[0];
newNumberArray[1];
newNumberArray[2];

object1.b = '3';
console.log(object1);

//loopWithForEach();
//loopWithIterator();
//console.log(mapArrayWithIterator());
//console.log(newNumberArray);
//console.log(filterWithIterator());

//console.log(newArrayIns);
/*
const newNumber2Array = [...newNumberArray, ...newArray, ...newArrayIns];
console.log(newNumber2Array);

function functionName(fn) {
  const x = 1;
  const y = 2;
  fn(x, y);
}

const anonymusFunction = (x, y) => {
  console.log('print from anonymus', x, y);
};

functionName(anonymusFunction);
*/
