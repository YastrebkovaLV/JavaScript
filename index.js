// Две строки (5 задание,условия)

const stroka1 = " я не знаю,что писать ";
const stroka2 = " у меня кончились идеи ";

// Совпадение первых символов

if (stroka1.charAt(0) === stroka2.charAt(0)) {
    console.log("Первые символы совпадают");
}
else {
    console.log(" Не совпадают ");
}

// Совпадения последних символов

if (stroka1.charAt(stroka1.length - 1) === stroka2.charAt(stroka1.length - 1)) {
    console.log("Последние символы совпадают ");
}
else {
    console.log("Не совпадают");
}