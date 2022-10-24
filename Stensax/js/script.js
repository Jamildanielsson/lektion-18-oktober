let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let vs = document.querySelector('#vs')
let player = document.querySelector('#player')
let computer = document.querySelector('#computer')
const d1 = document.querySelector(`.d1`)
const m1 = document.querySelector(`.m1`)
let gg = document.querySelector(`#gg`)
let pScore = 0;
let cScore = 0;


d1.style.display = `none`;


function endGame() {
    if (pScore == 5) {
        m1.style.display = `none`
        d1.style.display = `flex`
        gg.style.color = `green`
        gg.innerHTML = `<br>Grattis! <br><br> Du vann spelet! <br><br><br> Tryck på knappen för att spela igen.<br>`
    } else if (cScore == 5) {
        m1.style.display = `none`
        d1.style.display = `flex`
        gg.style.color = `red`
        gg.innerHTML = `<br>Game Over!<br><br> Du förlorade spelet! <br><br><br> Tryck på knappen för att spela igen. <br>`
    }
    }

const updateScore = () => {
    const playerScore = document.querySelector(`#playerscore`)
    const computerScore = document.querySelector(`#computerscore`)
    playerScore.textContent = `Dina poäng: ` + pScore;
    computerScore.textContent = `Datorns poäng: ` + cScore;
}


rock.addEventListener('click', ()=>{
    player.innerText = 'Sten'
    let numberWD = Math.random() * 2;
    let rockVS = Math.round (numberWD);
    console.log(rockVS);

    if (rockVS == 0) {
        vs.innerText = 'Oavgjort!'
        vs.style.color = 'Blue'
        computer.innerText = 'Sten'
        updateScore();
        endGame();
    }
    if (rockVS == 1) {
        vs.innerText = 'Datorn vinner'
        vs.style.color = 'Red'
        computer.innerText = 'Sax'
        cScore++;
        updateScore();
        endGame();
    }
    if (rockVS == 2) {
        vs.innerText = 'Spelaren vinner!'
        vs.style.color = 'Green'
        computer.innerText = 'Påse'
        pScore++;
        updateScore();
        endGame();
    } 
})

paper.addEventListener('click', ()=>{
    player.innerText = 'Sax'
    let numberWD = Math.random() * 2;
    let rockVS = Math.round (numberWD);
    console.log(rockVS);

    if (rockVS == 0) {
        vs.innerText = 'Spelaren vinner!'
        vs.style.color = 'Green'
        computer.innerText = 'Sten'
        pScore++;
        updateScore();
        endGame();
    } 
    if (rockVS == 1) {
        vs.innerText = 'Oavgjort!'
        vs.style.color = 'Blue'
        computer.innerText = 'Sax'
        updateScore();
        endGame();
    }
    if (rockVS == 2) {
        vs.innerText = 'Datorn vinner!'
        vs.style.color = 'Red'
        computer.innerText = 'Påse'
        cScore++;
        updateScore();
        endGame();
    }
})

scissors.addEventListener('click', ()=>{
    player.innerText = 'Påse'
    let numberWD = Math.random() * 2;
    let rockVS = Math.round (numberWD);
    console.log(rockVS);

    if (rockVS == 0) {
        vs.innerText = 'Datorn vinner!'
        vs.style.color = 'Red'
        computer.innerText = 'Sten'
        cScore++;
        updateScore();
        endGame();
    }
    if (rockVS == 1) {
        vs.innerText = 'Spelaren vinner!'
        vs.style.color = 'Green'
        computer.innerText = 'Sax'
        pScore++;
        updateScore();
        endGame();
    } 

    if (rockVS == 2) {
        vs.innerText = 'Oavgjort!'
        vs.style.color = 'Blue'
        computer.innerText = 'Påse'
        updateScore();
        endGame();
    }
})