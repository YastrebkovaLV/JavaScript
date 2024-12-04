//Базовые операции (1 задания, обьекты)

let obj = {
    name: "Lilia",
    age: 5
};

obj.zodiac = "cancer";

obj["favorite color"] = "orange";

delete obj["favorite color"];
delete obj.zodiac;

obj.dateOfBirth = {
    month: "July",
    year: 2006
};

obj.dateOfBirth.country = "Russia";
obj.dateOfBirth.city = "Moscow";

console.log(obj);