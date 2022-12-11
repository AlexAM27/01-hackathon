import { Module } from '../core/module'
import * as utils from '../utils'

export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger(){
        const color = utils.getRandomColor();
        document.body.style.background = color;
    }

}