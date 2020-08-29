function Product(name, price, amount) {
  // public property
  this.name = name;
  this.price = price;

  Object.defineProperty(this, 'amount', {
    enumerable: true, // shows the key
    value: amount, // sets the value to 'amount' argument
    writable: false, // we cant change the value
    configurable: false, // cant reconfigure the varible and cant delete
  });

  // Object.defineProperties(this, {
  //   name: {
  //     enumerable: true, // shows the key
  //     value: name, // sets the value to 'name' argument
  //     writable: false, // we cant change the value
  //     configurable: false, // cant reconfigure the varible and cant delete
  //   },
  //   price: {
  //     enumerable: true, // shows the key
  //     value: price, // sets the value to 'price' argument
  //     writable: false, // we cant change the value
  //     configurable: false, // cant reconfigure the varible and cant delete
  //   }
  // })
}

// if a property is public we can access like that:
const p1 = new Product('Bike', 30, 3);
console.log(p1.name);

//
p1.amount = 500000;
console.log(p1);
delete p1.amount;
console.log(p1);

// Object.keys
console.log(Object.keys(p1)); // if enumerable is set to false, amount wont be included inside keys array
