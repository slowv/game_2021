import {Character} from '../Character';
import {State} from './State';

export class IdleState implements State {
  character: Character;

  constructor(character: Character) {
    this.character = character;
  }

  enter(): void {
    this.character.setVelocity(0, 0);
    const key = this.character.anims.currentAnim.key;
    const parts = key.split('_');
    const direction = parts[0];
    this.character.play(`${direction}_idle`)
  }
}
