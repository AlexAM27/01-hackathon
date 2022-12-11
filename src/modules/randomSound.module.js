import '../styles.css';
import { random } from '../utils';
import { Module } from '../core/module';

export class RandomSound extends Module {
    constructor(type, text) {
        super(type, text);
    };

    trigger() {

        let x = [
            "https://zvukogram.com/index.php?r=site/download&id=73762/zvuk1.mp3",
            "https://zvukogram.com/index.php?r=site/download&id=32638/zvuk-aplodismentov-korotkiy-5-sek-33919.mp3",
            "https://zvukogram.com/index.php?r=site/download&id=28949/zvuk-bonusa-iz-kompyuternoy-igryi-30121.mp3",
            "https://zvukogram.com/index.php?r=site/download&id=47231/poluchenie-bonusa.mp3",
            "https://zvukogram.com/index.php?r=site/download&id=76330/brosok-odnoy-monetki-v-obschuyu-kuchu.mp3",
            "https://zvukogram.com/index.php?r=site/download&id=73778/chto-to-jeleznoe-upalo-na-pol.mp3",
            "https://zvukogram.com/index.php?r=site/download&id=78782/krik-ura-na-raznyih-yazyikah.mp3",
            "https://zvukogram.com/index.php?r=site/download&id=43726/game-won.mp3",
            "https://zvukogram.com/index.php?r=site/download&id=83701/pobeda.mp3",
            "https://zvukogram.com/index.php?r=site/download&id=79499/dyihanie-vetra-vosklitsanie-gromkiy.mp3",
            "https://zvukogram.com/index.php?r=site/download&id=75048/zvonkogolosyiy-petuh.mp3",
            "https://zvukogram.com/index.php?r=site/download&id=83811/korotkiy-zvuk-vyistrela-iz-blastera.mp3",
            "https://zvukogram.com/index.php?r=site/download&id=44558/mujskoy-golos-dlya-avtootvetchika.mp3",
            "https://zvukogram.com/index.php?r=site/download&id=44554/avtootvetchik-na-angliyskom-yazyike.mp3",
            "https://zvukogram.com/index.php?r=site/download&id=77792/oshibka-v-kompyutere.mp3",
        ];

        function soundBegin() {
            let audio = new Audio();
            audio.src = x[random(0, 15)];
            audio.autoplay = true;
        };
        soundBegin();
    };
};