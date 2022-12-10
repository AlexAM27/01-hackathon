import '../styles.css'
import { random } from '../utils'
import { Module } from '../core/module'

export class FigureModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        let findCanvas = document.querySelector('#canvas')
        if (findCanvas) {
            findCanvas.remove()
        }
        document.body.insertAdjacentHTML('beforeend', '<canvas id="canvas"></canvas>')
        let x = random(1, document.documentElement.clientWidth)
        let y = random(1, document.documentElement.clientHeight)
        let color = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`

        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d')
        canvas.width = document.documentElement.clientWidth
        canvas.height = document.documentElement.clientHeight

        function figure1() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = color
            if (x && y >= (document.documentElement.clientWidth / 2)) {
                letsetInterval(function () {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.fillRect(x--, y--, x, y);
                }, 20);
            } else {
                setInterval(function () {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.fillRect(x++, y++, x, y);
                }, 20);
            }
        }

        function figure2() {
            ctx.fillStyle = color
            setInterval(function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.moveTo(x--, y--);
                ctx.lineTo(random(1, document.documentElement.clientWidth), random(1, document.documentElement.clientHeight));
                ctx.lineTo(random(1, document.documentElement.clientWidth), random(1, document.documentElement.clientHeight));
                ctx.fill();
            }, 200);
        }

        function figure3() {
            ctx.fillStyle = color
            if (x && y > (document.documentElement.clientWidth / 2)) {
                setInterval(function () {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.beginPath();
                    ctx.arc(x--, y--, x / 4, x, Math.PI * 2, true);
                    ctx.fill();
                }, 20);
            } else {
                setInterval(function () {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.beginPath();
                    ctx.arc(x++, y++, x / 4, x, Math.PI * 2, true);
                    ctx.fill();
                }, 20);
            }
        }

        switch (random(1, 3)) {
            case 1: figure1()
                break
            case 2: figure2()
                break
            case 3: figure3()
                break
        }
    }
}

