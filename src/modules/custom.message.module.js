import { Module } from '../core/module';
import { DICTIONARY } from '../constants/dictionary';
import * as utils from '../utils';

export class CustomMessageModule extends Module {

  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    if (!document.querySelector(".quote")) {
      this.#createMessage();
      this.#showMessage();
    }
  }

  #createMessage() {
    const numberQuote = utils.random(0, DICTIONARY.length - 1);
    const objQuote = DICTIONARY[numberQuote];

    const messageQuote = document.createElement("div");
    messageQuote.className = "quote";

    const quote = document.createElement("p");
    quote.innerText = objQuote.text;

    const autorQuote = document.createElement("p");
    autorQuote.innerText = objQuote.autor;

    messageQuote.append(quote, autorQuote);

    document.body.append(messageQuote);
  }

  #showMessage() {
      setTimeout(() => {
          utils.deleteDomElement('.quote')
      }, 5000);
  }
}