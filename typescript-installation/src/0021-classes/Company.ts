export class Company {
  public readonly name: string;
  private readonly sponsors: Sponsor[] = [];
  protected readonly CNPJ: string;

  constructor(name: string, CNPJ: string) {
    this.name = name;
    this.CNPJ = CNPJ;
  }

  public addSponsor(s: Sponsor): void {
    this.sponsors.push(s);
  }

  public displaySponsors(): void {
    for (const s of this.sponsors) {
      console.log(s);
    }
  }
}

export class Sponsor {
  constructor(public readonly name: string, public readonly lastName: string) {}
}

const c1 = new Company('c1', 'a');
const c2 = new Company('c2', 'b');

const s1 = new Sponsor('s1', 's11');
const s2 = new Sponsor('s2', 's22');

c1.addSponsor(s1);
c1.addSponsor(s2);
