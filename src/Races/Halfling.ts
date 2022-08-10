import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _count = 0;

  constructor(name: string, dexerity: number) {
    super(name, dexerity);
    this._maxLifePoints = 60;
    Halfling._count += 1;
  }

  protected get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._count;
  }
}