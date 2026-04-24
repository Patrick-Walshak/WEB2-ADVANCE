// // Array

// // const fruit =['apple', 'mago', 'orange']
// // fruit[2] = 'grabe'
// // fruit.unshift ('berries')
// // fruit.pop()
// // console.log(Array.isArray)
// // console.log(fruit)

// // Object literal

// // const person = {
// //     firstname:'Johne',
// //     lastname:'marry',
// //     age:'21',
// //     hoobies:['basketball', 'football'],
// //     adderess:{
// //         street:'john street',
// //         city:'jos',
// //         state:'plateau'
// //     }
// // }

// // console.log(person.firstname, person.lastname)

// // for loops
// // for (let i = 0; i<= 10; i++){
// //     console.log(`for loop number: ${i}`)
// // }

// // for each, while, Map
// // conditional 
// // const x = 11
// // if (x == 10){
// //     console.log('x is 10');
// // }else {
// //     console.log("x is not 10")
// // }

// // tenary
// // funtions

// // Function + Prototype
// function addNums(num1, num2){
//     console.log(num1 + num2)
// }
//     addNums(5,5)


// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Student.prototype.greet = function () {
//   console.log("Hello, my name is " + this.name);
// };

// const student1 = new Student("Wallex", 20);
// student1.greet();

// // Event
// button.addEventListener("click", function() {
//   console.log("Button clicked!");
// });


// for (let i = 1; i<= 100; i++){
//     console.log(`number: ${i}`)
// }


// let i = 0;

// while (i <= 100) {
//   console.log(i);
//   i++
// }



// do {
//   console.log(days);
// //   i++;
// } while (i < 7);{
    
// }




// for(let day = 0; day <= 7; day++){
//     let day =7;

//     switch (day){
//         case 1 :
//             console.log("sunday");
//             break

//         case 2:
//             console.log("monday");
//             break

//         case 3:
//             console.log("tueday");
//             break

//         case 4:
//             console.log("wedessday");
//             break
//         case 5:
//             console.log("thurday");
//             break

//         case 6:
//             console.log("friday");
//             break

//         case 7:
//             console.log("saturday")
//             break
//     }
// }

// sayHello()

// let say = 0;

// while(sayHello < 7){
//   if (sayHello >= 1 && sayHello <= 5){
//     console.log(2)
//     sayHello++
//   }
// }

// for (let sayHello = 1; sayHello <= 6; sayHello++) {
//   // console.log();
// }



// let hello = greet()

// go and learn callback function using the h

class Account {
  constructor(firstname, lastname, balance){
    this.firstname = firstname
    this.lastname = lastname 
    this.balance = balance
  }
  withdraw(amount){
    if (amount > this.balance)
    return(`Insufficiant amount balance: ${this.balance}`)

    if (amount < 0){
      return(`Invalid amount: ${amount}`)
    }

    this.balance -= amount
    return(`Withdraw successfull: ${amount} remaining balance is: ${this.balance}`)
  }

  deposit(amount){
    if (amount <= 0){
    return(`Invalid amount deposit: ${amount}`)
    }

    this.balance += amount
    return(`Deposit successful: ${amount} new balance is: ${this.balance}`)
    
  }

  transfer(receiver, amount){
  if(amount <= 0){
    return(`Invalid amount entry: ${amount}`)
  }

  if(amount > this.balance){
    return(`Insufficient balance`)
  }

  this.balance -= amount
  receiver.balance += amount

  return(`Transfer successful: ${amount} Sender balance: ${this.balance} Receiver balance: ${receiver.balance}`)
}

}

const account1 = new Account("alice", "Sam", 5000)
const account2 = new Account("Bob", "Andrew,", 3000)

console.log(account1.withdraw(1000));
console.log(account2.deposit(100))
// account2.transfer(account3, 1000)
console.log(account1.transfer(account2, 500))



