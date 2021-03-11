import {State} from './State';
import {Character} from '../Character';

export class MoveRightState extends State {
  constructor(character: Character) {
    super(character);
  }

  handle(): void {
    super.right();
  }

}
