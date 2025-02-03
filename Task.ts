type InfoType = number[] | { id: number } | string[] | {} | null;

type A = {
  age: number | string;
  nick: string;
  info: InfoType;
  photo?: string | null;
};


const a1: A = {
  age:10,
  nick: 'nickk' ,
  info: [1,100],
  photo: 'string',
};