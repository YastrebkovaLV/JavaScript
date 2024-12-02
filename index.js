// Начало строки

const slova = ["привет","ветеринар"];
const vet = "вет";

slova.forEach(slova => {if (slova.startsWith(vet)){
    console.log(`${slova} начинается с "${vet}"`);
} else {
    console.log(`${slova} не начинается с "${vet}"`);
}
});