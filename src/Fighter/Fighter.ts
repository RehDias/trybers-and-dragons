import Energy from '../Energy';
import {
  LifeAndStrength, 
  ReceiveDamage,
  Levelup,
} from './InterfacesFight';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends
  LifeAndStrength,
  ReceiveDamage,
  Levelup {
  defense: number
  energy?: Energy
  attack(enemy: Fighter | SimpleFighter): void
  special(enemy?: Fighter): void | undefined
}