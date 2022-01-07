let input = ['10','2','3','-6','-1','2','-1','6','4','-8','8']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = Number(gets())
arr = []


for (let i = 0; i < N; i++) {
    arr.push(Number(gets()))
}

let max = arr[0]

for (let i = 0; i < N; i++) {
    let sum = 0
    for (let j = i; j < N; j++) {
        sum+=arr[j]
        if (sum>max) {
            max = sum
        }
    }
}

print(max)
