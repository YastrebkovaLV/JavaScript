// Вложенные условия (6 задание, условия)

const number = -0.0055;

if (number === 0) {
    console.log("A");
}
else if (number > 1) {
    if (number % 2 === 0) {
        console.log("B");
    }
    else {
        console.log("C");
    }
}

else if (number < -1) {
    if (number % 2 === 0) {
        console.log("D");
    }
    else {
        console.log("E");
    }
}
else {
    const lastNumber = Math.abs(number).toString().slice(-1);
    if (lastNumber === '5') {
        console.log("F");
    }

    else if (lastNumber % 2 === 0) {
        console.log("G");
    }
    else {
        console.log("H");
    }
}