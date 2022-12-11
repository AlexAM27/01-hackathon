import '../styles.css';
import { random } from '../utils';
import { Module } from '../core/module';
import { SOUND } from '../constants/sounds';

export class RandomSound extends Module {
  
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    this.#soundBegin();
  }

  #soundBegin() {
    const audio = new Audio();
    audio.src = SOUND[random(0, 15)];
    audio.autoplay = true;
  }
}
