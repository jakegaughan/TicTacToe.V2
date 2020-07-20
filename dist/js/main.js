const difficulties = document.querySelectorAll('.difficulty')
const resetBoardBtn = document.querySelector('#resetBoard')
const box = document.querySelectorAll('.boxes')
const o = document.querySelectorAll('.o')
const x = document.querySelectorAll('.x')
const x1 = document.querySelectorAll('.x1')
const x2 = document.querySelectorAll('.x2')
var drawGameBanner = document.querySelector('#drawGameBanner')
var compWinningGameBanner = document.querySelector('#compWinningGameBanner')
var userWinningGameBanner = document.querySelector('#userWinningGameBanner')
var isSet = []
var XSet = []
var OSet = []
var choice, winner
var count = 1
var whichMove = 1
var setDifficulty = 'easy'
var difficulty = difficulties[0].innerText
difficulties[0].style.border = ".3rem solid #000000"

for(let i = 0; i < 9; i++){
    isSet[i] = false
    OSet[i] = false
    XSet[i] = false
}
var gameOver = isSet.every((item) => item)

for(let i = 0; i < 9; i++){
    box[i].addEventListener('click', ()=>{
        if(gameOver){
            getWinner()
        }else{
            if(!isSet[i]){
                isSet[i] = true
                XSet[i] = true
                x1[i].style.width = "9.5rem",
                x2[i].style.width = "9.5rem"
                
                checkWinner()
                if(!gameOver){
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
            }
            else{
                box[i].style.backgroundColor = 'red'
                setTimeout(()=> box[i].style.backgroundColor = '' , 400)
            }
        }
            
    })
}

function markO(a){
    if(isSet[a]){
        return
    }else{
        isSet[a] = true
        OSet[a] = true
        sleep(400).then(() =>{
            o[a].style.transform = "translateY(0rem)",
            o[a].style.width = "8rem",
            o[a].style.height = "8rem",
            o[a].style.border = "0.5rem solid #2c7a7b"
        })
    }
}

function checkWinAvailable(){

}

function compMoveEasy(){
    choice = Math.floor(Math.random() * 9)
    while (isSet[choice]) {
        choice = Math.floor(Math.random() * 9)
    }
    markO(choice)
    checkWinner()
}

function compMoveMedium(){
    if(count % 2 === 0){
        compMoveEasy()
    }else{
        compMoveImpossible()
    }
    count++
}

function compMoveImpossible(){
    switch(whichMove){
        case 1:
            if(XSet[0] || XSet[2] || XSet[6] || XSet[8]){
                markO(4)
            }else if(XSet[1] || XSet[3]){
                markO(0)
            }else if(XSet[5] || XSet[7]){
                markO(8)
            }else{
                markO(6)
            }
            break

        case 2:
            if(OSet[4]){
                if(XSet[0] && XSet[2]){
                    markO(1)
                }else if((XSet[2] && XSet[8]) || (XSet[0] && XSet[7])){
                    markO(5)
                }else if((XSet[2] && XSet[5]) || (XSet[6] && XSet[7])){
                    markO(8)
                }else if((XSet[6] && XSet[3])|| (XSet[2] && XSet[1])){
                    markO(0)
                }else if((XSet[8] && XSet[5]) || (XSet[0] && XSet[1])){
                    markO(2)
                }else if((XSet[0] && XSet[8]) || (XSet[2] && XSet[6]) || (XSet[0] && XSet[6]) || (XSet[2] && XSet[7])){
                    markO(3)
                }else if((XSet[8] && XSet[7]) || (XSet[0] && XSet[3]) || (XSet[2] && XSet[6]) || (XSet[0] && XSet[5]) || (XSet[0] && XSet[5])){
                    markO(6)
                }else{
                    markO(7)
                }
            }else if(OSet[0] && XSet[1]){
                if(XSet[7] || XSet[6]){
                    markO(4)
                }else if(XSet[2] || XSet[5]){
                    markO(6)
                }else{
                    markO(7)
                }
            }else if(OSet[0] && XSet[3]){
                if(XSet[5] || XSet[2]){
                    markO(4)
                }else if(XSet[6] || XSet[7]){
                    markO(2)
                }else{
                    markO(5)
                }
            }else if(OSet[8] && XSet[7]){
                if(XSet[1] || XSet[2]){
                    markO(4)
                }else if(XSet[6] || XSet[3]){
                    markO(2)
                }else{
                    markO(1)
                }
            }else if(OSet[8] && XSet[5]){
                if(XSet[2] || XSet[8]){
                    markO(0)
                }else if(XSet[1]){
                    markO(6)
                }else if(XSet[4] || XSet[0]){
                    markO(3)
                }else if(XSet[3] || XSet[6]){
                    markO(4)
                }else{
                    markO(1)
                }
            }else{
                if(XSet[0]){
                    markO(8)
                }else if(XSet[1]){
                    markO(7)
                }else if(XSet[3]){
                    markO(5)
                }else if(XSet[5]){
                    markO(3)
                }else if(XSet[7]){
                    markO(1)
                }else{
                    markO(0)
                }
            }
            break

        case 3:
            if(OSet[4]){
                if((OSet[1] && !isSet[7]) || (OSet[5] && XSet[3]) || (OSet[0] && XSet[6] && XSet[8])){
                    markO(7)
                }else if((OSet[3] && !isSet[5]) || (OSet[7] && XSet[1]) || (OSet[1] && XSet[7]) || (OSet[0] && XSet[2] && XSet[8])){
                    markO(5)
                }else if(OSet[7] && !isSet[1]){
                    markO(1)
                }else if((OSet[2] && !isSet[6]) || (OSet[0] && XSet[7] && XSet[8]) || (OSet[8] && XSet[0] && XSet[3])){
                    markO(6)
                }else if((OSet[6] && !isSet[2]) || (OSet[3] && XSet[8]) || (OSet[0] && XSet[8] && XSet[5])){
                    markO(2)
                }else if((OSet[5] && !isSet[3]) || (OSet[8] && XSet[0] && XSet[6])){
                    markO(3)
                }else if(OSet[8] && !isSet[0]){
                    markO(0)
                }else if(OSet[2] && XSet[6]){
                    markO(3)
                }else{
                    markO(8)
                }
            }else if(OSet[6] && XSet[4]){
                if((OSet[0] && !isSet[3]) || (OSet[1] && XSet[5])){
                    markO(3)
                }else if((OSet[3] && !isSet[0]) || (OSet[7] && XSet[8]) || (OSet[5] && XSet[8]) || (OSet[5] && XSet[2]) || (OSet[1] && XSet[8])){
                    markO(0)
                }else if((OSet[7] && !isSet[8]) || (OSet[3] && XSet[0]) || (OSet[5] && XSet[0]) || (OSet[1] && XSet[0]) || (OSet[1] && XSet[2])){
                    markO(8)
                }else if((OSet[8] && !isSet[7]) || (OSet[5] && XSet[1])){
                    markO(7)
                }else if((OSet[0] && XSet[3]) || (OSet[1] && XSet[3])){
                    markO(5)
                }else if((OSet[8] && XSet[7]) || (OSet[5] && XSet[7])){
                    markO(1)
                }
            }else if(OSet[0]){
                if((OSet[6] && XSet[3] && XSet[2]) || (OSet[7] && XSet[2] && XSet[3]) || (OSet[2] && XSet[1] && XSet[6])){
                    markO(8)
                }else if((OSet[6] && !isSet[3]) || (OSet[7] && XSet[4] && XSet[5])){
                    markO(3)
                }else if((OSet[2] && !isSet[1]) || (OSet[5] && XSet[7] && XSet[4])){
                    markO(1)
                }else if((OSet[7] && XSet[6] && XSet[3] && XSet[1]) || (OSet[7] && XSet[4] && XSet[3]) || (OSet[7] && XSet[2] && XSet[8])){
                    markO(5)
                }else if((OSet[6] && XSet[3] && XSet[1] && XSet[5]) || (OSet[7] && XSet[3] && XSet[5]) || (OSet[2] && XSet[1] && XSet[7]) || (OSet[8] && !isSet[4])){
                    markO(4)
                }else if((OSet[7] && XSet[2] && XSet[4]) || (OSet[5] && XSet[2] && XSet[4]) || (OSet[8] && XSet[4] && XSet[2])){
                    markO(6)
                }else if((OSet[4] && XSet[6] && XSet[8]) || (OSet[5] && XSet[8] && XSet[6])){
                    markO(7)
                }else{
                    markO(2)
                }
            }else if(OSet[8]){
                if((OSet[3] && XSet[0] && XSet[6]) || (OSet[3] && XSet[6] && XSet[4]) || (OSet[3] && XSet[0] && XSet[5] && XSet[7]) || (OSet[3] && XSet[1] && XSet[0]) || (OSet[1] && XSet[4] && XSet[6])){
                    markO(2)
                }else if((OSet[6] && !isSet[7])){
                    markO(7)
                }else if((OSet[6] && XSet[7] && XSet[1]) || (OSet[1] && XSet[3] && XSet[5] && XSet[7]) || OSet[2] && XSet[3] && XSet[7] && XSet[5]){
                    markO(4)
                }else if((OSet[3] && XSet[4] && XSet[7])){
                    markO(1)
                }else if((OSet[3] && XSet[4] && XSet[2]) || (OSet[1] && XSet[2] && XSet[4]) || (OSet[1] && XSet[0] && XSet[4]) || (OSet[1] && XSet[0] && XSet[2]) || (OSet[1] && XSet[0] && XSet[3]) || (OSet[1] && XSet[0] && XSet[7] && XSet[5])){
                    markO(6)
                }else if((OSet[1] && XSet[2] && XSet[5] && XSet[7]) || (OSet[1] && XSet[4] && XSet[5] && XSet[7]) || (OSet[1] && XSet[5] && XSet[6] && XSet[7])){
                    markO(3)
                }else if((OSet[2] && XSet[5] && XSet[6] && XSet[7])){
                    markO(0)
                }else{
                    markO(5)
                }
            }
            break

        default:
            if(!isSet[0] && ((OSet[1] && OSet[2]) || (OSet[3] && OSet[6]) || (OSet[4] && OSet[8]) || (XSet[1] && XSet[2]) || (XSet[3] && XSet[6]) || (XSet[4] && XSet[8]))){
                markO(0)
            }else if(!isSet[1] && ((OSet[1] && OSet[2]) || (OSet[3] && OSet[6]) || (OSet[4] && OSet[8]) || (XSet[1] && XSet[2]) || (XSet[3] && XSet[6]) || (XSet[4] && XSet[8]))){
                markO(1)
            }else if(!isSet[2] && ((OSet[1] && OSet[2]) || (OSet[3] && OSet[6]) || (OSet[4] && OSet[8]) || (XSet[1] && XSet[2]) || (XSet[3] && XSet[6]) || (XSet[4] && XSet[8]))){
                markO(2)
            }else if(!isSet[3] && ((OSet[1] && OSet[2]) || (OSet[3] && OSet[6]) || (OSet[4] && OSet[8]) || (XSet[1] && XSet[2]) || (XSet[3] && XSet[6]) || (XSet[4] && XSet[8]))){
                markO(3)
            }else if(!isSet[4] && ((OSet[1] && OSet[2]) || (OSet[3] && OSet[6]) || (OSet[4] && OSet[8]) || (XSet[1] && XSet[2]) || (XSet[3] && XSet[6]) || (XSet[4] && XSet[8]))){
                markO(4)
            }else if(!isSet[5] && ((OSet[1] && OSet[2]) || (OSet[3] && OSet[6]) || (OSet[4] && OSet[8]) || (XSet[1] && XSet[2]) || (XSet[3] && XSet[6]) || (XSet[4] && XSet[8]))){
                markO(5)
            }else if(!isSet[6] && ((OSet[1] && OSet[2]) || (OSet[3] && OSet[6]) || (OSet[4] && OSet[8]) || (XSet[1] && XSet[2]) || (XSet[3] && XSet[6]) || (XSet[4] && XSet[8]))){
                markO(6)
            }else if(!isSet[7] && ((OSet[1] && OSet[2]) || (OSet[3] && OSet[6]) || (OSet[4] && OSet[8]) || (XSet[1] && XSet[2]) || (XSet[3] && XSet[6]) || (XSet[4] && XSet[8]))){
                markO(7)
            }else{
                markO(8)
            }
    }
    whichMove++
    checkWinner()
}

function checkWinner(){
    gameOver = isSet.every((item) => item)

    if(XSet[0] === XSet[1] && XSet[0] === XSet[2] && XSet[0] !== false){
        gameOver = true
        winner = 'user'
    }else if(XSet[3] === XSet[4] && XSet[3] === XSet[5] && XSet[3] !== false){
        gameOver = true
        winner = 'user'
    }
    else if(XSet[6] === XSet[7] && XSet[6] === XSet[8] && XSet[6] !== false){
        gameOver = true
        winner = 'user'
    }
    else if(XSet[0] === XSet[3] && XSet[0] === XSet[6] && XSet[0] !== false){
        gameOver = true
        winner = 'user'
    }
    else if(XSet[1] === XSet[4] && XSet[1] === XSet[7] && XSet[1] !== false){
        gameOver = true
        winner = 'user'
    }
    else if(XSet[2] === XSet[5] && XSet[2] === XSet[8] && XSet[2] !== false){
        gameOver = true
        winner = 'user'
    }
    else if(XSet[0] === XSet[4] && XSet[0] === XSet[8] && XSet[0] !== false){
        gameOver = true
        winner = 'user'
    }
    else if(XSet[2] === XSet[4] && XSet[2] === XSet[6] && XSet[2] !== false){
        gameOver = true
        winner = 'user'
    }
    else if(OSet[0] === OSet[1] && OSet[0] === OSet[2] && OSet[0] !== false){
        gameOver = true
        winner = 'comp'
    }
    else if(OSet[3] === OSet[4] && OSet[3] === OSet[5] && OSet[3] !== false){
        gameOver = true
        winner = 'comp'
    }
    else if(OSet[6] === OSet[7] && OSet[6] === OSet[8] && OSet[6] !== false){
        gameOver = true
        winner = 'comp'
    }
    else if(OSet[0] === OSet[3] && OSet[0] === OSet[6] && OSet[0] !== false){
        gameOver = true
        winner = 'comp'
    }
    else if(OSet[1] === OSet[4] && OSet[1] === OSet[7] && OSet[1] !== false){
        gameOver = true
        winner = 'comp'
    }
    else if(OSet[2] === OSet[5] && OSet[2] === OSet[8] && OSet[2] !== false){
        gameOver = true
        winner = 'comp'
    }
    else if(OSet[0] === OSet[4] && OSet[0] === OSet[8] && OSet[0] !== false){
        gameOver = true
        winner = 'comp'
    }
    else if(OSet[2] === OSet[4] && OSet[2] === OSet[6] && OSet[2] !== false){
        gameOver = true
        winner = 'comp'
    }else{
        winner = "nope"
    }

    if(gameOver){
        getWinner()
    }
}

function getWinner(){
    switch(winner){
        case 'user':
            userWinningGameBanner.style.display = "flex"
            userWinningGameBanner.style.opacity = "1"
            break
        case 'comp':
            compWinningGameBanner.style.display = "flex"
            compWinningGameBanner.style.opacity = "1"
            break
        default:
            drawGameBanner.style.display = "flex"
            drawGameBanner.style.opacity = "1"
    }
}

function resetBoard(){
    for(let i = 0; i < 9; i++){
        isSet[i] = false
        XSet[i] = false
        OSet[i] = false
        x1[i].style.width = "0rem"
        x2[i].style.width = "0rem"
        o[i].style.width = "0rem"
        o[i].style.height = "0rem"
        o[i].style.border = "none"
    }
    userWinningGameBanner.style.display = "none"
    userWinningGameBanner.style.opacity = "0"
    compWinningGameBanner.style.display = "none"
    compWinningGameBanner.style.opacity = "0"
    drawGameBanner.style.display = "none"
    drawGameBanner.style.opacity = "0"
    gameOver = false
    count = 1
    whichMove = 1
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
                break
            case 'MEDIUM':
                setDifficulty = 'medium'
                difficulties[1].style.border = ".3rem solid #000000"
                difficulties[0].style.border = "none"
                difficulties[2].style.border = "none"
                break
            default:
                setDifficulty = 'impossible'
                difficulties[2].style.border = ".3rem solid #000000"
                difficulties[0].style.border = "none"
                difficulties[1].style.border = "none"
        }
        resetBoard()
    })
})


resetBoardBtn.addEventListener('click', resetBoard)