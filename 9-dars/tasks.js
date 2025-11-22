/**
 * ============================================
 * JAVASCRIPT ARRAY METODLARI - 15TA MASALA
 * forEach, map, filter, find, every, some
 * ============================================
 */

// ==================== MASALA 1: forEach() ====================
/**
 * MASALA 1: Foydalanuvchilar ro'yxati
 *
 * TUSHUNCHA:
 * Sizda foydalanuvchilar massivi bor. Har bir foydalanuvchining
 * ism va yoshini konsolga chop etish kerak.
 *
 * INPUT:
 * const users = [
 *   { name: 'Ali', age: 25 },
 *   { name: 'Laylo', age: 22 },
 *   { name: 'Vali', age: 28 }
 * ];
 *
 * OUTPUT (konsolda):
 * Ali - 25 yosh
 * Laylo - 22 yosh
 * Vali - 28 yosh
 *
 * ISHLASH KERAKLIGI:
 * forEach() yordamida har bir element ustida iteratsiya qilib,
 * console.log() bilan chop eting
 */

// MASALA 1 YECHIM JOYINING SKELETI:
// const users = [...];
// users.forEach(user => {
//   log
// });

// ==================== MASALA 2: forEach() ====================
/**
 * MASALA 2: Raqamlarni 2 ga ko'paytirish
 *
 * TUSHUNCHA:
 * Raqamlar massivi bor. forEach() yordamida har bir raqamni
 * 2 ga ko'paytirilib, yangi massivga qo'shing.
 *
 * INPUT:
 * const numbers = [1, 2, 3, 4, 5];
 * let doubled = [];
 *
 * OUTPUT:
 * doubled = [2, 4, 6, 8, 10];
 *
 * ISHLASH KERAKLIGI:
 * forEach() loopida har bir raqamni 2 ga ko'paytirib,
 * push() bilan yangi massivga qo'shing
 */

// MASALA 2 YECHIM JOYINING SKELETI:
// const numbers = [1, 2, 3, 4, 5];
// let doubled = [];
// numbers.forEach(num => {
//   // Yozni to'ldiring
// });

// ==================== MASALA 3: map() ====================
/**
 * MASALA 3: Mahsulotlar narxini yangilash
 *
 * TUSHUNCHA:
 * Do'konning mahsulotlari ro'yxati bor. map() yordamida
 * barcha mahsulotlarning narxini 20% ga qimmatroq qilish kerak.
 *
 * INPUT:
 * const products = [
 *   { name: 'Olma', price: 5000 },
 *   { name: 'Nok', price: 8000 },
 *   { name: 'Anor', price: 12000 }
 * ];
 *
 * OUTPUT:
 * const newProducts = [
 *   { name: 'Olma', price: 6000 },
 *   { name: 'Nok', price: 9600 },
 *   { name: 'Anor', price: 14400 }
 * ];
 *
 * ISHLASH KERAKLIGI:
 * map() yordamida yangi massiv hosil qilib, har bir mahsulotning
 * narxini 1.2 ga ko'paytiring
 */

// MASALA 3 YECHIM JOYINING SKELETI:
// const products = [...];
// const newProducts = products.map(product => {
//   return {
//     // Yozni to'ldiring
//   };
// });

// ==================== MASALA 4: map() ====================
/**
 * MASALA 4: Talabalarning baholari
 *
 * TUSHUNCHA:
 * Talabalar va ularning ballari massivi bor. map() yordamida
 * har bir talabaning baholari massivini bitta satrga o'zgartiring.
 *
 * INPUT:
 * const students = [
 *   { name: 'Ahror', grades: [85, 90, 78] },
 *   { name: 'Nodira', grades: [92, 88, 95] }
 * ];
 *
 * OUTPUT:
 * const result = [
 *   { name: 'Ahror', grades: '85, 90, 78' },
 *   { name: 'Nodira', grades: '92, 88, 95' }
 * ];
 *
 * ISHLASH KERAKLIGI:
 * map() yordamida grades massivini join() bilan satrga o'zgartiring
 */

// MASALA 4 YECHIM JOYINING SKELETI:
// const students = [...];
// const result = students.map(student => ({
//   // Yozni to'ldiring
// }));

