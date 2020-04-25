# JavaScript

- [Advanced Operators](#advanced-operators)
- [Array = []](#array-=-[])
- [Object = {}](#object-=-{})
- [Mutable / Immutable types](#mutable-/-immutable-types)
- [Loops](#loops)

## Advanced Operators

```js
let a = 5;
c = a++; // c equals 5 and a equals 6
c = ++a; // c equals 6 and a equals 6

c = a--; // c equals 5 and a equals 4
c = --a; // c equals 4 and a equals 4
```

## Array = []

> The Array object is used to store multiple values in a single variable

### Prototype

- The prototype constructor allows you to add new properties and methods to the Array() object.
- When constructing a property, ALL arrays will be given the property, and its value, as default.
- When constructing a method, ALL arrays will have this method available.
- Note : Array.prototype does not refer to a single array, but to the Array() object itself.
- Note : Prototype is a global object constructor which is available for all JavaScript objects.

Array are just special object, u can add key / value to them

```javascript
const arr = ['a', 'b', 'c'];
arr.test = 'bad';

for (let i in arr) {
  console.log(arr[i]);
}

// a
// b
// c
// bad
```

### Array doc

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

## Object = {}

> The JS Object is used to store key:value pairs

### Object doc

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

## Mutable / Immutable types

| Mutable   | Immutable |
|:---------:|:---------:|
| Objects   | Numbers   |
| Array     | String    |
| Functions | Null      |
| Classes   | Undefined |
| Maps      | Boolean   |
| Sets      |           |

```javascript
// Mutable example

const car1 = {
  color: 'red',
  tyres: 4
}
const car2 = car1;
// car2 => { color: 'red', tyres: 4 }

car1.color = 'blue';
car2.doors = 3;
// car1 => { color: 'blue', tyres: 4, doors: 3 }
// car2 => { color: 'blue', tyres: 4, doors: 3 }
// car1 === car2 => true
```

Objects are never copied. They are passed around by reference.

```javascript
// Immutable example

let aString = 'string a';
const bString = aString;
// bString => "string a"

aString = 'string a bis';
// aString => 'string a bis'
// bString => 'string a'
// aString === bString => false
```

When you modify a string, a whole new string is created, and the name of
the variable assigned to its memory reference. There’s no way of changing
the internal state of an immutable type, so the variable simply gets
reassigned to a new reference. Same goes for numbers.

By modifying string or number in a function, it will only persist within
the function scope. The initial values do not get altered.

This will not be the case for arrays and objects.
This is because they are mutable. Their variables are by reference, they
are changed globally.

```javascript
// Create immutable object

let obj4 = { name: 'James' }
const obj5 = obj4;

Object.freeze(obj4);
// obj4 => { name: 'James' }
// obj5 => { name: 'James' }

obj4.name = 'Daniels';
// obj4 => { name: 'James' }
// obj5 => { name: 'James' }
```

## Loops

### forEach()

- iterates only over Arrays / Maps / Sets
- Can easily log the key and value
- Skip empty / undefined element
- Can't use async / await

```javascript
const arr = [1,2,3,4];

arr.forEach((element, index) => {
    console.log(element, index);
});

// 1 0
// 2 1
// 3 2
// 4 3
```

### for (.. of ..)

- Iterate over the values in an iterable
- Array / Map / Set / String / TypedArray
- Doesn't skip empty / undefined array elements
- Can use async / await

```javascript
let names = ['John', 'Bob', 'Marie'];

for (let name of names) {
    console.log(name);
}

// John
// Bob
// Marie

for (let [i, n] of names.entries()) {
  console.log(i, n);
}

// 0 John
// 1 Bob
// 2 Marie

-------------

let obj = {a: '1', b: '2', c: '3'};

for (let o in obj) {
  console.log(o, obj[o]);
}

// a 1
// b 2
// c 3
```

### for (.. in ..)

- Iterates over the properties (keys) of an Objet or an Array
- Skip empty / undefined array elements

**Note** : for...in should not be used to iterate over an Array.
It's generally a bad pratice unless you want to iterate over non-numeric keys and inherited keys.

```javascript
const arr = ['a', 'b', 'c'];
arr.test = 'bad';

// Prints "a, b, c, bad"
for (let i in arr) {
  console.log(arr[i]);
}

// Prints "a, b, c"
for (let el of arr) {
  console.log(el);
}
```

  for...in actually iterates through the enumerable properties of an object/array. That means the properties that exist in the array, so the x that goes in object[x] or array[x]. For arrays, that’s the index. For objects, they’re the keys (not the values).

```javascript
let oldCar = {
  make: 'Toyota',
  model: 'Tercel',
  year: '1996'
};

for (let key in oldCar) {
  console.log(`${key} --> ${oldCar[key]}`);
}

// make --> Toyota
// model --> Tercel

-----------

let str = 'Turn the page';

for (let index in str) {
  console.log(`Index of ${str[index]}: ${index}`);
}

// Index of T: 0
// Index of u: 1

----------

let arr = [
  'Mike',
  'Steven'
];

for (var i in arr) {
  console.log(i, arr[i]);
}

// 0 Mike
// 1 Steven

```

### To summarize

**Arrays** : use for...of if you don’t care about index value. I like to use forEach for all my iterations though — no refactoring needed if I ever decide I do need the index value.

**Objects** : use for...of if you don’t care about key value; Object.keys() if you do (and use obj[key] to get the value in the for...of).

**Everything** : use lodash if it is a possibility. There’s a reason it’s the most downloaded and depended-on library on NPM.
