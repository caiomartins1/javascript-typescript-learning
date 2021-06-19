export class Database {
  private static db: Database;

  private constructor(
    private host: string,
    private username: string,
    private password: string,
  ) {}

  public connect(): void {
    console.log('Connected on ' + this.host);
  }

  public static createDB(host: string, username: string, password: string) {
    if (Database.db) return Database.db;

    return new Database(host, username, password);
  }
}
