// Поиск вхождения слова

const milk = " Молоко ";
const y = milk.includes("у");
const m = milk.includes("м");

if (y || m) {
    console.log('Слово содержит букву "у" или букву "м".');

} else {
    console.log(`Слово не содержит букву "у" или букву "м".`);
}