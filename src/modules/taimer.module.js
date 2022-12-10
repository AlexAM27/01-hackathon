import {Module} from '../core/module.js'

export class TaimerModule extends Module {
    constructor(type, text) {
       super(type, text)
    }

    trigger() {
        const taimerInput = document.querySelector('.time_user')

        const taimerButton = document.querySelector('.taimer_button')

        const taimerWindow = document.querySelector('.taimer_window')

        
        let seconds
        let minutes
        let hour
        let timer
        let timeMinut

        // const taimerContainer = document.querySelector('.taimer_container')
 
        taimerButton.addEventListener('click', () => {
            
            console.log('click')
            timeMinut = parseInt(taimerInput.value) * 60


            timer = setInterval(function() {
 
            seconds = Math.floor(timeMinut%60)
            minutes = Math.floor(timeMinut/60%60)
            hour = Math.floor(timeMinut/60/60%60)
        
            if (timeMinut <= 0) {
                clearInterval(timer)
                document.querySelector('.taimer').remove()
                const text = document.createElement('h3')
                text.className = 'textAfter'
                text.textContent = 'Ваше время вышло!'
                const taimerContainer = document.querySelector('.taimer_container')
                taimerContainer.append(text)
                

            } else {
                let hourStr = ('0' + hour).slice(-2)
                let minutesStr = ('0' + minutes).slice(-2)
                let secondsStr = ('0' + seconds).slice(-2)

                taimerWindow.innerHTML = hourStr + ':' + minutesStr + ':' + secondsStr
                
            }

            // taimerInput.value = ''
            --timeMinut
        }, 1000)
          
        })

            
       

        

    }
}





