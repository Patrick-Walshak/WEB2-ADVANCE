//FILTERT
let number = [1, 3, 4, 2, 5, 6]

let even = number.filter((number) =>{
    if (number % 2 == 0) {
        return number
    }
})

console.log(even)

//FOREACH
let fruits = ["Mango", "Guavs", "Pear", "Pineapple"]

let longest = "";

fruits.forEach((fruit) =>{
    if(longest && fruit.length < longest.length) {
        return;
    }
})

console.log(longest)

//JOIN
let users = ["Wallex", "Walkesh", "Smiidii"]

console.log(users.join(" "))

//REDUCE 

let numbers = [1, 2, 3, 4, 5, 6]
// let i = 0
let sum = numbers.reduce((a, v) => {
    // console.log(i++, a, v)
    return a+v
})
console.log(sum)

//SLICE

let numberss = [1, 3, 4, 2, 5, 6 ]

let newNum = numberss.slice(0,3)
console.log(newNum)

//SOME

let test = fruits.some((n) => n == "Pear")

console.log(test)

//SORT

number.sort((first, second) => second + first)
console.log(number)


//test use this method forEach, map ,filter only

// splice
// revers 
// shift 
// unrevers