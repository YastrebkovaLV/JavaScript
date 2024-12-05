// Базовые операции (1 задание, массивы)

const arr = [10,11,33,-1,22,3,-4]; // мой массив

console.log(arr[0]); // первое значение

console.log(arr[arr.length-1]); // последнее значение

const size = arr.length; // размер

arr.push(400); //новые значения в конце  массива

console,log(arr[arr.length-1]); // последнее значение

arr.shift(); // удалить первое значение

console.log(arr[0]); // первое значение

arr[arr.length-1] = 200; //перезапись на новое значение

arr.push(200); // новое зачение в конце массива

let index = Math.floor(arr.length / 2); // Индекс
console.log(arr[index]);

arr[0] = "Я не знаю";       // Перезапись на новое значение
arr[arr.length-1] = "Я не знаю";
arr[index] = "Я не знаю";

console.log(arr.indexOf("Я не знаю")); // Первый и последний индекс
console.log(arr.lastIndexOf("Я не знаю"));

console.log(arr.includes(1)); // есть ли один в массиве

console.log(arr.length); // длина

console.log(arr.length - size); // разница в размере

let obj = { name: 'Lilia',nick: []}; // это обьект

arr.push(obj); // обьект в массиве

arr[arr.length-1].nick = []; // новое поле с пустым массивом

arr[arr.length-1].nick.push('nick1');
arr[arr.length-1].nick.push('nick2'); // новое значение

console.log(arr); // вывод массива