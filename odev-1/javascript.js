let firstName = prompt("Lütfen İsminizi giriniz.") // Bu kısımda prompt ile kullanıcı ismini aldık.
let myName = document.querySelector("#myName") // myName değişkeni yaratarak document ile html dosyamızda bulunan #myName id'li elemanımıza ulaştık.
myName.innerHTML = firstName

function Clock()
{
    let NowDate= new Date()
    let hours = NowDate.getHours()
    let munite = NowDate.getMinutes()
    let second = NowDate.getSeconds()

    let MyClok = document.querySelector("#myClock")
    MyClok.innerHTML=`${hours} : ${munite} : ${second} `
}

setInterval(Clock,1000)