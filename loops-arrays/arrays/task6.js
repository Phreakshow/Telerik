// Flat an array of integers

let arr = [1, 2, [3, 4, [5, 6]]];

let check = true

while (check) {
    arr = arr.flat()
    check = Boolean(arr.find(function(item,index,array){
       return Array.isArray(item)
    }))    
}

console.log(arr)