function checkIfNumber(item1) {
    if (typeof item1 !== 'number') {
        throw new Error(`${item1} is not a number`);
    }
}

function add(...items) {
    let sum = 0
    try {
        for (let i = 0; i < items.length; i++) {
            checkIfNumber(items[i])
            sum+=items[i]
        }
        
        return sum
    } catch (err) {
        return err
    }
}

function substract(num1,num2) {
    try {
        checkIfNumber(num1)
        checkIfNumber(num2)
        return num1 - num2
    } catch (err) {
        console.log(err)
    }
}

function multiply(num1, num2) {
    try {
        checkIfNumber(num1)
        checkIfNumber(num2)
        return num1 * num2
    } catch (err) {
        console.log(err)
    }
}

function divide(num1, num2) {
    try {
        checkIfNumber(num1)
        checkIfNumber(num2)
        return num1 / num2
    } catch (err) {
        console.log(err)
    }
}

function calculator(num1,num2,fun) {
    return fun(num1,num2)
}
function calculatorExt(num1,num2,...fun) {
    const result = []
    for (let i = 0; i < fun.length; i++) {
        result.push(fun[i](num1,num2))
    }
    return result
}

console.log(calculatorExt(10,5,multiply,add,divide))





