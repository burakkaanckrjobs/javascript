// ********** DOM Icinden Oge Secimi **********

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// let h2 = document.getElementsByTagName('h2')

let title = document.getElementById('title')
console.log(title)
title.innerHTML="Desğisen Bilgi"
console.log(title.innerHTML)


let link = document.querySelector("#Kodluyoruzlink")
console.log(link)
link.innerHTML +=" degişti"
link.style.color="red"
link.classList.add("btn")

