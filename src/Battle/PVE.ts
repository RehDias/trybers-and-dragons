import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export type Player2 = Array<Monster | Character | Fighter | SimpleFighter>;

export default class PVE extends Battle {
  constructor(player1: Character | Fighter, protected player2: Player2) {
    super(player1);
  }

  fight(): number {
    this.player2.forEach((p) => {
      if (this.player.lifePoints !== -1 || p.lifePoints !== -1) {
        for (let i = 0; i < 300; i += 1) {
          this.player.attack(p);
          p.attack(this.player);
        }     
      }
    });
    return super.fight();
  }
}