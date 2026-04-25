// Trying to to build a small fruit store where user and store  fruit in
//  and array, search for a fruit using(.find-method), check is fruit exist 
// in the array check if the fruit is ijn stock and also allow a user to buy a quantity of fruit 


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
  return fruits.find(fruit => fruit.name == name)
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

