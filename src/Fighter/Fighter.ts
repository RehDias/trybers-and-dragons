import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number
  strength: number
  defense: number
  energy?: Energy
  attack(enemy: Fighter): void
  special(enemy?: Fighter): void | undefined
  levelUp(): void
  receiveDamage(attackPoints: number): number
}