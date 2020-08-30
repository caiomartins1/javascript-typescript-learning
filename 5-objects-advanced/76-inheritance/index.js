function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.increase = function (percentage) {
  this.price += this.price * (percentage / 100);
};

Product.prototype.discount = function (percentage) {
  this.price -= this.price * (percentage / 100);
};

function Shirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}
Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;

// overwriting the increase method
Shirt.prototype.increase = function (value) {
  this.price += value;
};

function Glass(name, price, material) {
  Product.call(this, name, price);
  this.material = material;
}
Glass.prototype = Object.create(Product.prototype);
Glass.prototype.constructor = Glass;

const s1 = new Shirt('blazer', 190, 'black');
s1.increase(10);
console.log(s1);

const g1 = new Glass('darth vader cup', 100, 'plastic');
console.log(g1);
