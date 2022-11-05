"use strict";
const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const circleColors = ['#5c4842', '#b5b3af', '#b55d4d', '#fa996f', '#988830']
let time = 0
let score = 0
startBtn.addEventListener('click', (e) => {
  e.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', (e) => {
  if (e.target.classList.contains('time-btn')) {
    time = parseInt(e.target.getAttribute('data-time'))
    screens[1].classList.add('up')

    startGame()
  }
})

board.addEventListener('click', (e) => {
  if (e.target.classList.contains('circle')) {
    score++
    e.target.remove()
    createRandomeCircle()
  }
})


function startGame() {
  setInterval(decreaseTime, 1000)
  createRandomeCircle()
  setTime(time)
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current)
  }
}


function setTime(value) {
  timeEl.innerHTML = `00:${value}`
};

function finishGame() {
  timeEl.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Score is <span class="primery">${score}</span></h1>`
}


function createRandomeCircle() {
  const circle = document.createElement('div')
  const size = getRandomeNumber(10, 60)
  const { width, height } = board.getBoundingClientRect()
  const x = getRandomeNumber(0, width - size)
  const y = getRandomeNumber(0, height - size)

  circle.classList.add('circle')

  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  getRandomeCircleColor(circle)

  board.append(circle)
}

function getRandomeNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRandomeCircleColor(element) {
  const randomeNum = Math.round(Math.random() * circleColors.length)

  element.style.background = `${circleColors[randomeNum]}`
}