let input = [
    'Telerik, Java, CSS, JavaScript, PHP, HTML, CSS, Spring, Angular',
    '2',
    'CSS'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let words = gets().split(', ')
const N = +gets()
const keyWord = gets()

const matrix = []

let n = 0
for (let i = 0; i < words.length/N; i++) {
    matrix.push([])
    for (let j = 0; j < N; j++) {
        matrix[i][j] = words[n]
        n++
    }
}

let number = -1

for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].indexOf(keyWord) > -1) {
        number = i+1
    } 
}

print(number)