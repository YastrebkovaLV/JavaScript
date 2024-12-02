// Деление яблок
let apples = 10;
let people = 3;
let Person = Math.floor(apples / people);
let Apple = apples % people;

console.log(`Яблок : ${apples}`);
console.log(` Человек : ${people}`);
console.log(` Каждый человек получит : ${Person}`);
console.log(` Остается : ${Apple}`);
