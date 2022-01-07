
// 1 Try to sort the array const arr = [10, 1, 2, 0, 5, 3, 9, 4, 6, 8, 7].

// const arr = [10, 1, 2, 0, 5, 3, 9, 4, 6, 8, 7]

// arr.sort((a, b) => a - b)

// console.log(arr)
// #############################################################################
// 2 Given the array const people = ['Ivan', 'Maria', 'Stoyan', 'Petar', 'Iva'];

// Sort each item and then sort the elements in the array
// Use the native sort() function of the array in JavaScript.
// 'Ivan' sorted is 'Ianv' (Why? Look here)

// const people = ['Ivan', 'Maria', 'Stoyan', 'Petar', 'Iva']

// people.sort()

// for (let i = 0; i < people.length; i++) {
//     let tempArr = Array.from(people[i])
//     tempArr.sort()
//     people[i] = tempArr.join('')
// }



// console.log(people)

// #############################################################################


// 3 Fill the matrix
// Write a program that fills and prints a matrix of size (n, n) as shown below.


const n = 4
const matrix = Array.from({length: n})

let num = 1

for (let row = 0; row < matrix.length; row++) {
    matrix[row] = Array.from({length: n})
}
// 4a
// for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < matrix[row].length; col++) {
//         matrix[col][row] = num
//         num++
//     }
// }
// #############################################################################
// 4b
// 1	8	9	16
// 2	7	10	15
// 3	6	11	14
// 4	5	12	13
// for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < matrix.length; col++) {
//         if (row % 2 == 0) {
//             matrix[col][row] = num
//             num++
//         } else {
//             matrix[matrix.length - col - 1][row] = num
//             num++
//         }
//     }
// }

// #############################################################################
// 4c
// 7	11	14	16
// 4	8	12	15
// 2	5	9	13
// 1	3	6	10

// for (let row = 0; row < matrix.length; row++) {
//     let newRow = 0
//     for (let col = matrix.length - row -1; col < matrix.length; col++) {
//         matrix[col][newRow] = num
//         num++
//         newRow++
//     }
// }

// for (let row = 1; row < matrix.length; row++) {
//     for (let col = 0; col < matrix.length - row; col++) {
//         matrix[col][row+col] = num
//         num++
//     }
    
// }
// #############################################################################
// 4d
// 1	12	11	10
// 2	13	16	9
// 3	14	15	8
// 4	5	6	7
let stRow = 0; stCol = 0; row =0; col = 0; endRow = n-1; endCol = n-1;
let move = "+"

for (let i = 0; i < n**2; i++) {
    
    matrix[row][col] = num
    num++
    
    switch (move) {
        case '+':
            if (row === endRow) {
                move = '++'
                stCol++
                col = stCol
            } else {
                row++
            }
            break;
        case '++':
            if (col === endCol) {
                move = '-'
                endRow--
                row = endRow
            } else {
                col++
            }

            break;
        case '-':
            if (row === stRow) {
                move = '--'
                endCol--
                col = endCol
            } else {
                row--
            }
    
             break;
        case '--':
            if (col === stCol) {
                move = '+'
                stRow++
                row = stRow
            } else {
                col--
            }
        
            break;
    }
    
    
}
// #############################################################################



console.table(matrix)


