const box1 = document.querySelector('#box1')
const box1X = document.querySelector('#box1X')
const box2X = document.querySelector('#box2X')
const box3X = document.querySelector('#box3X')
const box4X = document.querySelector('#box4X')
const box5X = document.querySelector('#box5X')
const box6X = document.querySelector('#box6X')
const box7X = document.querySelector('#box7X')
const box8X = document.querySelector('#box8X')
const box9X = document.querySelector('#box9X')
const box1O = document.querySelector('#box1O')
const box2O = document.querySelector('#box2O')
const box3O = document.querySelector('#box3O')
const box4O = document.querySelector('#box4O')
const box5O = document.querySelector('#box5O')
const box6O = document.querySelector('#box6O')
const box7O = document.querySelector('#box7O')
const box8O = document.querySelector('#box8O')
const box9O = document.querySelector('#box9O')

const Xs = document.querySelectorAll('x')

Xs.forEach(x =>{
    x.style.display = "none"
})

function markBox1(){
    if(box1X.style.display === "none" && box1O.style.display === "none"){
        box1X.style.display = "block"
    }
    else{
        console.log(box1O.style.display)
        console.log(box1X.style.display)
        box1X.style.display = "none"
        box1O.style.display = "none"
        console.log(box1O.style.display)
    }
}

box1.addEventListener('click', markBox1)
// box2.addEventListener('click', markBox1)
// box3.addEventListener('click', markBox1)
// box4.addEventListener('click', markBox1)
// box5.addEventListener('click', markBox1)
// box6.addEventListener('click', markBox1)
// box7.addEventListener('click', markBox1)
// box8.addEventListener('click', markBox1)
// box9.addEventListener('click', markBox1)

box1