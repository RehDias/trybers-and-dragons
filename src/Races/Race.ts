export default abstract class Race {
  private static _count = 0;
  abstract get maxLifePoints(): number;

  constructor(private _name: string, private _dexterity: number) {
    Race._count += 1;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}
