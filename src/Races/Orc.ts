import Race from './Race';

export default class Orc extends Race {
  protected _maxLifePoints: number;
  private static _count = 0;

  constructor(name: string, dexerity: number) {
    super(name, dexerity);
    this._maxLifePoints = 74;
    Orc._count += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._count;
  }
}