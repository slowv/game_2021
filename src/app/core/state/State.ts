import {Character} from '../Character';

export interface State {
  left(): void;
  up(): void;
  down(): void;
  right(): void;
}

export class State implements State {
  character: Character;

  constructor(character: Character) {
    this.character = character;
  }

  private enter(anim: string, flipX: boolean = false,): void {
    this.character.setFlipX(flipX);
    const key = this.character.anims.currentAnim.key;
    const parts = key.split('_');
    const direction = parts[0];
    this.character.play(`${direction}_${anim}`);
  }

  left(): void {
    this.character.setVelocityX(-this.character.speed);
    this.enter('run', true);
  }

  up(): void {
    this.character.setVelocityY(-this.character.speed);
    this.enter('jump');
  }

  down(): void {
  }

  right(): void {
  }

}
