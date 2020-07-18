const difficulties = document.querySelectorAll('.difficulty')
const box = document.querySelectorAll('.boxes')
const o = document.querySelectorAll('.o')
const x = document.querySelectorAll('.x')
const x1 = document.querySelectorAll('.x1')
const x2 = document.querySelectorAll('.x2')
var endGameBanner = document.querySelector('#endGameBanner')
var isSet = []
var choice
var setDifficulty = 'easy'
var difficulty = difficulties[0].innerText

currentDifficulty()

for(let i = 0; i < 9; i++){
    isSet[i] = false
}
var gameOver = isSet.every((item) => item)

for(let i = 0; i < 9; i++){
    box[i].addEventListener('click', ()=>{
        if(gameOver){
            getWinner()
        }else{
            if(!isSet[i]){
                isSet[i] = true
                x1[i].style.width = "9.5rem",
                x2[i].style.width = "9.5rem"
                
                checkWinner()
                switch(setDifficulty){
                    case 'easy':
                        compMoveEasy()
                        break
                    case 'medium':
                        compMoveMedium()
                        break
                    default:
                        compMoveImpossible()
                }
                
            }
            else{
                box[i].style.backgroundColor = 'red'
                setTimeout(()=> box[i].style.backgroundColor = '' , 500)
            }
        }
            
    })
}

function currentDifficulty(){
    switch(difficulty){
        case 'EASY':
            difficulties[0].style.border = ".3rem solid #000000"
            break
        case 'MEDIUM':
            difficulties[1].style.border = ".3rem solid #000000"
            break
        default:
            difficulties[2].style.border = ".3rem solid #000000"
    }
}

function setToEasy(){

}

function setToMedium(){

}

function setToImpossible(){

}

function compMoveEasy(){
        if(!gameOver){
            choice = Math.floor(Math.random() * 9)
            while (isSet[choice]) {
                choice = Math.floor(Math.random() * 9)
            }
            isSet[choice] = true
            sleep(500).then(() =>{
                o[choice].style.transform = "translateY(0rem)",
                o[choice].style.width = "8rem",
                o[choice].style.height = "8rem",
                o[choice].style.border = "0.5rem solid #2c7a7b"
            })
            checkWinner()
        }
}

function checkWinner(){
    gameOver = isSet.every((item) => item)
    if(gameOver){
        getWinner()
    }
}

function getWinner(){
    endGameBanner.style.display = "flex"
    endGameBanner.style.opacity = "1"
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

difficulties.forEach((item)=>{
    item.addEventListener('click', ()=>{
        difficulty = item.innerText
        switch(difficulty){
            case 'EASY':
                setDifficulty = 'easy'
                difficulties[0].style.border = ".3rem solid #000000"
                difficulties[1].style.border = "none"
                difficulties[2].style.border = "none"
                setToEasy()
                break
            case 'MEDIUM':
                setDifficulty = 'medium'
                difficulties[1].style.border = ".3rem solid #000000"
                difficulties[0].style.border = "none"
                difficulties[2].style.border = "none"
                setToMedium()
                break
            default:
                setDifficulty = 'impossible'
                difficulties[2].style.border = ".3rem solid #000000"
                difficulties[0].style.border = "none"
                difficulties[1].style.border = "none"
                setToImpossible()
        }
    })
})