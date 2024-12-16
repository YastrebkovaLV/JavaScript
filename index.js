// Ключи с четной длиной (1 задание , цикл for in)

const obj = {
    age : 18,
    name : "Lilia",
    languageProg: "JavaScript",
    email: "lilia@gmail.com",
    password: "123455"
};

for (let key in obj) {
    if (key.length % 2 === 0) {
        console.log(key);
    }
}