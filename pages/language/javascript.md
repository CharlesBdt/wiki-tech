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

- forEach()
  - iterate only over arrays / maps / sets

```javascript
const arr = [1,2,3,4];

arr.forEach((element) => {
    console.log(element);
});
```

- for (.. of ..)
  - iterate over the values in an iterable
  - Array / Map / Set / String / TypedArray

```javascript
let names = ['John', 'Bob', 'Marie'];

for (let name of names) {
    console.log(name);
}

// John
// Bob
// Marie
```

- for (.. in ..)
  - iterate over the property of an objet or an array

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
```
