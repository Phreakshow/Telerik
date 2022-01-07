let input = ['2,1,0,2']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets().split(',')

numbers = numbers.map((n) => {
    const result = []
    while (+n !== 0) {
        result.unshift(+n%2)
        n = Math.trunc(n/2)
    }
    while (result.length !== 8) {
        result.unshift(0)
    }
    return result
});

const result = []
for (let i = 0; i < numbers.length; i++) {
    result[i] = ''
    if (i%2===0) {
        for (let j = 1; j < numbers[i].length; j+=2) {
            result[i]+=numbers[i][j].toString()
            
        }
    } else {
        for (let j = 0; j < numbers[i].length; j+=2) {
            result[i]+=numbers[i][j].toString()
        }
    }
    
}


print(result.join(''))