// // Objectlar xuddi jadvalga o'xshaydi!
// // Object tuzilishi: 
// // key:value | bu ikkisi umumiy property deb ataladi
// const object = {
//     name:"Aziz",
//     surname: "Karimov"
// }
// console.log(object.name);
// console.log(object["surname"]);
// // Object propertyni ikki xil usulda chaqirsa bo'ladi!
// // Object o'zgarmas bo'lsa ham uning ichidagi qiymatni o'zgartirsa bo'ladi!
// // object.name = "Ilhom";
// // console.log(object.name);
// // Object ichida yana object yozsa bo'ladi
// const object2 = {
//     fullname: {
//         name: "Aziz",
//         surname : "Karimov"
//     }
// }
// console.log(object2.fullname.name);
// console.log(object2.fullname.surname);
// // shuningdek funksiya ham
// const object3 = {
//     name:"Aziz",
//     surname: "Karimov",
//     info : function() {
//         console.log(`Salom men ${this.name} ${this.surname}man!`);
//     }
// } 
// object3.info();
// // Object methoda ikki xil ajoyib funksiya bor
// // Object.keys - object ichida berilgan kalitlarni va sonini chiqarib beradi
// // Object.values - object ichida berilgan qiymatlarni va sonini chiqarib beradi
// const object4 = {
//     name:"Aziz",
//     surname: "Karimov"
// }
// console.log(Object.keys(object4));
// console.log(Object.values(object4));
// // agar keyda spacebar[bo'shliq] beradigon bo'lsak snyxtax error beradi!
// // shuning uchun [""] ichida yoziladi
// const object5 = {
//     ["name surname"]: "Aziz Karimov"
// }
// console.log(object5["name surname"]);
