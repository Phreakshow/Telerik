let input = ['3']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


const n = Number(gets());
const matrix = Array.from({length: n})

let num = 1

for (let row = 0; row < matrix.length; row++) {
    matrix[row] = Array.from({length: n})
}

let stRow = 0; stCol = 0; row =0; col = 0; endRow = n-1; endCol = n-1;
let move = "+"

for (let i = 0; i < n**2; i++) {
    
    matrix[row][col] = num
    num++
    
    switch (move) {
        case '+':
            if (col === endCol) {
                move = '++'
                stRow++
                row = stRow
            } else {
                col++
            }
            break;
        case '++':
            if (row === endRow) {
                move = '-'
                endCol--
                col = endCol
            } else {
                row++
            }

            break;
        case '-':
            if (col === stCol) {
                move = '--'
                endRow--
                row = endRow
            } else {
                col--
            }
    
             break;
        case '--':
            if (row === stRow) {
                move = '+'
                stCol++
                col = stCol
            } else {
                row--
            }
        
            break;
    }
    
}

for (const row of matrix) {
    print(row.join(' '))
}

