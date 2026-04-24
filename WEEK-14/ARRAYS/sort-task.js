// giving and array sort it in both addcending and decending orther and for both string and numbers  using only any of this foreach, map, and filter but done use sort 

// let numbers = [5, 2, 8, 1];

// numbers.forEach((item, i) => {

//   numbers.forEach((compare, j) => {

//     if(numbers[i] < numbers[j]){

//       let temp = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = temp;

//     }

//   });

// });

// console.log(number);


// let number = [8, 5, 3, 6];
//   for (let num = 0; num < number.length; num++){
//     let nextNum = number[num + 1]
//     number[num + 1] = number[num]
//     number[num] = nextNum

//     num = 0;
//   }

//   console.log(number)

// FIND

let fruits = [
  {
    name:"Mango",
    price:200,
    stock:20
  },
    {
    name:"Orange",
    price:100,
    stock:10
  },
    {
    name:"Apple",
    price:300,
    stock:23
  },
    {
    name:"Grape",
    price:400,
    stock:30
  },
]

let mango = fruits.find((fruit, index) =>{
  return fruit.name == "Grape" && fruit.stock > 0;

})

function checkFruit(name){
  return fruits.find(fruit => fruit.name)
}

function buyfruit(name, qty){
  let fruit = checkFruit(name);

  if(fruit == undefined || typeof(fruit) != "object"){
    console.log(`The fruit ${name} is not available`)
    return
  }

  if (fruit.stock < gty){
    console.log(`Qauntity required fro ${name} is not available`)
    return
  }
}
console.log("Mango", 10)

console.log(4**2**2)


// let fruits = [["mango", "Guava"], ["Pear", "Pinapple"], "Mango", "Orange"]

// let mango = fruits.find((fruit, index) =>{
//   console.log(fruit, index)
//   return fruit == "mango"
// })

// console.log(mango)