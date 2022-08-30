//Adgang til databasen tillades
const url = "https://babushka-dd8a.restdb.io/rest/menu";
const options = {
    headers: {
        "x-apikey": "600ec2fb1346a1524ff12de4",
    },
};

let data;
let filter = "alle";

document.querySelectorAll("nav button").forEach((knap) => knap.addEventListener("click", filtrerMad));

function filtrerMad() {
    console.log(filtrerMad);
    filter = this.dataset.kategori;
    document.querySelector(".valgt").classList.remove("valgt");
    this.classList.add("valgt");
    vis();
    // header.textContent = this.textContent;
}

//Henter og viser informationen fra databasen
async function hentData() {
    const response = await fetch(url,options);
    data = await response.json();
    console.log(data);
    vis();
}
// Funktion der viser maden i et liste view
function vis() {
    //console.log(json);
    const holder = document.querySelector("#holder");
    const template = document.querySelector("template").content;
    holder.textContent = ""; //Ryder container inden et nyt loop
    //Jeg kloner informartionen specificeret
    data.forEach((item) => {
         //loop igennem json (retter)
        if (filter === item.kategori || filter === "alle") {
            const klon = template.cloneNode(true);
            klon.querySelector("article").addEventListener("click", () => visRet(item));
            klon.querySelector(".foto").src = "medium/" + item.billednavn + "-md.jpg";
            klon.querySelector("h2").textContent = item.navn;
            klon.querySelector(".kortbeskrivelse").textContent = item.kortbeskrivelse;
            klon.querySelector(".pris").textContent = item.pris + " kr.";
            holder.appendChild(klon);
        }
    });
}
//funktion der viser popup single view med yderligere informationer, 
function visRet(retData) {
    console.log("retData");
    const popup = document.querySelector("#popup");
    popup.style.display = "flex";
    popup.querySelector(".foto").src = "medium/" + retData.billednavn + "-md.jpg";
    popup.querySelector("h2").textContent = retData.navn;
    popup.querySelector(".langbeskrivelse").textContent = retData.langbeskrivelse;
    popup.querySelector(".oprindelsesregion").textContent = "Oprindelsesregion: " + retData.oprindelsesregion;
    popup.querySelector(".pris").textContent = "Pris: " + retData.pris + " kr.";
    popup.querySelector("h2").textContent = retData.navn + "";
    popup.addEventListener("click", () => (popup.style.display = "none"));

}

//burgermenu for knapperne i navbar - til responsivt design
function myFunction(x) {
x.classList.toggle("change");
}

const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".main-menu");

function toggleMenu() {
menu.classList.toggle("shown");
const menuShown = menu.classList.contains("shown");

if (menuShown) {
console.log(menuShown);
} else {
console.log(menuShown);
}
}
btn.addEventListener("click", toggleMenu);

hentData();
