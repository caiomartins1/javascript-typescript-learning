class EletronicDevice {
  constructor(name) {
    this.name = name;
    this.isOn = false;
  }

  on() {
    if (this.isOn) return;
    this.isOn = true;
  }

  of() {
    if (!this.isOn) return;
    this.isOn = false;
  }
}

class Smartphone extends EletronicDevice {
  constructor(name, brand) {
    super(name);
    this.brand = brand;
    this.battery = 5;
  }

  on() {
    if (this.battery <= 5) return;
    this.isOn = true;
  }
}

const s10 = new Smartphone('S10', 'Samsug');
console.log(s10);
