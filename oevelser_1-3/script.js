//Øvelse 1//

const snaps = document.querySelector("#snaps");
snaps.addEventListener("click",funktionDerKaldesVedKlik);

document.querySelector("#faxe").addEventListener("click",funktionDerKaldesVedKlik);
document.querySelector("#cola").addEventListener("click",funktionDerKaldesVedKlik);
document.querySelector("#øl").addEventListener("click",funktionDerKaldesVedKlik);

function funktionDerKaldesVedKlik() {
    console.log(this.alt);
    if (this.alt == "øl" || this.alt == "snaps") {
        console.log("Indeholder alkohol");
    } else {
        console.log("Alkoholfri");
    }
}


