import { LifeAndStrength, ReceiveDamage } from './InterfacesFight';

export default interface SimpleFighter extends
  LifeAndStrength,
  ReceiveDamage {
  attack(enemy: SimpleFighter): void
}