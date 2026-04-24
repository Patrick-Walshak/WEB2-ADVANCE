// giving and array sort it in both addcending and decending orther and for both string and numbers  using only any of this foreach, map, and filter but done use sort 

let numbers = [5, 2, 8, 1];

numbers.forEach((item, i) => {

  numbers.forEach((compare, j) => {

    if(numbers[i] < numbers[j]){

      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;

    }

  });

});

console.log(number);
