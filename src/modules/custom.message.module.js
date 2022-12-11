import { Module } from '../core/module';
import { dictionary } from '../constants/dictionary';
import { random } from '../utils'


export class CustomMessageModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    createMessage() {
        const numberQuote = random(0, dictionary.length - 1);
        const objQuote = dictionary[numberQuote];

        const messageQuote = document.createElement("div");
        messageQuote.className = "quote";

        const quote = document.createElement("p");
        quote.innerText = objQuote.text;

        const autorQuote = document.createElement("p");
        autorQuote.innerText = objQuote.autor;

        messageQuote.append(quote, autorQuote);

        document.body.append(messageQuote);
    }

    showMessage() {
        const thereQuote = document.querySelector(".quote");
        setTimeout(() => {
            thereQuote.remove();
        }, 5000);
    }

    trigger() {
        if (!document.querySelector(".quote")) {
            this.createMessage();
            this.showMessage();
        }
    }
}