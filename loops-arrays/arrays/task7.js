// 1. Write a program to find the **most occurring element** in 
// an array of integers

//       ```js
//       const arr = [1, 2, 1, 4, 2, 4, 2, 3, 3, 5, 6, 7, 3, 2];
//       ```

const arr = [1, 2, 1, 4, 2, 4, 2, 3, 3, 5, 6, 7, 3, 2];

let max = 0;
let num
let res = {}

for (let i = 0; i < arr.length; i++) {
    if (res[arr[i]]) {
        res[arr[i]]++
    } else {
        res[arr[i]] = 1
    }
    if (res[arr[i]] > max) {
        max = res[arr[i]]
        num = arr[i]
    }
}

console.log('Element: ' + num)
console.log('Number occurrence: ' + max)
