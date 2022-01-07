let input = ['8','7','3','2','3','5','2','2','4']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets())
let max = 1
let current = 1
let arr =[]

for (let i = 0; i < n; i++) {
    arr.push(Number(gets()))    
}
for (let i = 1; i < arr.length; i++) {
    if (arr[i-1]<arr[i]) {
        current++
    } else {
        current = 1 
    }

    if (current>max) {
        max = current
    }
    
}

print(max)
