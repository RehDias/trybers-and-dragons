export default abstract class Race {
  constructor(private _name: string, private _dexterity: number) { }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  public abstract get maxLifePoints(): number;

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}
