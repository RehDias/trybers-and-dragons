import Energy from '../Energy';
import {
  LifeAndStrength, 
  ReceiveDamage,
  Levelup,
} from './InterfacesFight';

export default interface Fighter extends
  LifeAndStrength,
  ReceiveDamage,
  Levelup {
  defense: number
  energy?: Energy
  attack(enemy: Fighter): void
  special(enemy?: Fighter): void | undefined
}