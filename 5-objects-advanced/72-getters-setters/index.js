// getters and setters
function Product(name, price, amount) {
  // public property
  this.name = name;
  this.price = price;

  Object.defineProperty(this, 'amount', {
    enumerable: true, // shows the key
    configurable: false, // cant reconfigure the varible and cant delete
    get: function () {
      return amount;
    },
    set: function (value) {
      if (typeof value !== 'number') {
        throw new TypeError('Amount should be a number!');
      }
      amount = value;
    },
  });
}

// getters and setters in factory functions
function createProduct(name) {
  return {
    get name() {
      return name;
    },
    set name(value) {
      // validate value;
      name = value;
    },
  };
}

const p1 = new Product('bike', 30, 3);
console.log(p1);
p1.amount = 4; // 4 will be passed as an argument to the setter
console.log(p1.amount); // calling getter
