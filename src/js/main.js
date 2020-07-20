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

function compMoveEasy(){
    choice = Math.floor(Math.random() * 9)
    while (isSet[choice]) {
        choice = Math.floor(Math.random() * 9)
    }
    isSet[choice] = true
    OSet[choice] = true
    sleep(400).then(() =>{
        o[choice].style.transform = "translateY(0rem)",
        o[choice].style.width = "8rem",
        o[choice].style.height = "8rem",
        o[choice].style.border = "0.5rem solid #2c7a7b"
    })
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
                isSet[4] = true
                OSet[4] = true
                sleep(400).then(() =>{
                    o[4].style.transform = "translateY(0rem)",
                    o[4].style.width = "8rem",
                    o[4].style.height = "8rem",
                    o[4].style.border = "0.5rem solid #2c7a7b"
                })
            }else{
                isSet[8] = true
                OSet[8] = true
                sleep(400).then(() =>{
                    o[8].style.transform = "translateY(0rem)",
                    o[8].style.width = "8rem",
                    o[8].style.height = "8rem",
                    o[8].style.border = "0.5rem solid #2c7a7b"
                })
            }
            break

        case 2:
            if(OSet[4]){
                if(XSet[0] && XSet[2]){
                    isSet[1] = true
                    OSet[1] = true
                    sleep(400).then(() =>{
                        o[1].style.transform = "translateY(0rem)",
                        o[1].style.width = "8rem",
                        o[1].style.height = "8rem",
                        o[1].style.border = "0.5rem solid #2c7a7b"
                    })
                }else if(XSet[0] && XSet[6]){
                    isSet[3] = true
                    OSet[3] = true
                    sleep(400).then(() =>{
                        o[3].style.transform = "translateY(0rem)",
                        o[3].style.width = "8rem",
                        o[3].style.height = "8rem",
                        o[3].style.border = "0.5rem solid #2c7a7b"
                    })
                }else if(XSet[2] && XSet[8]){
                    isSet[5] = true
                    OSet[5] = true
                    sleep(400).then(() =>{
                        o[5].style.transform = "translateY(0rem)",
                        o[5].style.width = "8rem",
                        o[5].style.height = "8rem",
                        o[5].style.border = "0.5rem solid #2c7a7b"
                    })
                }else if(XSet[6] && XSet[8]){
                    isSet[7] = true
                    OSet[7] = true
                    sleep(400).then(() =>{
                        o[7].style.transform = "translateY(0rem)",
                        o[7].style.width = "8rem",
                        o[7].style.height = "8rem",
                        o[7].style.border = "0.5rem solid #2c7a7b"
                    })
                }else if(XSet[0] && XSet[1]){
                    isSet[2] = true
                    OSet[2] = true
                    sleep(400).then(() =>{
                        o[2].style.transform = "translateY(0rem)",
                        o[2].style.width = "8rem",
                        o[2].style.height = "8rem",
                        o[2].style.border = "0.5rem solid #2c7a7b"
                    })
                }else if(XSet[0] && XSet[3]){
                    isSet[6] = true
                    OSet[6] = true
                    sleep(400).then(() =>{
                        o[6].style.transform = "translateY(0rem)",
                        o[6].style.width = "8rem",
                        o[6].style.height = "8rem",
                        o[6].style.border = "0.5rem solid #2c7a7b"
                    })
                }else if(XSet[2] && XSet[1]){
                    isSet[0] = true
                    OSet[0] = true
                    sleep(400).then(() =>{
                        o[0].style.transform = "translateY(0rem)",
                        o[0].style.width = "8rem",
                        o[0].style.height = "8rem",
                        o[0].style.border = "0.5rem solid #2c7a7b"
                    })
                }else if(XSet[2] && XSet[5]){
                    isSet[8] = true
                    OSet[8] = true
                    sleep(400).then(() =>{
                        o[8].style.transform = "translateY(0rem)",
                        o[8].style.width = "8rem",
                        o[8].style.height = "8rem",
                        o[8].style.border = "0.5rem solid #2c7a7b"
                    })
                }else if(XSet[6] && XSet[3]){
                    isSet[0] = true
                    OSet[0] = true
                    sleep(400).then(() =>{
                        o[0].style.transform = "translateY(0rem)",
                        o[0].style.width = "8rem",
                        o[0].style.height = "8rem",
                        o[0].style.border = "0.5rem solid #2c7a7b"
                    })
                }else if(XSet[6] && XSet[7]){
                    isSet[8] = true
                    OSet[8] = true
                    sleep(400).then(() =>{
                        o[8].style.transform = "translateY(0rem)",
                        o[8].style.width = "8rem",
                        o[8].style.height = "8rem",
                        o[8].style.border = "0.5rem solid #2c7a7b"
                    })
                }
            }else{

            }
            break

        case 3:
            if(XSet[0] || XSet[2] || XSet[6] || XSet[7])
            break

        default:
            if(XSet[0] || XSet[2] || XSet[6] || XSet[7]){
                
            }
    }
    whichMove++
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