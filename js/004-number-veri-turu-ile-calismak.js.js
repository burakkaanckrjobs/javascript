// ********** Number Veri Turu ile Calismak ********** 
// number veri turu tanimlamak:
let price =100;
let tax = 0.18;
let PriceTax=price*tax
let Total = price+PriceTax
console.log(
    "Fiyat : ",price
    ," KDV Orani : ",tax, 
    "KDV Tutari : ",PriceTax,
    "Fiyat : ",Total
)
let stringNumber="11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)



// arttirma ve azaltma islemleri:
let counter = 320
counter=counter+1// uzun yontem
console.log(counter)

counter+=1 //Kısa yontem
counter++;
console.log(counter)

counter --;
console.log(counter)
counter *=10
console.log(counter)


// islem onceligi:
// https://tr.wikipedia.org/wiki/%C4%B0%C5%9Flem_s%C4%B1ras%C4%B1
console.log(2+3*10)// 50 ???????????
 console.log((2+3)*10)// 50 ???????????

// mod(kalan) alma %:

console.log(15%2)
    // sayi tek mi cift mi ???
    // 0 ise cift, 1 ise tek

// 8 urun alan koliye tum urunler sigiyor mu ?

console.log(" Koli kalan Urun Örnegi :",18%8)
// us alma **:
console.log(2*2*2*2)
console.log(2**4)
// asagi yuvarlama islemi -> Math.floor:
 console.log("Aşağıya Yuvarlama : ",Math.floor(1.7)) // -> 1

// yukari yuvarlama islemi -> Math.ceil :
console.log("Yukarıya Yuvarlama : ",Math.ceil(1.7))// -> 2

// yakina yuvarlama islemi -> Math.round :
console.log("Yakına Yuvarlama : ",Math.round(3.6))// 1.4 ->1, 1.5 ->

