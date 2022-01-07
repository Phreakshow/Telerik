// 1. Find if the number 
// ```10``` is in the array in an array of integers 
// and return ```true``` or ```false```

const arr = [2, 1, 3, 4, 6, 0, 0, 5, 7, 8, 10];

let bool = Boolean(arr.find(function(item,index,array) {
    return item == 10
}))

console.log(bool)