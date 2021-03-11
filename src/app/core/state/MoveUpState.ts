import {State} from './State';
import {Character} from '../Character';

export class MoveUpState extends State {
  constructor(character: Character) {
    super(character);
  }

  handle(): void {
    super.up();
  }

}
