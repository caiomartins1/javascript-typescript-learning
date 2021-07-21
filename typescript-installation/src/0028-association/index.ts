export class Author {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  set tool(tool: Tool) {
    this._tool = tool;
  }

  get tool(): Tool {
    return this._tool;
  }

  public write(): void {
    if (this.tool === null) {
      console.log('Error: not tool provided');
      return;
    }

    this.tool.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  public write(): void {
    console.log(this.name);
  }
}

export class Pencil extends Tool {
  public write(): void {
    console.log(this.name);
  }
}
