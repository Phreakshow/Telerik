let input = ['5',
    '1 22 3 41 5 2',
    '2 13 4 -5 6 5',
    '-6 5 9 31 2 8',
    '3 14 5 -6 7 4',
    '4 -5 6 -7 8 7',
    '-3 -3 3 3 4 -3 -4 3']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const N = Number(gets())

const matrix = Array.from({length: N})

const matrixSum = (R,C,mat) => {
    let sum = 0
    

    if (R>-1) {
        for (let i = 0; i < Math.abs(C); i++) {
            sum+= mat[Math.abs(R)-1][i]
        }
    } else {
        for (let i = Math.abs(C)-1; i < mat[Math.abs(R)-1].length; i++){
            sum+= mat[Math.abs(R)-1][i]
        }
    }

    if (C>-1) {
        for (let i = 0; i < Math.abs(R)-1; i++) {
            sum+=mat[i][Math.abs(C)-1]
        }
    } else {
        for (let i = Math.abs(R); i < mat.length; i++){
            sum+= mat[i][Math.abs(C)-1] 
        }
    }

    return sum
}


for (let i = 0; i < N; i++) {
    matrix[i] = gets().split(' ').map(x => Number(x))
}

const coord = gets().split(' ').map(x => Number(x))

let sum = matrixSum(coord[0],coord[1],matrix)

for (let i = 2; i < coord.length; i+=2) {
    let curSum = matrixSum(coord[i],coord[i+1],matrix)
    if (curSum>sum) {
        sum = curSum
    }
}

print(sum)

// console.table(matrix)