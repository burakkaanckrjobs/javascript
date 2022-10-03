// ********** prompt ile Kullanicidan Bilgi Almak **********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

let FullName=prompt("Lütfen adınızı Giriniz : ")
console.log(FullName)

let greeting =document.querySelector("#greeting")
greeting.innerHTML=`${greeting.innerHTML} <small sytle ="color:red">${FullName}</small>`


