// 1 - masala
// const getObj = {name:"Ali", age: 25};
// function getUserInfo(name="Akbar", age=30) {
//     console.log(`Foydalanuvchi ismi: ${name}, yoshi: ${age}`);
// };
// const getUserInfo = function(name="Akbar", age=30) {
//     console.log(`Foydalanuvchi ismi: ${name}, yoshi: ${age}`);
// };
// const getUserInfo = (name="Akbar", age=30) => {
//     console.log(`Foydalanuvchi ismi: ${name}, yoshi: ${age}`);
// };
// getUserInfo(getObj.name, getObj.age);
// Bu funksiyada Objectdan name va ageni oladi agar topilmasa default paramdan foydalanadi va consolga chiqaradi !

// 2 - masala
// const productObj = {name:"Telefon", price:1000};
// function addTax(value=1120){
//     productObj.priceWithTax=value;
//     console.log(productObj);
// };
// const addTax = function(value=1120){
//     productObj.priceWithTax=value;
//     console.log(productObj);
// };
// const addTax = (value=1120) => {
//     productObj.priceWithTax=value;
//     console.log(productObj);
// };
// addTax(1122);
// Bu funksiyada Object-ga key[priceWithTax] qo'shadi va unga qiymat[value] beradi, va ekranda aks etiradi. Agar funksiyada qiymat berilmasa default xolatdagi paramdan foydalanadi.

// 3 - masala
// const objCarInfo = {model:"Cobalt", year: 2022, color: "oq"};
// function carInfo(model=objCarInfo.model || "Damas", year=objCarInfo.year||2020, color=objCarInfo.color||"qaymoqrang"){
//     console.log(`Bu ${color} rangli ${model}, ${year}-yil.`);
// };
// const carInfo = function(model=objCarInfo.model || "Damas", year=objCarInfo.year||2020, color=objCarInfo.color||"qaymoqrang"){
//     console.log(`Bu ${color} rangli ${model}, ${year}-yil.`);
// };
// const carInfo = (model=objCarInfo.model || "Damas", year=objCarInfo.year||2020, color=objCarInfo.color||"qaymoqrang") => {
//     console.log(`Bu ${color} rangli ${model}, ${year}-yil.`);
// };
// carInfo();
// Bu funksiyada Object-dan model, year, color qiymatlarini oladi va console.log(); da aks etiradi. Agar topilmasa default paramdan foydalanadi. Agar object qiymatini o'zgartirmoqchi bo'lsa carInfo("Tico", 2000, "yashil");

// 4 - masala
// const userInfo = {name:"Ali", email:"ali@gmail.com"};
// function hasEmail(email){
//     if(email===userInfo.email){
//         console.log(false);
//     } else {
//         console.log(true);
//     }
// };
// const hasEmail = function(email){
//     if(email===userInfo.email){
//         console.log(false);
//     } else {
//         console.log(true);
//     }
// };
// const hasEmail = (email) => {
//     if(email===userInfo.email){
//         console.log(false);
//     } else {
//         console.log(true);
//     }
// };
// hasEmail();
// Bu funksiyada Object-dan emailni topa olsa true aks xolda false qiymatini qaytaradi!

// 5 - masala
// const obj = {
// workerTable : [
// {name: "Ali", salary: 1000},
// {name: "Vali", salary: 2000},
// {name: "Vali", salary: 2000}
// ]
// }
// function totalSalary(){
//     let x = 0;
//     for(let i in obj.workerTable){
//         x += obj.workerTable[i].salary;
//         console.log(x);
//     };
// };
// const totalSalary = function(){
//     let x = 0;
//     for(let i in obj.workerTable){
//         x += obj.workerTable[i].salary;
//         console.log(x);
//     };
// };
// const totalSalary = () => {
//     let x = 0;
//     for(let i in obj.workerTable){
//         x += obj.workerTable[i].salary;
//         console.log(x);
//     };
// };
// totalSalary();
// Bu funksiyada objectdan workerTableni ichidan salaryni ajratib oladi. total salary-ni 0 ga tenglab olamiz. i ni workerTable-ni index-igacha ishlashiga. x ni object salary indexlarigacha ajratib oladi. va x larni qo'shadi. va console-da chiqaradi.

