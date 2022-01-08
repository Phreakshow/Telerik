let input = ['6 7 3','0 0','2 2','-2 2','3 -1']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


const [N, M, J] = gets().split(' ').map(x => Number(x))

// const matrix = Array.from({length: N})

// num = 1

// for (let i = 0; i < matrix.length; i++) {
//     matrix[i] = []
//     for (let j = 0; j < M; j++) {
//         matrix[i][j] = num
//         num++
//     }
// }

let [R,C] = gets().split(' ').map(x => Number(x))
const positions =[]
positions.push(`R${R}C${C}`)
const sequence = []
// for (let i = 0; i < J; i++) {
//     sequence.push(gets().split(' ').map(x => Number(x)))
// }

let [jumps,sum,i,moreSeq] = [0,(R*M)+ C+1,0,true]
while (true) {
    if (moreSeq) {
        sequence.push(gets().split(' ').map(x => Number(x)))
        R+=sequence[i][0]
        C+=sequence[i][1]
        jumps++
        if (positions.indexOf(`R${R}C${C}`) > -1) {
            print(`caught ${jumps}`)
            break;
        }
        positions.push(`R${R}C${C}`)
    } else {
        R+=sequence[i][0]
        C+=sequence[i][1]
        jumps++
    }
    
    i++
    if (i===J) {
        i =0
        moreSeq = false
    }
    

    if (R<0 || R>= N || C<0 || C>=M) {
        print(`escaped ${sum}`)
        break;
    }
    sum+= (R*M)+ C+1
    // sum+=matrix[R][C]
    

}


// console.table(matrix)