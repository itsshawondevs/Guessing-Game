let gameImg = document.querySelector('#game')
let winnerImg = document.querySelector('#winner')

let player = document.querySelector('.player')
let chance = document.querySelector('.chance')
let chance_area = document.querySelector('.chance_area')

let input = document.querySelector('.input')
let input2 = document.querySelector('.input2')
let err = document.querySelector('.err')

let startBtn = document.querySelector('#start_btn')
let guessBtn = document.querySelector('#guess_btn')
let againBtn = document.querySelector('#again_btn')

let storeNumber = ''
let chanceRemain = 5
let regex = 'NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)'

startBtn.addEventListener('click',function(){
    if(!input.value == ''){
        if(!input.value.match(regex) ){
            if(input.value>=0 && input.value<=10){
                err.innerHTML = ''
                player.innerHTML = 'second player'
                input.style.display = 'none'
                input2.style.display = 'block'
                startBtn.style.display = 'none'
                guessBtn.style.display = 'block'
                chance_area.style.display = 'block'
                storeNumber = input.value
            }else{
                err.innerHTML = '*please enter number between 0 to 10'
            }
        }else{
            err.innerHTML = '*please enter number'
        }
    }else{
        err.innerHTML = '*please enter number & start the game'
    }
})

guessBtn.addEventListener('click',function(){
    if(!input2.value == ''){
        if(!input2.value.match(regex) ){
            if(input2.value>=0 && input2.value<=10){
                if(chanceRemain !== 1){
                    chanceRemain --
                    if(input2.value.match(storeNumber)){
                        err.innerHTML = ''
                        gameImg.style.display = 'none'
                        winnerImg.style.display = 'block'
                        player.innerHTML = "Congratulation's!! You are Winner"
                        chance_area.style.display = 'none'
                        input2.style.display = 'none'
                        guessBtn.style.display = 'none'
                        againBtn.style.display = 'block'
                    }else{
                        err.innerHTML = '*Wrong Number Please try again'
                        chance.innerHTML = chanceRemain
                    }
                }else{
                    err.innerHTML = ''
                    gameImg.style.display = 'none'
                    winnerImg.style.display = 'block'
                    player.innerHTML = 'First Player is Winner'
                    chance_area.style.display = 'none'
                    input2.style.display = 'none'
                    guessBtn.style.display = 'none'
                    againBtn.style.display = 'block'
                }
            }else{
                err.innerHTML = '*please enter number between 0 to 10'
            }
        }else{
            err.innerHTML = '*please enter number'
        }
    }else{
        err.innerHTML = "*please enter number & don't use text"
    }
})

againBtn.addEventListener('click',function(){
    location.reload()
})