import {Module} from '../core/module'
import * as utils from '../utils'

export class ClicksModule extends Module {
  
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    this.renderTimer(10);
  }

  renderTimer(timeInSec) {
    if(!document.querySelector('.timer')) {
      this.createTimer(timeInSec);
      this.startCountDown(timeInSec);
    }
  }
    

  createTimer(timeInSec) {
    const timerDiv = document.createElement('div');
    timerDiv.classList.add('timer-clicks');

    const timerHeader = document.createElement('p');
    timerHeader.classList.add('timer-header');
    timerHeader.innerText = `Сделай, как можно больше кликов за ${timeInSec} секунд`;
    timerDiv.append(timerHeader);

    const timerValue = document.createElement('div');
    timerValue.classList.add('timer-value');
    timerValue.innerText = `${timeInSec} сек`;
    timerDiv.append(timerValue);
    document.body.append(timerDiv);
  }

  startCountDown(timeInSec) {
    const countDownTime = new Date().getTime() + timeInSec * 1000;
    const value = document.querySelector('.timer-value');
    let counter = -1;
    document.addEventListener("click", () => {
      console.log('click');
      counter++;
    });

    const interval = setInterval(() => {
      const now = new Date().getTime();
      let distance = countDownTime - now;
      let seconds = Math.floor((distance + 1000) / 1000);
      value.innerText = seconds + 'сек';
      
      if (distance < 0) {
        clearInterval(interval);
        value.innerText = `Время вышло, ты сделал ${counter} ${this.#createEnding(counter)}`;
        setTimeout(() => {utils.deleteDomElement('.timer-clicks')}, 3000);
      }
    }, 1000);  
  }

  #createEnding(num) {
    const strNum = String(num);
    switch(strNum[strNum.length - 1]) {
      case '1':
        return 'клик';
        break;
      case '2' || '3' || '4':
        return 'клика';
        break;
      default:
        return 'кликов';
    }
  }

}