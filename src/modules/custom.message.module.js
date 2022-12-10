import { Module } from '../core/module';
import { dictionary } from '../constants/dictionary';

export class CustomMessageModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    getNumberQuote() {
        const maxNumber = dictionary.length;
        let numberQuote = Math.ceil(Math.random() * maxNumber);
        return numberQuote
    }

    createMessage() {
        const messageQuote = `<div><p>`
    }

    showMessage() {

    }

    trigger()

    toHTML()
}