// ==================== MASALA 5: filter() ====================
/**
 * MASALA 5: 20 yoshdan katta foydalanuvchilar
 *
 * TUSHUNCHA:
 * Foydalanuvchilar massivi bor. filter() yordamida faqat
 * 20 yoshdan katta foydalanuvchilarni tanlang.
 *
 * INPUT:
 * const people = [
 *   { name: 'Ali', age: 18 },
 *   { name: 'Bobur', age: 25 },
 *   { name: 'Guli', age: 17 },
 *   { name: 'Davron', age: 30 }
 * ];
 *
 * OUTPUT:
 * const adults = [
 *   { name: 'Bobur', age: 25 },
 *   { name: 'Davron', age: 30 }
 * ];
 *
 * ISHLASH KERAKLIGI:
 * filter() yordamida age > 20 shartini tekshiring
 */

// MASALA 5 YECHIM JOYINING SKELETI:
// const people = [...];
// const adults = people.filter(person => {
//   // Yozni to'ldiring
// });

// ==================== MASALA 6: filter() ====================
/**
 * MASALA 6: Sotilgan mahsulotlar
 *
 * TUSHUNCHA:
 * Mahsulotlar massivida har bir mahsulotning "sold" (sotildi)
 * xossasi bor. filter() yordamida faqat sotilgan mahsulotlarni
 * ajratib oling.
 *
 * INPUT:
 * const inventory = [
 *   { name: 'Laptop', sold: true },
 *   { name: 'Telefon', sold: false },
 *   { name: 'Monitor', sold: true },
 *   { name: 'Sichqoncha', sold: false }
 * ];
 *
 * OUTPUT:
 * const soldItems = [
 *   { name: 'Laptop', sold: true },
 *   { name: 'Monitor', sold: true }
 * ];
 *
 * ISHLASH KERAKLIGI:
 * filter() orqali sold === true shartini tekshiring
 */

// MASALA 6 YECHIM JOYINING SKELETI:
// const inventory = [...];
// const soldItems = inventory.filter(item => {
//   // Yozni to'ldiring
// });

// ==================== MASALA 7: find() ====================
/**
 * MASALA 7: Qidiruv - email orqali foydalanuvchi topish
 *
 * TUSHUNCHA:
 * Foydalanuvchilar ro'yxati bor. find() yordamida berilgan
 * emailga ega foydalanuvchini toping (birinchisini).
 *
 * INPUT:
 * const users = [
 *   { id: 1, name: 'Ali', email: 'ali@mail.com' },
 *   { id: 2, name: 'Bobur', email: 'bobur@mail.com' },
 *   { id: 3, name: 'Guli', email: 'guli@mail.com' }
 * ];
 * const searchEmail = 'bobur@mail.com';
 *
 * OUTPUT:
 * const user = { id: 2, name: 'Bobur', email: 'bobur@mail.com' };
 *
 * ISHLASH KERAKLIGI:
 * find() yordamida email === searchEmail shartini tekshirib,
 * birinchi topilgan elementni qaytaring
 */

// MASALA 7 YECHIM JOYINING SKELETI:
// const users = [...];
// const searchEmail = 'bobur@mail.com';
// const user = users.find(u => {
//   // Yozni to'ldiring
// });

// ==================== MASALA 8: find() ====================
/**
 * MASALA 8: ID orqali mahsulot qidiruv
 *
 * TUSHUNCHA:
 * Mahsulotlar massivi bor. find() yordamida berilgan ID ga
 * ega mahsulotni toping.
 *
 * INPUT:
 * const products = [
 *   { id: 101, name: 'Kitob', category: 'O\'qish' },
 *   { id: 102, name: 'Daftar', category: 'Yozish' },
 *   { id: 103, name: 'Qalam', category: 'Yozish' }
 * ];
 * const targetId = 102;
 *
 * OUTPUT:
 * const product = { id: 102, name: 'Daftar', category: 'Yozish' };
 *
 * ISHLASH KERAKLIGI:
 * find() yordamida id === targetId shartini tekshiring
 */

// MASALA 8 YECHIM JOYINING SKELETI:
// const products = [...];
// const targetId = 102;
// const product = products.find(p => {
//   // Yozni to'ldiring
// });

