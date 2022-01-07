let input = ['@@@xx@*','1 -1 -1 4']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let place = gets().split('')
let moves = gets().split(' ')
moves.unshift(0)


let souls = 0
let food = 0
let dead = 0
let position = 0
let totalMoves = -1
let end = false


for (let i = 0; i < moves.length; i++) {
    totalMoves++
    switch (place[position]) {
        case '@':
            souls++
            place[position] = ''
            break;
        case '*':
            food++
            place[position] = ''
            break;
        case 'x':
            dead++
            if (position % 2 === 0) {
                souls--
                place[position] = '@'
            } else {
                food--
                place[position] = '*'
            }
            break;
        default:
            break;
    }

    if (souls < 0 || food < 0) {
        end = true
        break;
    }
    position+=Number(moves[i+1]) 
    

   
    while (position<0) {
        position = place.length - Math.abs(position)
    }
    
    
    while (position>=place.length) {
        position = position - place.length
    }
    
}


if (end) {
    print('You are deadlocked, you greedy kitty!')
    print(`Jumps before deadlock: ${totalMoves}`)
} else {
    print(`Coder souls collected: ${souls}`)
    print(`Food collected: ${food}`)
    print(`Deadlocks: ${dead}`)
}
