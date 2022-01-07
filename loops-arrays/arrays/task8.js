//  Create a **4x4 multidimensional array** and fill it with the letters 
// from ```a``` to  ```p```


let matrix = []
let n = 0

for (let i = 0; i < 4; i++) {
    matrix[i] = []
    for (let j = 0; j < 4; j++) {
        matrix[i][j] = String.fromCharCode(97 + n)
        n++
    }
    
}

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(','))
}

//  Get the **main** diagonal 

for (let i = 0; i < 4; i++) {
    console.log(matrix[i][i])
}

//  Get the **secondary** diagonal

for (let i = 3; i >= 0; i--) {
    console.log(matrix[i][i])
}