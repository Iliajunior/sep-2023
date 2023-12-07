let b= 123
console.log("gghh")
console.log (typeof b)
let arr = [1,29,348,['warm', 'hop', 'gg']];
console.log(arr[0])
arr[0] = 92
console.log(arr)
console.log(arr[3][2])
const abc = 111
b = 321
console.log(b)
console.log(abc)
    let user1 = {
    age: 20,
        name: 'igor',
        status: true,
    }
console.log(user1, arr)
user1.wife = {
    name: 'masha',
    age: 19,
    status: true,
}
console.log(user1)
arr.push(838)
console.log(arr)
let color = 'green'
let road = 'yes'
if (color === 'green' || road === 'yes') {
    console.log('GOOD');
}else if (color === 'red'){
    console.log('stop')
}
let colorr = prompt ('какой цвет ты видешь ?')
switch (colorr){
    case 'green':
        console.log('go')
        break
    case 'yellow':
        console.log('wait')
        break
    case 'red':
        console.log('stop')
        break
    default:
        console.log('call me')
}