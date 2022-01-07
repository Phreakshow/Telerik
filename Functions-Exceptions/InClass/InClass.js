// 1

const sayHelloTo = (name) => console.log(`Hello ${name}!`);

const forEach = (names, fn) => {
    for (const name of names) {
        fn(name)
    };
};

const printResult = (items) => items.map((item) => console.log(item))

// forEach(['Pesho','Gosho','Ivan'],sayHelloTo);


// 2
const checkFn = (item) => item > 10 ;

const filter = (numbers,fn) => {
    const result = []
    for (const number of numbers) {
        if (fn(number)) {
            result.push(number)
        }
    }
    return result
}

// console.log(filter([1,20,3,4],checkFn))

// 3

const modifyFn = (num) => num + 10;
const filterMap = (numbers,fn) => numbers.map((n) => fn(n));

// console.log(filterMap([1,2,3,4],modifyFn))

// 4

const arr = [1, 2, 3]
printResult(filter(filterMap(arr,modifyFn),checkFn))


