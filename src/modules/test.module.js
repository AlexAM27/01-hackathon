import {Module} from '../core/module'

export class TestModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    console.log(`This is ${this.type}`);
  }
  
  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
}





