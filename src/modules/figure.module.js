import '../styles.css';
import * as utils from '../utils';
import { Module } from '../core/module';

export class FigureModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    if (document.querySelector('#canvas')) {
      utils.deleteDomElement('#canvas');
    } 

    this.#createFigure();
  }

  #createFigure() {
    document.body.insertAdjacentHTML('beforeend', '<canvas id="canvas"></canvas>');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    const color = utils.getRandomColor();

    switch (utils.random(1, 3)) {
      case 1: 
        this.#figure1(ctx, color);
        break;
      case 2: 
        this.#figure2(ctx, color);
        break;
      case 3: 
        this.#figure3(ctx, color);
        break;
    }
  }

  #figure1(ctx, color) {
    let [x, y] = this.#getCoordinates();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;

    setInterval(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillRect(x++, y++, x, y);
    }, 20);
  }

  #figure2(ctx, color) {
    ctx.fillStyle = color;
    let [x, y] = this.#getCoordinates();
    setInterval(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(x--, y--);
      ctx.lineTo(utils.random(1, document.documentElement.clientWidth), utils.random(1, document.documentElement.clientHeight));
      ctx.lineTo(utils.random(1, document.documentElement.clientWidth), utils.random(1, document.documentElement.clientHeight));
      ctx.fill();
    }, 300);
  }

  #figure3(ctx, color) {
    ctx.fillStyle = color;
    let [x, y] = this.#getCoordinates();

    setInterval(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(x++, y++, x / 4, x, Math.PI * 2, true);
      ctx.fill();
    }, 20);
  }

  #getCoordinates() {
    const x = utils.random(1, document.documentElement.clientWidth);
    const y = utils.random(1, document.documentElement.clientHeight);

    return [x, y];
  }
}