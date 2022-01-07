let input = ['3 3','10 10 10','10 0 10','10 10 10']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let inp = gets().split(' ')

const N = inp[0];
const M = inp[1];

const matrix = []
let position = {'row': null, 'col': null, 'moreCoins':true}
let coins = 0
for (let i = 0; i < N; i++) {
    matrix.push(gets().split(' ').map((n) => +n))
    for (let j = 0; j < matrix[i].length; j++) {
        if (+matrix[i][j] === 0) {
            position.row = i
            position.col = j
        }
        
    }
}

// left, right, up, down
const findNextPos = (pos, mat) => {
    let check = []
    if (pos.col -1 < 0) {
        check[0] = 0
    } else {
        check[0] = mat[pos.row][pos.col -1]
    }
    if (pos.col+1 >= matrix[0].length) {
        check[1] = 0
    } else {
        check[1] = mat[pos.row][pos.col+1]
    }
    if (pos.row-1 < 0) {
        check[2] = 0
    } else {
        check[2] = mat[pos.row-1][pos.col]
    }
    if (pos.row +1>= matrix.length) {
        check[3] = 0
    } else {
        check[3] = mat[pos.row+1][pos.col]
    }

    
    if (check.every(e => e<=0)) {
        return pos.moreCoins = false
    }
    switch (check.indexOf(Math.max(...check))) {
        // left
        case 0:
            pos.col--
            break;
        
        //right    
        case 1:
            pos.col++
            break;
        // up
        case 2:
            pos.row--
            break;
        // down
        case 3:
            pos.row++
            break;
    }
    return pos
}


position = findNextPos(position,matrix)
while (position.moreCoins) {
    matrix[position.row][position.col]--
    coins++
    position = findNextPos(position,matrix)
}


print(coins)