// ==================== MASALA 9: every() ====================
/**
 * MASALA 9: Barcha talabalar imtihondan o'tdimi?
 *
 * TUSHUNCHA:
 * Talabalar va ularning imtihon ballari massivi bor. every()
 * yordamida barcha talabalar 60 dan ortiq ball olganmi yoki yo'qmi
 * tekshiring (true/false).
 *
 * INPUT:
 * const scores = [85, 72, 68, 90, 75];
 * const passingGrade = 60;
 *
 * OUTPUT:
 * const allPassed = true; (chunki hammasi 60 dan katta)
 *
 * VARIANT 2 INPUT:
 * const scores = [85, 72, 68, 45, 75]; // 45 < 60
 *
 * OUTPUT:
 * const allPassed = false;
 *
 * ISHLASH KERAKLIGI:
 * every() yordamida har bir score >= passingGrade shartini tekshiring
 */

// MASALA 9 YECHIM JOYINING SKELETI:
// const scores = [85, 72, 68, 90, 75];
// const passingGrade = 60;
// const allPassed = scores.every(score => {
//   // Yozni to'ldiring
// });

// ==================== MASALA 10: every() ====================
/**
 * MASALA 10: Barcha mahsulotlar mavjudmi?
 *
 * TUSHUNCHA:
 * Do'konning mahsulotlari bor. every() yordamida barcha
 * mahsulotlar do'konda mavjud (stock > 0) ekanligini tekshiring.
 *
 * INPUT:
 * const items = [
 *   { name: 'Kitob', stock: 5 },
 *   { name: 'Qalam', stock: 0 },
 *   { name: 'Daftar', stock: 3 }
 * ];
 *
 * OUTPUT:
 * const inStock = false; (chunki Qalamning stock = 0)
 *
 * ISHLASH KERAKLIGI:
 * every() yordamida item.stock > 0 shartini tekshiring
 */

// MASALA 10 YECHIM JOYINING SKELETI:
// const items = [...];
// const inStock = items.every(item => {
//   // Yozni to'ldiring
// });

// ==================== MASALA 11: some() ====================
/**
 * MASALA 11: Biron bir talaba shart topshirganmi?
 *
 * TUSHUNCHA:
 * Talabalar massivi bor. some() yordamida biron bir talaba
 * kamida 90 ball olganmi yoki yo'qmi tekshiring.
 *
 * INPUT:
 * const students = [
 *   { name: 'Ali', score: 75 },
 *   { name: 'Bobur', score: 88 },
 *   { name: 'Guli', score: 92 }
 * ];
 * const excellentScore = 90;
 *
 * OUTPUT:
 * const hasExcellent = true; (chunki Guli 92 olgan)
 *
 * ISHLASH KERAKLIGI:
 * some() yordamida biron bir score >= excellentScore tekshiring
 */

// MASALA 11 YECHIM JOYINING SKELETI:
// const students = [...];
// const excellentScore = 90;
// const hasExcellent = students.some(student => {
//   // Yozni to'ldiring
// });

// ==================== MASALA 12: some() ====================
/**
 * MASALA 12: Xato mavjudmi?
 *
 * TUSHUNCHA:
 * API javobi massivi bor. some() yordamida biron bir
 * request xato qaytarganmi (status: 'error') tekshiring.
 *
 * INPUT:
 * const responses = [
 *   { id: 1, status: 'success' },
 *   { id: 2, status: 'success' },
 *   { id: 3, status: 'error' },
 *   { id: 4, status: 'success' }
 * ];
 *
 * OUTPUT:
 * const hasError = true; (chunki biron xato mavjud)
 *
 * ISHLASH KERAKLIGI:
 * some() yordamida status === 'error' tekshiring
 */

// MASALA 12 YECHIM JOYINING SKELETI:
// const responses = [...];
// const hasError = responses.some(response => {
//   // Yozni to'ldiring
// });

