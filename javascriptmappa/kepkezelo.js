//Fotok
const photos = [
    { src: "kepek/corvette.PNG", caption: "Corvette C7" },
    { src: "kepek/amggt.PNG", caption: "Mercedes AMG GT" },
    { src: "kepek/r8.PNG", caption: "Audi R8" },
    { src: "kepek/gt3rs.PNG", caption: "Porsche GT3 RS" }
];
const fokep = document.getElementById("fokep");
const elozoGomb = document.getElementById("elozo");
const kovetkezoGomb = document.getElementById("kovetkezo");
const szamlalo = document.getElementById("counter");
const captionJs = document.getElementById("caption");


let jelenindex = 0;
function frissitKep(index) {
    if (index < 0)  index = photos.length - 1; 
    if (index >= photos.length) index = 0;
    jelenindex = index;
    const photo = photos[jelenindex];
    fokep.src = photo.src;
    fokep.alt = photo.caption;
    captionJs.textContent = photo.caption;
};
elozoGomb.addEventListener("click", function () {
    frissitKep(jelenindex - 1);
});
kovetkezoGomb.addEventListener("click", function () {
    frissitKep(jelenindex + 1);
});
frissitKep(0);