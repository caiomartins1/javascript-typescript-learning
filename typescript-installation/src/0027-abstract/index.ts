export abstract class Character {
  protected abstract icon: string;
  constructor(
    protected name: string,
    protected ad: number,
    protected hp: number,
  ) {}

  public attack(char: Character): void {
    char.loseHP(this.ad);
  }

  public loseHP(ad: number): void {
    this.hp -= ad;
  }

  public abstract scream(): void;
}

export class Warrior extends Character {
  protected icon = '\u{1F9DD}';

  public scream(): void {
    console.log('SWORD!!');
  }
}
export class Pig extends Character {}

const w1 = new Warrior('SRMACHINE', 500, 3000);
const p1 = new Pig('War Pig', 50, 200);
