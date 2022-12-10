import {Module} from '../core/module'

export class TaimerModule extends Module {
    constructor(type, text) {
       super(type, text)
    }

    

    trigger() {

        function setTimerHTML() {
        const taimerContainer = document.createElement('div')
        taimerContainer.className = 'taimer_container' 

        const divTaimer = document.createElement('div')
        divTaimer.className = 'taimer'

        const taimerInput = document.createElement('input')
        taimerInput.placeholder = 'Введите колличество минут...'
        taimerInput.className = 'time_user'

        const taimerButton = document.createElement('button')
        taimerButton.className = 'taimer_button'
        taimerButton.textContent = 'Старт'

        const taimerWindow = document.createElement('div')
        taimerWindow.className = 'taimer_window'

        divTaimer.append(taimerInput, taimerButton, taimerWindow)


        taimerContainer.append(divTaimer)

        document.body.append(taimerContainer)
        }

        

        let seconds
        let minutes
        let hour
        let timer
        let timeMinut

        setTimerHTML()


        const taimerButton = document.querySelector('.taimer_button')

        taimerButton.addEventListener('click', () => {
            const taimerInput =document.querySelector('.time_user')

            
            console.log('click')
            timeMinut = parseInt(taimerInput.value) * 60


            timer = setInterval(function() {
 
            seconds = Math.floor(timeMinut%60)
            minutes = Math.floor(timeMinut/60%60)
            hour = Math.floor(timeMinut/60/60%60)
        
            if (timeMinut <= 0) {
                clearInterval(timer)
                alert('Время вышло!')
                document.querySelector('.taimer').remove()
                
                

            } else {
        

                let hourStr = ('0' + hour).slice(-2)
                let minutesStr = ('0' + minutes).slice(-2)
                let secondsStr = ('0' + seconds).slice(-2)

                const taimerWindow = document.querySelector('.taimer_window')

                taimerWindow.innerHTML = hourStr + ':' + minutesStr + ':' + secondsStr
                
            }

            // taimerInput.value = ''
            --timeMinut
        }, 1000)
          
        })

            
       

       
        

    }
}





