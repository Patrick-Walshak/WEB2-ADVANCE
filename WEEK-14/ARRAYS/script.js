// hoisting
// type converstion
// what is the use of the treepl,e operator
//distruction it allow u to unpack values from array
//A promise is an object that reapresent the eventual completion or failure  of and asynchronous operation



// ==========================================================================================================================================================


// splice() is used to:

// remove items
// add items
// replace items

// inside an array.

let fruits = ["apple", "banana", "orange", "mango"];

fruits.splice(1, 2);
console.log(fruits)
fruits.splice(1,0, "grabe")
console.log(fruits);

// reverse() changes the order of items backwards.

let numbers = [1, 2, 3, 4];

numbers.reverse();

console.log(numbers);

// shift() removes the FIRST item from an array.

let fruit = ["apple", "banana", "orange"];

fruit.shift();

console.log(fruit);

// unshift() adds item(s) to the BEGINNING of an array.

let fruitss = ["banana", "orange"];

fruitss.unshift("apple");

console.log(fruitss);


