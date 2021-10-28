console.log("Merhaba Dünya")

//JS type safe degildir.
let dolarBugun =9.30
let dolarDun = 9.20
{

    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Kredisi","Kamu Kredisi","Ozel kredi"]
console.log("<ul>")

for (let i= 0; i < konutKredileri.length;i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("</ul>")
{/* <ul>
    <li>Konut Kredisi</li>
    <li>Emlak Kredisi</li>
    <li>Kamu Kredisi</li>
    </ul> */

}

console.log(konutKredileri)