export class Car {
  private readonly engine = new Engine();

  on(): void {
    this.engine.on();
  }
}

export class Engine {
  on(): void {
    console.log('Engine is on...');
  }
  off(): void {
    console.log('Engine is off...');
  }
  accelerate(): void {
    console.log('Engine is accelerating...');
  }
}

const car = new Car();
