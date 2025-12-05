//Ár kalkulátor

const gomb = document.getElementById("szamol");
const jsAuto = document.getElementById("auto");
const jsCsomag = document.getElementById("csomag");
const jsPalya = document.getElementById("palya");
const jsKisero = document.getElementById("kisero");
const jsKamera = document.getElementById("kamera");
const jsKedvezmeny = document.getElementById("kedvezmeny");
const eredmeny = document.getElementById("kalkulacio");


gomb.addEventListener("click", function () {
    const autoNm = Number(jsAuto.value);
    const csomagNm = Number(jsCsomag.value);
    const palyaNm = Number(jsPalya.value);
    const kiseroNm = Number(jsKisero.value);
    const kameraNm = Number(jsKamera.value);
    const kedvezmenyNm = Number(jsKedvezmeny.value);


    let osszeg = (autoNm + (csomagNm * palyaNm) + kiseroNm + kameraNm) * kedvezmenyNm



    eredmeny.textContent = "A választott csomag értéke: " + osszeg + " forint.";
    eredmeny.style.display = "block";
});