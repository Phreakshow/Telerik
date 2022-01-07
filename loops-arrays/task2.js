let input = ['5','3 1 5 2 6','6','4 1 7 9 2 4']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = Number(gets())
let arr1 = gets().split(' ')
let m = Number(gets())
let arr2 = gets().split(' ')

let num = 0
let uniq = []

arr1 = arr1.reduce(function(a,b){
    if (a.indexOf(b) < 0) {
        a.push(b)
    }
    return a
},[])

for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) > -1 ) {
        num++
    } else {
        uniq.push(arr1[i])
    }
    
}

if (uniq.length > 0) {
    uniq.sort((a, b) => a - b)
    print(uniq.join(' '))
} else {
    print(num)
}



