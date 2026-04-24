// 1. Given a set of numbers in an array, sum all the numbers in an array and return the total.
// NOTE: If an element is not a number, do not sum it

function sumArray(array){
    let total = 0;
    array.forEach(element => {
        if(typeof element === "number" && !isNaN(element) ){
            total += element
        }
    });
    return total
}

const result = sumArray([5, null, 5, 4, "1"]);

console.log(result)




// 2. Create a simple shopping cart, add some items to cart and also remove some items, then print all items in the cart. 

let shoppingCart = ["Shoe", "Bag", "Belt", "Phone", "Cap"]

console.log(shoppingCart)

console.log("")
shoppingCart.push("Blinks", "Headphone")
console.log(shoppingCart)
console.log("")
shoppingCart.splice(1, 2)
console.log(shoppingCart)



//  Given a list of names, you find the longest name in the arr


function longestName(arr){
    let longest = "";

    arr.forEach(name => {
        let strItem = typeof(name)
        let nostr = typeof("")

        if(nostr !== strItem){
            return
        }
        console.log(name.length)
        
        if(name.length > longest.length){
            longest = name
        }
    });

    return longest
}

const final = longestName(["Wallex", "Alexander", "Smiidiikesh", "Smiidiikesh", "Karise",{name:"john"}, [1,2,3,4,5,6,7,8,9,1,0,2,3,4,5]]);
console.log(`Then longest name in the array is: ${final}`)

// `The longest name in this array is ${longestName}`