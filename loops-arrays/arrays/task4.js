// 1. Find the first element greater than ```6``` in 
// an array of integers and return it

const arr = [2, 1, 3, 4, 6, 0, 0, 5, 7, 8, 10];

let result = arr.find(function(item,index,array){
    return item > 6
})

console.log(result)