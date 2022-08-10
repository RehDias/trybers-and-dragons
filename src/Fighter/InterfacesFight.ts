export interface LifeAndStrength {
  lifePoints: number
  strength: number
}

export interface ReceiveDamage {
  receiveDamage(attackPoints: number): number
}

export interface Levelup {
  levelUp(): void
}