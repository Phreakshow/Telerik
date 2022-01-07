let input = ['27']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const N = Number(gets())

const result = []

const isPrime = num => {
    for(let i = 2; i <= Math.sqrt(num); i++)
        if(num % i === 0) return false; 
    return num > 0;
}

for (let i = 1; i <= N; i++) {
    if (isPrime(i)) {
        result.push(i)
    }
}

for (let i = 0; i < result.length; i++) {
    let output =''
    for (let j = 1; j <= result[i]; j++) {
        if (isPrime(j)) {
            output+='1'
        } else {
            output+='0'
        }
    }
    print(output)
}
