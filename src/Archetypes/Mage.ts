import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _count = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._count += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Mage._count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}