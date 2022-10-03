// ********** liste icerisindeki son elemana ulasmak veya eleman eklemek **********

let item = document.querySelector("#list")
console.log(item)

let LastChild = document.querySelector("ul#list>li:last-child")
LastChild.innerHTML ="Son öge degişti..."

let FirstChild = document.querySelector("ul#list>li:first-Child")
FirstChild.innerHTML ="ilk öge degişti..."

let ulDOM =document.querySelector("Ul#list")
let liDom = document.createElement("li")
liDom.innerHTML ="son sıra  oluşturdumuz oge"
ulDOM.append(liDom)
liDom.innerHTML ="ilk sıraya  oluşturdumuz oge"
ulDOM.prepend(liDom)