// 6 - masala
// const car = {model: "Cobalt", distance: 150, time: 3}
// function calculateSpeed(dis=car.distance, time=car.time){
//     let speed = dis/time;
//     car.speed = speed;
//     console.log(car);
// };
// const calculateSpeed = function(dis=car.distance, time=car.time){
//     let speed = dis/time;
//     car.speed = speed;
//     console.log(car);
// };
// const calculateSpeed = (dis=car.distance, time=car.time) => {
//     let speed = dis/time;
//     car.speed = speed;
//     console.log(car);
// };
// calculateSpeed();
// Bu funksiyada Object-dan distance[masofa] va time[vaqt] ni oladi. Keyin esa ditance-ni time-ga bo'ladi. Keyin esa speedni Object-ga qo'shadi.

// 7 - masala
// const objWorker = {name:"Ali",start:9,end:18};
// function calculateWorkTime(startTime=objWorker.start, endTime=objWorker.end) {
//     let workTime = endTime-startTime;
//     objWorker.hoursWorked = workTime;
//     console.log(objWorker);
// };
// const calculateWorkTime = function(startTime=objWorker.start, endTime=objWorker.end) {
//     let workTime = endTime-startTime;
//     objWorker.hoursWorked = workTime;
//     console.log(objWorker);
// };
// const calculateWorkTime = (startTime=objWorker.start, endTime=objWorker.end) => {
//     let workTime = endTime-startTime;
//     objWorker.hoursWorked = workTime;
//     console.log(objWorker);
// };
// calculateWorkTime(10,20);
// Bu funksiyada Object-dan start va end-ni oladi va end-dan start-ni ayriydi. Natijani Object-ga qo'shadi.

// 8 - masala
// const objSide = {side:4};
// function calculateVolume(side=objSide.side){
//     let volumeResult = side**3;
//     objSide.volume = volumeResult;
//     console.log(objSide);
// };
// const calculateVolume = function (side=objSide.side){
//     let volumeResult = side**3;
//     objSide.volume = volumeResult;
//     console.log(objSide);
// };
// const calculateVolume = (side=objSide.side) => {
//     let volumeResult = side**3;
//     objSide.volume = volumeResult;
//     console.log(objSide);
// }
// calculateVolume(8); // 512
// Bu funksiyada Object-dan side-ni oladi va uni 3 chi darajaga ko'tarib Object-ga qo'shadi.

// 9 - masala
// const userAccount = {username:"test", password: "12345678"};
// function isPasswordStrong(pass=userAccount.password) {
//     if(pass.length>=6) userAccount.isStrong = true;
//     else userAccount.isStrong = false;
//     console.log(userAccount);
// };
// const isPasswordStrong = function(pass=userAccount.password) {
//     if(pass.length>=6) userAccount.isStrong = true;
//     else userAccount.isStrong = false;
//     console.log(userAccount);
// };
// const isPasswordStrong = (pass=userAccount.password) => {
//     if(pass.length>=6) userAccount.isStrong = true;
//     else userAccount.isStrong = false;
//     console.log(userAccount);
// };
// isPasswordStrong();
// Bu funksiyada Object-dan passwordni oladi agar parol uzunligi 6 ga teng yoki undan ortsa isStrong:true aks xolda false qiymatini qaytaradi.

// 10 - masala 
// const objInfo = {name:"Laylo", age:20} 
// function calculateBirthYear(age=objInfo.age){
//     let birthYear = 2025-age;
//     objInfo.birthYear = birthYear;
//     console.log(objInfo);
// };
// const calculateBirthYear = function(age=objInfo.age){
//     let birthYear = 2025-age;
//     objInfo.birthYear = birthYear;
//     console.log(objInfo);
// };
// const calculateBirthYear = (age=objInfo.age)=>{
//     let birthYear = 2025-age;
//     objInfo.birthYear = birthYear;
//     console.log(objInfo);
// };
// calculateBirthYear();
// Bu funksiyada Object-dan ageni oladi va 2025 dan ayriydi va birthYear degan kalit yaratadi va value-siga birthYear ni tenglaydi.

