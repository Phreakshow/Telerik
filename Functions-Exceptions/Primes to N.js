let input = ['24']

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

print(result.join(' '))
