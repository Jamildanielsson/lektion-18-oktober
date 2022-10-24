const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;

	const playGame = () => {
		const rock = document.querySelector('#btn1');
		const paperBtn = document.querySelector('#btn2');
		const scissorBtn = document.querySelector('#btn3');
		const playerOptions = [btn1,btn2,btn3];
		const computerOptions = ['rock','paper','scissors']
		
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Antal försök kvar: ${10-moves}`;
				

				const choiceNumber = Math.floor(Math.random()*2);
				const computerChoice = computerOptions[choiceNumber];

				// Function to check who wins
				winner(this.innerText,computerChoice)
				
				// Calling gameOver function after 10 moves
				if(moves == 10){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	// Function to decide winner
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'Tie'
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = 'Player Won'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	// Function to run when game is over
	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('#p2');
		const startagain = document.querySelector('#startagain');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'Game Over!!'
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Won The Game'
			result.style.color = '#308D46';
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Lost The Game';
			result.style.color = 'red';
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = 'Tie';
			result.style.color = 'grey'
		}
		startagain.innerText = 'Restart';
		startagain.style.display = 'flex'
		startagain.addEventListener('click',() => {
			window.location.reload();
		})
	}


	// Calling playGame function inside game
	playGame();
	
}

// Calling the game function
game();
