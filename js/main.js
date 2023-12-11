//let b= 123
//console.log("gghh")
//console.log (typeof b)
//let arr = [1,29,348,['warm', 'hop', 'gg']];
//console.log(arr[0])
//arr[0] = 92
//console.log(arr)
//console.log(arr[3][2])
//const abc = 111
//b = 321
//console.log(b)
//console.log(abc)
//    let user1 = {
//    age: 20,
//        name: 'igor',
//        status: true,
//    }
//console.log(user1, arr)
//user1.wife = {
//    name: 'masha',
//    age: 19,
//    status: true,
//}
//console.log(user1)
//arr.push(838)
//console.log(arr)
//let color = 'green'
//let road = 'yes'
//if (color === 'green' || road === 'yes') {
//    console.log('GOOD');
//}else if (color === 'red'){
//    console.log('stop')
//}
//let colorr = prompt ('какой цвет ты видешь ?')
//switch (colorr){
//    case 'green':
//        console.log('go')
//        break
//    case 'yellow':
//        console.log('wait')
//        break
//    case 'red':
//        console.log('stop')
//        break
//    default:
//        console.log('call me')
//}
//let users = [
//    {name: 'vasya', age: 31, status: false},
//    {name: 'petya', age: 30, status: true},
//    {name: 'kolya', age: 29, status: true},
//    {name: 'olya', age: 28, status: false},
//    {name: 'max', age: 30, status: true},
//    {name: 'anya', age: 31, status: false},
//    {name: 'oleg', age: 28, status: false},
//    {name: 'andrey', age: 29, status: true},
//    {name: 'masha', age: 30, status: true},
//    {name: 'olya', age: 31, status: false},
//    {name: 'max', age: 31, status: true}
//    ]
///for (let i = 0; i < users.length; i++) {
///    const user = users[i];
///    if (!user.status)
///        console.log(user)
///}
//or (const w of users){
//   console.log(w)
//

let users = [
    {skills: ['html', 'js', 'java'], name: 'vasya', age: 31, status: false},
    {skills: ['html', 'js', 'C#'], name: 'petya', age: 30, status: true},
    {skills: ['html', 'js'], name: 'kolya', age: 29, status: true},
    {skills: ['html', 'js', 'node'], name: 'olya', age: 28, status: false},
    {skills: ['html', 'js'], name: 'max', age: 30, status: true},
    {skills: ['html', 'js', 'react'], name: 'anya', age: 31, status: false},
    {skills: ['html', 'js', 'react', 'node'], name: 'oleg', age: 28, status: false},
    {skills: ['html', 'js', 'react', 'node'], name: 'andrey', age: 29, status: true},
    {skills: ['html', 'js', 'react', 'node'], name: 'masha', age: 30, status: true},
    {skills: ['html', 'js', 'react', 'node'], name: 'olya', age: 31, status: false},
    {skills: ['html', 'js', 'react', 'node'], name: 'max', age: 31, status: true}
];
//for (let i = 0; i < users.length; i++) {
//    const user = users[i];
//    console.log(user.skills)
//}
//
//for(minets = 0; minets < 60; minets++){
//        for(seconds = 0; seconds<60; seconds++) {
//            console.log(seconds, minets, )
//        }
//    }
// let car = {
//     id: 1,
//     model: 'subaru',
//     power: 234,
//     status: true,
//     parts: [111, 222, 333]
    // };
//for (const carKey in car) {
//
//    console.log(carKey,car[carKey])
        //}
//function creatLi (){
//    document.write('<ul>');
//    document.write('<li>items</li>');
//    document.write('<li>items</li>');
//    document.write('<li>items</li>');
//    document.write('<li>items</li>');
//    document.write('</ul>');
//}
//function arr(array){
//    for (const argument of users) {
//        document.write(argument)
//    }
//}
//arr()
function random(radius){
    let res = radius * radius * Math.PI;
    console.log(res)
    return res
}
let x = random(20)
console.log(x)
function qwerty (){
    console.log(arguments)
}
qwerty('gg',[221,121,124],311)
qwerty('df','rrrw')
function poipoi (...item){
    console.log(item)
}
poipoi(12,34,56,78)