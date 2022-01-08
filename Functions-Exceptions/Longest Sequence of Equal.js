let input = ['10','2','1','1','2','3','2','2','3','2','1']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const N = Number(gets());

let targetChar =gets();
let max = 1;
let currentChar = '';
let currentCount = 1;


for (let i = 0; i < N-1; i++) {
    currentChar = gets()
    if (currentChar === targetChar) {
        currentCount++
    } else {
        targetChar = currentChar
        currentCount = 1
    }

    if (currentCount>max) {
        max = currentCount
    }
    
}

print(max)
