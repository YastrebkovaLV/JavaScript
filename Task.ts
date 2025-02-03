type MyType = {
  optionalField?: string | null;
};

const object1: MyType = {};
const object2: MyType = { optionalField: null };
const object3: MyType = { optionalField: '' };
const object4: MyType = { optionalField: 'нормальная строка' };

const printField = (obj: MyType) => {
  const fieldValue = obj.optionalField ?? 'не обнаружено';
  console.log(fieldValue,'пусто');
};

printField(object1);
printField(object2);
printField(object3);
printField(object4);


