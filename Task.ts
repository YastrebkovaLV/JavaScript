type Colors = 'red' | 'green' | 'blue' | 'yellow' | 'orange' | 'purple';
type Size = 'small' | 'medium' | 'large';

type a = {
  color: Colors;
  size: Size;

};

let product: a = {
  color: 'red',
  size: 'small',

}

console.log(product);
