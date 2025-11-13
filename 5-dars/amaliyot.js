//1-masala
// function showAge(age="1"){
//     return console.log(`Sizning yoshingiz: ${age}`)
// };
// const showAge = function(age){
//     return console.log(`Sizning yoshingiz: ${age}`)
// };
// const showAge = (age) => {
//     return console.log(`Sizning yoshingiz: ${age}`)
// };
// showAge(20);
// age param o'zgaradi va natija chiqadi agar o'zgarmasa default[1] xolatda turadi!

// 2-masala
// function addNumbers(a=1,b=1){
//     return console.log(`Natija: ${a+b}`)
// };
// const addNumbers = function(a=1,b=1){
//     return console.log(`Natija: ${a+b}`)
// };
// const addNumbers = (a=1,b=1) => {
//     return console.log(`Natija: ${a+b}`)
// };
// addNumbers(2,2);
// a va b param o'zgaradi va natija chiqadi agar o'zgarmasa default[2] xolatda turadi!

// 3-masala
// function hiName(name="Bilol"){
//     return console.log(`Salom, ${name}!`)
// };
// const hiName = function(name="Bilol"){
//     return console.log(`Salom, ${name}!`)
// };
// const hiName = (name="Bilol") => {
//     return console.log(`Salom, ${name}!`)
// };
// hiName("Aziz");
// name param o'zgaradi va natija chiqadi agar o'zgarmasa default["Bilol"] xolatida turadi!

// 4-masala
// function fullName(name="Bilol",surname="Oripov"){
//     return console.log(`${name} ${surname}`)
// };
// const fullName = function(name="Bilol",surname="Oripov"){
//     return console.log(`${name} ${surname}`)
// };
// const fullName = (name="Bilol",surname="Oripov") => {
//     return console.log(`${name} ${surname}`)
// };
// fullName("Aziz","Nabiyev");
// name va surname param o'zgaradi va natija chiqadi agar o'zgarmasa default["Bilol Oripov"] xolatida turadi!

// 5-masala
// function perimeter(length=5, width=3){
//     return console.log(2*(length+width));
// }
// const perimeter = function(length, width){
//     return console.log(2*(length+width));
// }
// const perimeter = (length, width) => {
//     return console.log(2*(length+width));
// }
// perimeter(5,3);
// length va width param o'zgaradi va natija chiqadi agar o'zgarmasa default[16] xolatida turadi!

// 6-masala
// function triangle(a=1,b=2,c=3){
//     return console.log(`Tomon a: ${a}\nTomon b: ${b}\nTomon c: ${c}`)
// }
// const triangle = function(a=1,b=2,c=3){
//     return console.log(`Tomon a: ${a}\nTomon b: ${b}\nTomon c: ${c}`)
// }
// const triangle = (a=1,b=2,c=3) =>{
//     return console.log(`Tomon a: ${a}\nTomon b: ${b}\nTomon c: ${c}`)
// }
// triangle(3,2,1);
// a,b va c param o'zgaradi va natija chiqadi agar o'zgarmasa default["a: 1","b: 2", "c: 3"] xolatida turadi!

// 7-masala
// function square(num=2) {
//     return console.log(num*num);
// }
// const square = function(num) {
//     return console.log(num*num);
// }
// const square = (num) => {
//     return console.log(num*num);
// }
// square(5);
// num param o'zgaradi va natija chiqadi agar o'zgarmasa default[4] xolatida turadi!

// 8-masala
// function animalInfo(name="kuchuk", age=1){
//     return console.log(`Bu ${name}, ${age} yoshda!`);
// };
// const animalInfo = function(name="kuchuk", age=1){
//     return console.log(`Bu ${name}, ${age} yoshda!`);
// };
// const animalInfo = (name="kuchuk", age=1) => {
//     return console.log(`Bu ${name}, ${age} yoshda!`);
// };
// animalInfo("mushuk",3);
// name va age param o'zgaradi va natija chiqadi agar o'zgarmasa default["Bu kuchuk, 1 yoshda!"] xolatida turadi!

// 9-masala 
// function sayHello1(){
//     return console.log("Salom Dunyo!");
// }
// sayHello2();
// const sayHello2 = function(){
//     return console.log("Salom Dunyo!");
// }
// sayHello2();
// const sayHello3 = () =>{
//     return console.log("Salom Dunyo!");
// }
// sayHello3();
// bunda 3 ta funksiya yordamida console.log("Salom Dunyo!"); ni ishlatish kerak bo'ladi

// 10-masala
// function namesGroup(group="Ismlar mavjud emas!"){
//     return console.log(group);
// }

// const namesGroup = function(group="Ismlar mavjud emas!"){
//     return console.log(group);
// }

// const namesGroup = (group="Ismlar mavjud emas!") =>{
//     return console.log(group);
// }

// let namesTable = ["Anvar", "Ali", "Vali", "Iqbol", "Inom"];
// for(names of namesTable) {
//     namesGroup(names);
// }
// bunda Array yordamida ismlar ro'yhati tuzilgan va  console.log(); yordamida natija chiqarilgan va for yordamida har bir ismni yangi satrda chiqarishga buyurilgan