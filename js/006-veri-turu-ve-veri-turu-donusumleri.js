// ********** Veri Turunu Ogrenmek ve Veri Turu Donusumleri ********** 

// veri turunu ogrenmek typeof:
let price =111
let stringPrice ="111"
let hasPassword = true

console.log("price :",typeof(price))
console.log("stringPrice",typeof(stringPrice))
console.log("hasPassword",typeof(hasPassword))


// string(metinsel) bilgileri int ve float'a donusturmek
let number1="11"
number1=parseInt(number1)
console.log("Number1 :",number1,typeof(number1))

let number2="11px"
number2=parseInt(number2)
console.log("Number2 :",number2,typeof(number2))

let number3="11px"
number3=Number(number3)
console.log("Number3 :",number3,typeof(number3))

let number4="11.4px"
number4=parseFloat(number4)
console.log("Number4 :",number4,typeof(number4))

// number veri tipinden string'e donusturmek:

let number5 = 55
number5=number5.toString()
console.log(number5,typeof(number5))

//Bu kontrolleri yaparken sıkça typeof kullanılır.
console.log(typeof 42);
// beklenen output: "number"

console.log(typeof 'kodluyoruz');
//beklenen output: "string"

console.log(typeof true);
// beklenen output: "boolean"

console.log(typeof Variable);
// beklenen output: "undefined"

//Bir başka şekilde isInteger( ), isFinite( ) veya isNaN( ) kullanarak da kontrol sağlayabiliriz.

//isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(0.5) //false

//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
Number.isFinite(0) //true
Number.isFinite('123') //false
Number.isFinite('Hello') //false
Number.isFinite(-Infinity) //false
Number.isFinite(0 / 0) //false

// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.

Number.isNaN(123) //false
Number.isNaN(0) //false
Number.isNaN('123') //false
Number.isNaN('Hello') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true

// Değişken Türünü Değiştirmek (Type Coercion)

// Explicit Coercion

String(123) // “123”
ParseInt("123") // 12

//Implicit Coercion

If(3<5) // true
console.log(""+123) // “123”
12//”6” // 2

//String Dönüşümü

String(123) // “123” explicit
123 + '' // “123”    implicit

String(123) // “123”
String(-12.3) // “-12.3”
String(null) // “null”
String(undefined) // “undefined”
String(true) // “true”
String(false) // “false”

//Symbol Dönüşümü

String(Symbol('my symbol')) // 'Symbol(my symbol)'
'' + Symbol('my symbol') // TypeError is thrown

// Boolean Dönüşümü

Boolean(2) // explicit
var a=!!2 //explicit
if (2) { "..." } // implicit due to logical context
!!2 // implicit due to logical operator
2 || 'hello' // implicit due to logical operator


Boolean('') // false
Boolean(0) // false 
Boolean(-0) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(false) // false


//Önemli NOT: Mantıksal operatörlerden || ve &&, dönüşüm işlemini internally (dahili olarak) yapar. 
//Ama gerçekte ifadenin operand değerini döndürür, değer boolean tipinde olmasa bile. Örneklerle daha iyi anlayalım.

// veya “||” operatörü ilk bulduğu true değeri döner
var a= 2 || s || 4 || 5; // 2
// eğer true dönecek değer bulamazsa en son buluğu false değeri döndürür
var b=0 || "””" || false || -0 || 0 // 0
var c= 0 ||  "“”"  || " “ 123 ”" || 4 ; // ”123” dolu string true dönecektir
// ve ”&&” operatörü ilk bulduğu false değeri döner.
var d=2 && 3 && 0 && 5 && 7; // 0
// eğer false dönecek değer bulamazsa en son buluğu true değeri döndürür
var e= 2 && 3 && 5 && 7 // 7
