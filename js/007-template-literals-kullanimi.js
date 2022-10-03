
// ********** Template Literals Kullanimi ********** 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let userName = "hakan"
const DOMAIN ="kodluyoruz.org"

let email =userName+"@"+DOMAIN

//console.log("Merhaba",userName,"sitemize hosgeldin","mail adresiniz :",email)
let info = `
Merhaba ${userName} sitemize hosgeldin.. 
mail adresin: ${email}
mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}
kisa isminiz: ${userName[0]}.
`
console.log(info)

//Eski kullanım:
let eskiString = "En sevdiğim yemekler:\nİskender\nMantı"

//Yeni kullanım:
let yeniString = `En sevdiğim yemekler:
İskender
Mantı`

//İnterpolasyon, metin içerisinde değişken kullanmak anlamına gelir. Normal dizeler içerisine ifadeler gömmek için kullanılır.

let ad= `Aycan`;
let soyad= `Yerdelen`;

//Eski kullanım
console.log("Benim adım "+ad+" "+ soyad);

//Yeni kullanım
console.log(`Benim adım ${ad} ${soyad}`);


let a = 99;
let b= 999;

console.log(`${a} çarpı ${b} eşittir ${a*b}`);

//Çıktı: 
//99 çarpı 999 eşittir 98901

// HTML Şablonları

//Değişkenlerimizi tanımlayalım
const adı =`Aycan`
const soyadı =`Yerdelen`
const gozRengi =`Kahverengi`
const yas =21

//→ Eski kullanım, Template Literals kullanmadan:

const kisie = "<p>"+adı+"</p>"+
              "<p>"+soyadı+"</p>"+
              "<p>"+gozRengi+"</p>"+
              "<p>"+yas+"</p>"

document.body.innerHTML = kisie;

const kisi = `
<p>${ad}</>
<p>${soyad}</>
<p>${gozRengi}</>
<p>${yas}</>
`;

document.body.innerHTML = kisi;

//Bu kullanım daha az karmaşık ve okunabilir.


//Alıştırma

const kitap = {
    adi : "Fırtına",
    yazari : "Shakespeare",
    tarihi : 1610
  }
const kitap1 =` 
${adi} Fırtına
${yazari} Shakespeare
${tarihi} 1610
`

  const bookTable =
        "<table border>"+
    "<tbody>"+
      "<tr>"+
        "<td>"+"Kitap"+"</td>"+
        "<td>"+kitap1.adi+"</td>"+
      "</tr>"+
    "<tr>"+
        "<td>"+"Yazar"+"</td>"+
        "<td>"+kitap1.yazari+"</td>"+
      "</tr>"+
        "<tr>"+
        "<td>"+"Tarih"+"</td>"+
        "<td>"+kitap1.tarihi+"</td>"+
      "</tr>"+
   " </tbody>"+
  "</table>"

  const bookTable1 =`
  <table border>
    <tbody>
        <tr>
            <td> Kitap </td>
            <td>${kitap1.ad}</td>
        </tr>
        <tr>
            <td> Yazar </td>
            <td>${kitap1.yazar}</td>
        </tr>
        <tr>
            <td> Tarih </td>
            <td>${kitap1.tarih}</td>
        </tr>
    </tbody>
   </table>`

  document.body.innerHTML = bookTable

