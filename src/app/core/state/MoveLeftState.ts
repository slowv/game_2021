import {State} from './State';
import {Character} from '../Character';

export class MoveLeftState extends State {
  constructor(character: Character) {
    super(character);
  }

  handle(): void {
    this.left();
  }

}