// ==================== MASALA 13: map() + filter() ====================
/**
 * MASALA 13: Qimmatdagi mahsulotlarning ismlarini olish
 *
 * TUSHUNCHA:
 * Mahsulotlar massivi bor. Avval 10000 dan katta narxdagi
 * mahsulotlarni filter() qiling, keyin map() bilan faqat ularning
 * ismlarini ajratib oling.
 *
 * INPUT:
 * const products = [
 *   { name: 'Laptop', price: 50000 },
 *   { name: 'Qalam', price: 1000 },
 *   { name: 'Monitor', price: 20000 },
 *   { name: 'Daftar', price: 2000 }
 * ];
 *
 * OUTPUT:
 * const expensiveNames = ['Laptop', 'Monitor'];
 *
 * ISHLASH KERAKLIGI:
 * 1. filter() yordamida price > 10000 shartini tekshiring
 * 2. map() yordamida natija elementlardan faqat name olish
 */

// MASALA 13 YECHIM JOYINING SKELETI:
// const products = [...];
// const expensiveNames = products
//   .filter(p => /* Yozni to'ldiring */)
//   .map(p => /* Yozni to'ldiring */);

// ==================== MASALA 14: find() + map() ====================
/**
 * MASALA 14: Foydalanuvchining barcha maqolalarini topish
 *
 * TUSHUNCHA:
 * 1. Foydalanuvchilar massivi bor
 * 2. Maqolalar massivi bor (har bir maqola userId ga ega)
 *
 * 'Ali' ismli foydalanuvchini find() orqali toping,
 * keyin o'sha foydalanuvchining ID si bo'yicha barcha
 * maqolalarini filter() orqali toping.
 *
 * INPUT:
 * const users = [
 *   { id: 1, name: 'Ali' },
 *   { id: 2, name: 'Bobur' }
 * ];
 * const articles = [
 *   { id: 101, userId: 1, title: 'Dasturlash' },
 *   { id: 102, userId: 2, title: 'Dizayn' },
 *   { id: 103, userId: 1, title: 'Web' }
 * ];
 *
 * OUTPUT:
 * const aliArticles = [
 *   { id: 101, userId: 1, title: 'Dasturlash' },
 *   { id: 103, userId: 1, title: 'Web' }
 * ];
 *
 * ISHLASH KERAKLIGI:
 * 1. find() orqali 'Ali' topish va uning ID ni olish
 * 2. filter() orqali userId === aliId shartini tekshiring
 */

// MASALA 14 YECHIM JOYINING SKELETI:
// const users = [...];
// const articles = [...];
// const user = users.find(u => /* Yozni to'ldiring */);
// const aliArticles = articles.filter(a => /* Yozni to'ldiring */);

// ==================== MASALA 15: Barcha metodlar kombinasiyasi ====================
/**
 * MASALA 15: Kompleks masala - Ballarni qayta ishlash
 *
 * TUSHUNCHA:
 * Talabalar va ularning baholari bor. Quyidagilarni qiling:
 *
 * 1. forEach() yordamida har bir talabaning o'rtachasi hisoblansin
 * 2. map() yordamida yangi massiv yaratilsin (name + average)
 * 3. filter() yordamida faqat o'rtachasi 80 dan katta bo'lganlar
 * 4. Ularning ismlarini map() bilan olsin
 *
 * INPUT:
 * const students = [
 *   { name: 'Ali', grades: [85, 90, 78] },
 *   { name: 'Bobur', grades: [92, 88, 95] },
 *   { name: 'Guli', grades: [70, 65, 68] }
 * ];
 *
 * OUTPUT:
 * const topStudents = ['Ali', 'Bobur'];
 * // (Ali: (85+90+78)/3 = 84.33, Bobur: (92+88+95)/3 = 91.66)
 * // (Guli: (70+65+68)/3 = 67.66)
 *
 * ISHLASH KERAKLIGI:
 * - Har bir talabaning o'rtachasi: sum(grades) / grades.length
 * - forEach() bilan o'rtachasini hisoblash
 * - map() bilan yangi ob'ekt yaratish
 * - filter() orqali average > 80 shartini tekshiring
 * - map() bilan faqat ismlarni olish
 */

// MASALA 15 YECHIM JOYINING SKELETI:
// const students = [...];
// let studentAverages = [];
//
// students.forEach(student => {
//   // O'rtachasini hisoblang va studentAverages ga qo'shing
// });
//
// const topStudents = studentAverages
//   .filter(s => /* Yozni to'ldiring */)
//   .map(s => /* Yozni to'ldiring */);