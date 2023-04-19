const GLOBALB = 10;

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

function functionConst() {
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
  console.log(typeof nullValue);
  console.log(typeof undefinedValue);
}

// DIFFERENCE IN CLASS AND SHORTHAND

const stringObject = new String('hello'); // ['h', 'e', 'l', 'l', 'o']
console.log(stringObject.toString());
const stringConstant = 'hello'; // ['h', 'e', 'l', 'l', 'o']
console.log(stringConstant);

// DATE

const dateExample = new Date();
console.log(dateExample.getTimezoneOffset());
console.log(dateExample.toString());
console.log(dateExample.toISOString());
console.log(dateExample.toLocaleDateString());
console.log(dateExample.toUTCString());

// ARRAY

const newArray = [];
const newArrayIns = new Array(5);
newArrayIns.fill('');
newArray.push('', 'hello', 'world');
newArray[3] = 'CGM';
newArrayIns[5] = 'hello';

let newNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//for(let i=0; i < newArray.length; i++) {
//console.log(newArray[i]);
//}

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

// true = 1 - false = 0
//console.log(0 === true)
// = assignment
// == check (not strict)
// === check strict

//const objectIn = new Object();

const object1 = { a: '1' };
const object2 = { a: '1' };
const object3 = object1;

const deepObject = {
  b: {
    c: {
      d: {},
    },
  },
};

// spred operator
const object4 = { ...object1 };
//const object5 = cloneDeep(object1);

console.log(typeof object1);
console.log(typeof object2);
console.log(typeof object3);

const op1 = '1';
const op2 = 1;
/*
console.log(typeof op1);
console.log(typeof op2);

console.log(object1 == object2);
console.log(object1 === object2);

console.log(object1 == object3);
console.log(object1 === object3);
*/
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