// 11 - masala
// const userInfo = {name:"Ulug'bek", age:20};
// Object.freeze(userInfo);
// function frozenChecker(user=userInfo){
//     user.age=22;
//     if(Object.isFrozen(user)) console.log("Object is frozen.")
//     else console.log(user);
// };
// const frozenChecker = function(user=userInfo){
//     user.age=22;
//     if(Object.isFrozen(user)) console.log("Object is frozen.")
//     else console.log(user);
// }
// const frozenChecker = (user=userInfo) =>{
//     user.age=22;
//     if(Object.isFrozen(user)) console.log("Object is frozen.")
//     else console.log(user);
// }
// frozenChecker();
// Bu funksiya Objectni muzlatilganligini tekshiradi yani freeze=true bo'lsa console-da "Object is frozen." so'zini aks etiradi. Agar muzlamagan bo'lsa qiymatni o'zgartiradi.

// 12 - masala
// const car = Object.freeze({model:"Malibu"});
// function checkFrozenStatus(carObj=car) {
//     if(Object.isFrozen(carObj))console.log("Frozen: True")
//     else console.log("Frozen: False");
// };
// const checkFrozenStatus = function(carObj=car) {
//     if(Object.isFrozen(carObj))console.log("Frozen: True")
//     else console.log("Frozen: False");
// };
// const checkFrozenStatus(carObj=car) => {
//     if(Object.isFrozen(carObj))console.log("Frozen: True")
//     else console.log("Frozen: False");
// };
// checkFrozenStatus();
// Bu funksiya Objectni muzlatilganligini tekshiradi yani freeze=true bo'lsa console-da "Frozen: True" so'zini aks etiradi. Agar muzlamagan False.

// 13 - masala
// const objPerson = {name:"Ali"};
// Object.seal(objPerson);
// function addPropertys(){
//     objPerson.age=22; objPerson.name="Vali";
//     if(Object.isSealed(objPerson)) console.log("Cannot add new property");
//     else console.log(objPerson); console.log(objPerson);
// }; 
// const addPropertys = function (){
//     objPerson.age=22; objPerson.name="Vali";
//     if(Object.isSealed(objPerson)) console.log("Cannot add new property");
//     else console.log(objPerson); console.log(objPerson);
// };
// const addPropertys = () =>{
//     objPerson.age=22; objPerson.name="Vali";
//     if(Object.isSealed(objPerson)) console.log("Cannot add new property");
//     else console.log(objPerson); console.log(objPerson);
// };
// addPropertys();
// Bu funksiya Object-ga yangi property qo'shishni tekshiradi, ya`ni seal() ishlasa "Cannot add new property" deb console-ga chiqaradi, lekin propertyni o'zgartisa bo'ladi.

// 14 - masala 
// const phone = {brand:"iPhone"};
// Object.seal(phone)
// function itIsSealed(){
//     if(Object.isSealed(phone)) console.log("Selaed");
//     else console.log("Not-Sealed"); 
// };
// const itIsSealed = function() {
//     if(Object.isSealed(phone)) console.log("Selaed");
//     else console.log("Not-Sealed"); 
// };
// const itIsSealed = () => {
//     if(Object.isSealed(phone)) console.log("Selaed");
//     else console.log("Not-Sealed"); 
// };
// itIsSealed();
// Bu funksiyada sealed yani property o'chirish va qo'shishni cheklaganligini tekshiradi ,lekin propertyni o'zgartisa bo'ladi. 

// 15 - masala 
// const book = {title:"JS Fundamentals", author:"Mirzo"};
// function checkProperty(obj=book, key="title"){
//     if(obj[key]) console.log(true);
//     else console.log(false);
// };
// const checkProperty = function(obj=book, key="title") {
//     if(obj[key]) console.log(true);
//     else console.log(false);
// };
// const checkProperty = (obj=book, key="title") =>{
//     if(obj[key]) console.log(true);
//     else console.log(false);
// };
// checkProperty(book,"author");
// Bu funksiyada property nomini tekshiradi bo'lsa true aks xolda false qiymatini qaytaradi.