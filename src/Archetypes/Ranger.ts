import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _count = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._count += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Ranger._count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}