/**
 * Few important objects methods:
 *  -> Object.assign: copies the content from 1 object to another (can be substituted by spread opeator)
 *  -> Object.keys: returns an array with all object keys
 *  -> Object.values: returns an array with all object values
 *  -> Object.entries: returns an array of arrays that includes a pair key/value
 *  -> Object.freeze: dont let the object change
 *  -> Object.defineProperty
 *  -> Object.defineProperties
 *  -> Object.getOwnPropertyDescriptor: returns the description of an property
 */

const product = {
  name: 'Bike',
  price: 70,
};

const product2 = Object.assign({}, product); // const product2 = { ...product }
product2.name = 'Skate';
console.log('product ->', product);
console.log('product2 ->', product2);
console.log('Object.keys ->', Object.keys(product));
console.log('Object.values ->', Object.values(product));
console.log('Object.entries ->', Object.entries(product));

Object.freeze(product2);
product2.name = 'any name that wont be changed';
console.log('Object.freeze ->', product2.name);

console.log(
  'Object.getOwnPropertyDescriptor ->',
  Object.getOwnPropertyDescriptor(product, 'name')
);
