//===================================================================================================|
//                                        1 - Masala                                                 |
//===================================================================================================|
// Sharti: Foydalanuvchi prompt orqali bir son kiritadi. Agar son 10 ga teng bo'lsa, "To'g'ri son!"  |
// deb alert chiqaring, aks holda "Boshqa son kiritdingiz!" deb alert chiqaring.                     |
//===================================================================================================|
//                                       Yechilishi                                                  |
//===================================================================================================|
// let correctNumber = 10;                                                                         //|
// let userValue = prompt("Biror sonni kiriting");                                                 //|
// if(correctNumber == userValue) {                                                                //|
//     alert("To'gri son!");                                                                       //|
//     console.log("To'gri son!");                                                                 //|
// } else {                                                                                        //|
//     alert("Boshqa son kiritdingiz!");                                                           //|
//     console.log("Boshqa son kiritdingiz!");                                                     //|
// }                                                                                               //|
//===================================================================================================|
//                                       Mantiq                                                      |
//===================================================================================================|
// Foydalanuvchi kiritgan son correctNumber`ga teng bo'lsa unda to'gri son javobini oladi, aksincha  |
// boshqa son kiritsa "Boshqa son kiritdingiz" degan javob oladi                                     |
//===================================================================================================|
//                                        2 - Masala                                                 |
//===================================================================================================|
// Sharti: Foydalanuvchi prompt orqali "ha" yoki "yo'q" deb kiritadi. Agar "ha" kiritilgan           |
// bo'lsa, "Ruxsat bor!" deb alert chiqaring, aks holda "Ruxsat yo'q!" deb alert chiqaring.          |
//===================================================================================================|
//                                       Yechilishi                                                  |
//===================================================================================================|
// let userPrompt = prompt("Iltimos, ha yoki yo'q deb kiriting!");                                 //|
// if (userPrompt==="ha") {                                                                        //|
//     alert("Ruxsat bor");                                                                        //|
//     console.log("Ruxsat bor");                                                                  //|
// } else if(userPrompt==="yo'q"){                                                                 //|
//     alert("Ruxsat yo'q");                                                                       //|
//     console.log("Ruxsat yo'q");                                                                 //|
// } else {                                                                                        //|
//     alert("Faqat Ha yoki Yo'q deb yozing");                                                     //|
//     console.log("Faqat Ha yoki Yo'q deb yozing");                                               //|
// }                                                                                               //|
//===================================================================================================|
//                                       Mantiq                                                      |
//===================================================================================================|
// Foydalanuvchi "ha" yoki "yo'q" qiymatlarini kiritsa unga javob beriladi, ya'ni "ha" deb yozsa unga|
// Ruxsat bor deb javob beriladi, "yo'q" deb yozsa Ruxsat yo'q degan javob beriladi                  |
//===================================================================================================|
//                                        3 - Masala                                                 |
//===================================================================================================|
// Sharti: Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 dan katta va 100 dan kichik      |
// bo'lsa, "Yaxshi diapazon!" deb alert chiqaring, aks holda "Diapazon tashqarisida!" deb alert      |
// chiqaring.                                                                                        |
//===================================================================================================|
//                                       Yechilishi                                                  |
//===================================================================================================|
// let userPrompt = prompt("Son kiriting (0~100)");                                                //|
// userPrompt = Number(userPrompt);                                                                //|
// if (userPrompt > 0 && userPrompt < 100) {                                                       //|
//     alert("Yaxshi diapazon!")                                                                   //|
//     console.log("Yaxshi diapazon!")                                                             //|
// } else {                                                                                        //|
//     alert("Diapazon tashqarisida");                                                             //|
//     console.log("Diapazon tashqarisida");                                                       //|
// }                                                                                               //|
//===================================================================================================|
//                                       Mantiq                                                      |
//===================================================================================================|
// Foydalanuvchi 0~100 atrofida son kitirsa "Yaxshi diapazon!" degan habar chiqadi, aks holda      //|
// tashqarida                                                                                      //|
//===================================================================================================|
//                                        4 - Masala                                                 |
//===================================================================================================|
// Sharti: Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z uzunligi 5 dan katta bo'lsa,     |
// "Uzoq so'z!" deb alert chiqaring, aks holda "Qisqa so'z!" deb alert chiqaring.                    |
//===================================================================================================|
//                                       Yechilishi                                                  |
//===================================================================================================|
// let userPrompt = prompt("So'z kiriting (max: 5)");                                              //|
// if(userPrompt.length<=5){                                                                       //|
//     alert("Qisqa so'z!")                                                                        //|
//     console.log("Qisqa so'z!")                                                                  //|
// } else {                                                                                        //|
//     alert("Uzun so'z!")                                                                         //|
//     console.log("Uzun so'z!")                                                                   //|
// }                                                                                               //|
//===================================================================================================|
//                                       Mantiq                                                      |
//===================================================================================================|
// Foydalanuvchi so'z kiritganda lenght so'zning harflarini sonini o'lchaydi! Agar harflar soni 5 dan|
// oshganda "Uzun so'z" degan xabar beriladi, aksincha esa "Qisqa so'z" degan xabar.                 |
//===================================================================================================|
//                                        5 - Masala                                                 |
//===================================================================================================|
// Sharti: Foydalanuvchi prompt orqali bir son kiritadi. Agar son juft bo'lsa, "Juft son!" deb alert |
// chiqaring, aks holda "Toq son!" deb alert chiqaring.                                              |
//===================================================================================================|
//                                       Yechilishi                                                  |
//===================================================================================================|
// let userValue = prompt("Son kiriting")                                                          //|
// userValue = Number(userValue)                                                                   //|
// if(isNaN(userValue)) {                                                                          //|
//     alert("Iltimos, son kiriting!")                                                             //|
//     console.log("Iltimos, son kiriting!")                                                       //|
// } else if(userValue%2==0){                                                                      //|
//     alert("Juft son!")                                                                          //|
//     console.log("Juft son!")                                                                    //|
// } else {                                                                                        //|
//     alert("Toq son!")                                                                           //|
//     console.log("Toq son!")                                                                     //|
// }                                                                                               //|
//===================================================================================================|
//                                       Mantiq                                                      |
//===================================================================================================|
// Foydalanuvchi so'z kiritsa, undan son kiritishini talab qiladi. Agar u toq son kiritsa "Toq son!",|
// aksincha bo'lsa "Juft son".                                                                       |
//===================================================================================================|
//                                        6 - Masala                                                 |
//===================================================================================================|
// Sharti: Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 bo'lsa, "Nol kiritdingiz!"       |
// deb alert chiqaring, aks holda "Nol emas!" deb alert chiqaring.                                   |
//===================================================================================================|
//                                       Yechilishi                                                  |
//===================================================================================================|
// let userValue = prompt("Son kiriting")                                                          //|
// userValue=Number(userValue);                                                                    //|
// if (isNaN(userValue)) {                                                                         //|
//     alert("Iltimos, son kiriting!");                                                            //|
//     console.log("Iltimos, son kiriting!");                                                      //|
// } else if(userValue===0) {                                                                      //|
//     alert("Nol kiritdingiz!");                                                                  //|
//     console.log("Nol kiritdingiz!");                                                            //|
// } else {                                                                                        //|
//     alert("Nol emas!");                                                                         //|
//     console.log("Nol emas!");                                                                   //|
// }                                                                                               //|
//===================================================================================================|
//                                       Mantiq                                                      |
//===================================================================================================|
// Foydalanuvchi so'z kiritsa, undan son kiritishini talab qiladi. Agar u 0 kiritsa "Nol kiritdingiz"|
// degan deb alert chiqadi. Boshqa son kiritsa "Nol emas!" degan alert chiqadi                       |
//===================================================================================================|
//                                        7 - Masala                                                 |
//===================================================================================================|
// Sharti: Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z "salom" bo'lsa, "Salom, dunyo!"  |
// deb alert chiqaring, aks holda "Boshqa so'z kiritdingiz!" deb alert chiqaring.                    |
//===================================================================================================|
//                                       Yechilishi                                                  |
//===================================================================================================|
// let userPrompt = prompt("So'z kiriting")                                                        //|
// if(userPrompt==="salom") {                                                                      //|
//     alert("Salom, dunyo!");                                                                     //|
//     console.log("Salom, dunyo!");                                                               //|
// } else {                                                                                        //|
//     alert("Boshqa so'z kiritdingiz!");                                                          //|
//     console.log("Boshqa so'z kiritdingiz!");                                                    //|
// }                                                                                               //|
//===================================================================================================|
//                                       Mantiq                                                      |
//===================================================================================================|
// Foydalanuvchi "salom" so'zini kiritsa "Salom, dunyo!" xabarini oladi, boshqa so'z kiritsa         |
// "Boshqa so'z kiritdingiz!" deb alert chiqadi                                                      |
//===================================================================================================|
//                                        8 - Masala                                                 |
//===================================================================================================|
// Sharti: Foydalanuvchi prompt orqali ikkita son kiritadi. Agar birinchi son ikkinchisidan katta    |
// bo'lsa, "Birinchi son katta!" deb alert chiqaring, aks holda "Ikkichi son katta yoki teng!" deb   |
// alert chiqaring.                                                                                  |
//===================================================================================================|
//                                       Yechilishi                                                  |
//===================================================================================================|
// let userFirstValue = Number(prompt("Son kiriting"))                                             //|
// let userSecondValue = Number(prompt("Yana bir son kiriting"))                                   //|
// if(userFirstValue>userSecondValue){                                                             //|
//     alert("Birinchi son katta!");                                                               //|
//     console.log("Birinchi son katta!");                                                         //|
// } else if(userFirstValue<userSecondValue) {                                                     //|
//     alert("Ikkinchi son katta!");                                                               //|
//     console.log("Ikkinchi son katta!");                                                         //|
// } else if(userFirstValue===userSecondValue){                                                    //|
//     alert("Kiritilgan sonlar teng!");                                                           //|
//     console.log("Kiritilgan sonlar teng!");                                                     //|
// } else {                                                                                        //|
//     alert("Iltimos, barcha inputlarni to'ldiring yoki so'z yozmang!");                          //|
//     console.log("Iltimos, barcha inputlarni to'ldiring yoki so'z yozmang!");                    //|
// }                                                                                               //|
//===================================================================================================|
//                                       Mantiq                                                      |
//===================================================================================================|
// Agar kiritilgan sonlardan biri katta bo'lsa masalan userFirstValue: 10 | userSecondtValue: 5      |
// bo'lsa unda "Birinchi son katta!" deb alert chiqadi, aksincha bo'lsa "Ikkinchi son katta!" deb    |
// alert chiqadi. Agar sonlar teng bo'lsa sonlar teng deb chiqadi.                                   |
//===================================================================================================|
//                                        9 - Masala                                                 |
//===================================================================================================|
// Sharti: Foydalanuvchi prompt orqali yoshini va ismini kiritadi. Agar yosh 18 dan katta va ism     |
// "Ali" bo'lsa, "Xush kelibsiz, Ali!" deb alert chiqaring, aks holda "Kirish taqiqlanadi!" deb      |
// alert chiqaring.                                                                                  |
//===================================================================================================|
//                                       Yechilishi                                                  |
//===================================================================================================|
// let userName = prompt("Ismingizni kiriting")                                                      |
// let userAge = Number(prompt("Yoshingizni kiriting"))                                              |
// if (userName==="Ali"&&userAge>=18) {                                                              |
//     alert("Xush kelibsiz, Ali!");                                                                 |
//     console.log("Xush kelibsiz, Ali!");                                                           |
// } else {                                                                                          |
//     alert("Kirish taqiqlanadi!");                                                                 |
//     console.log("Kirish taqiqlanadi!");                                                           |
// }                                                                                                 |
//===================================================================================================|
//                                       Mantiq                                                      |
//===================================================================================================|
// Foydalanuvchi ism va yosh kiritadi. Agar ism "Ali" va yosh 18 ga teng bo'lsa unga                 |
// "Xush kelibsiz, Ali" degan alert chiqadi. Agar mos kelmasa "Kirish taqiqlanadi" degan.            |
//===================================================================================================|
//                                        10 - Masala                                                |
//===================================================================================================|
// Sharti: Foydalanuvchi prompt orqali bir son kiritadi. Agar son 10 dan kichik yoki 100 dan katta   |
// bo'lsa, "Chegaradan tashqarida!" deb alert chiqaring, aks holda "Chegara ichida!" deb alert       |
// chiqaring.                                                                                        |
//===================================================================================================|
//                                       Yechilishi                                                  |
//===================================================================================================|
// let userValue = Number(prompt("Son kiriting"))                                                  //|
// if(userValue > 9 && userValue < 101) {                                                          //|
//     alert("Chegara ichida!");                                                                   //|
//     console.log("Chegara ichida!");                                                             //|
// } else {                                                                                        //|
//     alert("Chegaradan tashqarida!");                                                            //|
//     console.log("Chegaradan tashqarida!");                                                      //|
// }                                                                                               //|
//===================================================================================================|
//                                       Mantiq                                                      |
//===================================================================================================|
// Foydalanuvchi 10~100 ichida bo'lgan son kiritsa "Chegara ichida!", aks holda                    //|
// "Chegaradan tashqarida!" degan alert chiqadi                                                    //|
//===================================================================================================| 