import {blue, green, red} from 'chalk';

const aaa = 15;

const result = [];

const color = [red,green, blue];

for (let i = 0; i < aaa; i++)
{

  const color2 = color[i % 3];
  result.push(color2('*'));


}

console.log(result.join(' - '));