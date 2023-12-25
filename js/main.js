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

//let users = [
//    {skills: ['html', 'js', 'java'], name: 'vasya', age: 31, status: false},
//    {skills: ['html', 'js', 'C#'], name: 'petya', age: 30, status: true},
//    {skills: ['html', 'js'], name: 'kolya', age: 29, status: true},
//    {skills: ['html', 'js', 'node'], name: 'olya', age: 28, status: false},
//    {skills: ['html', 'js'], name: 'max', age: 30, status: true},
//    {skills: ['html', 'js', 'react'], name: 'anya', age: 31, status: false},
//    {skills: ['html', 'js', 'react', 'node'], name: 'oleg', age: 28, status: false},
//    {skills: ['html', 'js', 'react', 'node'], name: 'andrey', age: 29, status: true},
//    {skills: ['html', 'js', 'react', 'node'], name: 'masha', age: 30, status: true},
//    {skills: ['html', 'js', 'react', 'node'], name: 'olya', age: 31, status: false},
//    {skills: ['html', 'js', 'react', 'node'], name: 'max', age: 31, status: true}
//];
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
//function random(radius){
//    let res = radius * radius * Math.PI;
//    console.log(res)
//    return res
//}
//let x = random(20)
//console.log(x)
//function qwerty (){
//    console.log(arguments)
//}
//qwerty('gg',[221,121,124],311)
//qwerty('df','rrrw')
//function poipoi (...item){
//    console.log(item)
//}
//poipoi(12,34,56,78)
////////////////
//let s = 'hello hasbent'
//console.log(s.toUpperCase())
//console.log(s.toLowerCase())
//console.log(s.startsWith('he'))
//console.log(s[4])
//console.log(s.endsWith('nt'))
//let split = s.split(' ')
//console.log(split)
//let b = []
//console.log(Array.isArray(b))
//let v = {}
//console.log(Array.isArray(v))
//let newUser = users.filter(value => value.age>30)
//console.log(newUser)
//users.forEach(value =>console.log(value))
//console.log(users === newUser)
//////////////////////////////////////////////////
/////////////////////////////////////////////////
//console.log('ROK')
//try {
//    console.log(kkk)
//}catch (e){
//    console.log('this Error man')
//}
//let map = users.map((users,index)=>{
//    let stringify=JSON.stringify(users)
//    let usersObj =JSON.parse(stringify)
//    usersObj.id =index+1
//    console.log(usersObj)
//    console.log(users === usersObj)
//    return usersObj
//
//})
//let clon = structuredClone(users)
//console.log(users === clon)
//console.log(clon)
/////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//function User(id,name,age,status,wifeName,wifeAgr){
//    this.id = id
//    this.name = name
//    this.age = age
//    this.status = status
//    this.wife = {wifeName, wifeAgr}
//}
//let userr = new User(23,'vova',25,true,'olia',24)
//let user2 = new User(83,'maks',33,true, 'irina',30)
//console.log(userr)
//console.log(user2)
//console.log(user===user2)
//console.log(typeof userr)
//let u1 = {
//    name: 'joni',
//     greeting(msg){
//        console.log(`${msg} my name is ${this.name}`)
//    }
//}
// u1.greeting('hello')
//let u2 = {name: 'tor'}
//u1.greeting.call(u2,'hello')
//let greetingCopi = u1.greeting.bind(u2)
//greetingCopi('hello','my name is')
//
//let user3 = {
//    name:  'kokos',
//    age:  22
//}
//let newUser = Object.create(user3)
//console.log(user3.name)
//console.log(user3.age)
//console.log(newUser.name)
//console.log(newUser.age)
//console.log(user3)
//console.log(newUser)
//console.log(user3 === newUser)




class User {

    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`hello my namre is ${this.name}`);
    };

    foobar() {
        return 'foobar';
    }

}

let user = new User(1, 'kokos', 13);
console.log(user);
user.greeting();
console.log(user.foobar());
//
console.log(user);



 class Client extends User {
     constructor(id, name, age, login, password) {
         super(id, name, age);
         this.login = login;
         this.password = password;
     }
 }

 let client = new Client(1, 'kokos', 123, 'logkokos', '1234');
 console.log(client)
 console.log(client.foobar())




let date = new Date();
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());
console.log(date.getMonth());

