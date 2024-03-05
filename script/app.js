let result = document.getElementById('result')
const userChoiceInDisplay = document.getElementById('user-choice')
const computerChoiceInDisplay = document.getElementById('computer-choice')
const startBtn = document.getElementById('start')
const parents = document.querySelector('.parent')
const btns = document.querySelectorAll('button')
let userChoice;
let lostCount = 0
// console.log(result);

startBtn.addEventListener('click',function(){

    parents.classList.replace('hidden','block')
    startBtn.style.display = 'none'
})

const choices = ['rock','paper', 'scissor']
// console.log(result,userChoice,computerChoice,btns);

btns.forEach(element => {
    element.addEventListener('click',function(e){
        userChoice = e.target.id
        // console.log(userChoice);
        userChoiceInDisplay.innerText = userChoice
        getComputerChoice()
        getResult()
    })
});

const getComputerChoice = () => {

    let random = Math.floor((Math.random() * choices.length))

    // console.log(random);
    computerChoiceInDisplay.innerText = choices[random]
}

const getResult = () => {

    // console.log(computerChoiceInDisplay.innerText,userChoice.innerText);
if (computerChoiceInDisplay.innerText === userChoiceInDisplay.innerText) {
    result.innerText = 'You made draw '
} 
if (computerChoiceInDisplay.innerText === 'rock' && userChoiceInDisplay.innerText === 'scissor') {
    result.innerText = 'You lost!'
} 
if (computerChoiceInDisplay.innerText === 'rock' && userChoiceInDisplay.innerText === 'paper') {
    result.innerText = 'You win!'
} 

if (computerChoiceInDisplay.innerText === 'paper' && userChoiceInDisplay.innerText === 'rock') {
    result.innerText = 'You lost!'
} 
if (computerChoiceInDisplay.innerText === 'paper' && userChoiceInDisplay.innerText === 'scissor') {
    result.innerText = 'You win!'
} 

if (computerChoiceInDisplay.innerText === 'scissor' && userChoiceInDisplay.innerText === 'rock') {
    result.innerText = 'You win!'
} 
if (computerChoiceInDisplay.innerText === 'scissor' && userChoiceInDisplay.innerText === 'paper'){
    result.innerText = 'You lost!'
} 

if (result.innerText === 'You lost!') {
    lostCount++
    if (lostCount === 10) {
        parents.classList.replace('block','hidden')
    startBtn.style.display = 'block'
    lostCount = 0
    }
} 
console.log(lostCount);
}


