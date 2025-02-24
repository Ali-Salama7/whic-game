const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.getElementById('time-left')
const score = document.getElementById('score')

let result = 0
let timeId = null
let hitPostion
let currentTime = 60

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    hitPostion = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        result++
        score.innerHTML = result
        hitPostion = null
    })
})

function moveMole() {   
    timeId = setInterval(randomSquare, 1000)
}
moveMole()

function countDown() {
    currentTime--
    timeLeft.innerHTML = currentTime
    if(currentTime === 0) {
        clearInterval(countDownTime)
        clearInterval(timeId)
        alert(`Game End! your score: ${result}`)
    }
}

let countDownTime = setInterval(countDown, 500)