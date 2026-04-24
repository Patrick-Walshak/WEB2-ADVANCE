// let email = 'walshak@gmail.com';

// let result = email.lastIndexOf('l')

// let result = email.slice(0,5)

// let result = email.replace('w', 'o')
// console.log(result)


// let score = '100';

// score = Number(score)

// let result = Boolean('');

// console.log(result, typeof result);                                                                             


// let text = "Hello World";

// let result = text.substring(0, 5);
// console.log(result);

// var human = {
//     firstname: "walshak",
//     lastname: "john",
//     age: 15,
//     isMaride: false
// }

// console.log(human)

// spered operator is use to pick ur operator and add it to ur existing value
var car = {
    name : "BMW M3",
    color: "black",
    year: 2000,
    owner: null,
    others: {
        IsRegister: true,
        mileage: "20km per hour"
    }
}

var car_1 = {...car, name:"toyota", color:"white"}

car.owner = {
    owner_name: "MP",
    adderess: "somewhere on earth"

}

// car.fuel = "petrol"
car = {...car, tenksize:"20l", ...car.owner, owner: {...car.owner, phone: "093639263"}}

console.log("Car",car)
console.log("Car 1", car_1)