
const form = document.getElementById("teljesform");

//Elementek

const teljesNev = document.getElementById("teljesnev");
const email = document.getElementById("email");
const jelszo = document.getElementById("password");
const jogsiVan = document.getElementById("jogsivan");
const feltetelek = document.getElementById("terms");

//Error uzenetek
const errorNev = document.getElementById("error-nev");
const errorEmail = document.getElementById("error-email");
const errorJelszo = document.getElementById("error-pass");
const errorJogsi = document.getElementById("error-jogsi");
const errorFeltetel = document.getElementById("error-nyil");

form.addEventListener("submit", function(event) {
    let isValid = true;

    //regi hibauzenetek torlese
    const errors = document.querySelectorAll(".error-msg");
    errors.forEach(el => el.textContent = '');
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(el => el.classList.remove('input-error'));

    if (teljesNev.value.trim() === "") {
        errorNev.innerText = "A név megadása kötelező!";
        teljesNev.classList.add("input-error");
        isValid = false;
    }
    
    if (email.value.trim() === "") {
        errorEmail.innerText = "Az emailcím megadása kötelező!";
        email.classList.add("input-error");
        isValid = false;
    }
    
    if (jelszo.value.length < 8) {
        errorJelszo.innerText = "A jelszónak legalább 8 karakter hosszúnak kell lennie!";
        jelszo.classList.add("input-error");
        isValid = false;
    }

    if (!jogsiVan.checked) {
        errorJogsi.innerText = "Jogosítvány nélkül nem lehet élményvezetni!";
        isValid = false;
    }

    if (!feltetelek.checked) {
        errorFeltetel.innerText = "Az ÁSZF-et el kell fogadni a regisztrációhoz!";
        isValid = false;
    }
    // kuldes megallitasa ha rossz
    if (!isValid) {
        event.preventDefault(); 
        console.log("hiba");
    } else {
        console.log("Minden fullos mehet a szerverre");
    }
    
});


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

