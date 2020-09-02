class Controller {
  constructor(tv) {
    this.tv = tv;
    this.volume = 50;
  }

  volumeUp() {
    this.volume += 2;
  }

  volumeDown() {
    this.volume -= 2;
  }

  // instance method
  changeBattery() {}

  static changeBattery() {
    console.log('Changed Battery');
  }
}

const c1 = new Controller('LG');
c1.volumeUp();
console.log(c1);
Controller.changeBattery();
