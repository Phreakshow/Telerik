const arr = [2, 1, 3, 4, 6, 0, 0, 5, 7, 8, 10];

// Use **for loop**
// - Use **while loop**
// - Use **for-in loop**
// - Use **for-of loop**

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }
// let i = 0;
// while (i<arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// for (let key in arr) {
//     console.log(arr[key])
// }

for (const val of arr) {
    console.log(val)
}