type Obj = {
  createdAt: Date;
  createdAtISO: string;
};

const myObj: Obj = {
  createdAt: new Date(),
  createdAtISO: new Date().toISOString(),
}

console.log(myObj);

