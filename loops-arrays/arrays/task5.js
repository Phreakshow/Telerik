// 1. Remove duplicates from an array of integers

const arr = [2, 1, 3, 4, 6, 0, 0, 5, 7, 8, 10];

let uniq = arr.reduce(function(a,b){
    if (a.indexOf(b) < 0) {
        a.push(b)
    }
    return a
},[])

console.log(uniq)

