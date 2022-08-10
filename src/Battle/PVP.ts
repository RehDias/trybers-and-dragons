import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player: Fighter, protected player2: Fighter) {
    super(player);
  }

  fight(): number {
    if (this.player.lifePoints !== -1 || this.player2.lifePoints !== -1) {
      for (let i = 0; i < 300; i += 1) {
        this.player.attack(this.player2);
        this.player2.attack(this.player);
      }     
    }

    return super.fight();
  }
}