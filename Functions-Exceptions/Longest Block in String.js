let input = ['a']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const inp = gets().split('')

let max = 1;
let maxChar =inp[0];
let targetChar = inp[0];
let currentCount = 1;

for (let i = 1; i < inp.length; i++) {
    let currentChar = inp[i]
    if (currentChar === targetChar) {
        currentCount++
    } else {
        targetChar = currentChar
        currentCount = 1
    }

    if (currentCount>max) {
        max = currentCount
        maxChar = currentChar
    }
}

print(maxChar.repeat(max))