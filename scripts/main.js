let userScore = 0;
let computerScore = 0;
const display = document.getElementById('display');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissor = document.getElementById('s');
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

function getComputerChoise() {
  const choises = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choises[randomNumber];
}

function game(userChoice) {
  const computerChoise = getComputerChoise();
  switch (userChoice + computerChoise) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoise);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoise);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoise);
      break;
  }

  function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
  }

  function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    display.innerHTML =
      'Player picked:  ' +
      convertToWord(userChoice) +
      '<br />' +
      'Computer picked: ' +
      convertToWord(computerChoice) +
      '<br />' +
      'Result: User wins!';
  }

  function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    display.innerHTML =
      'Player picked:  ' +
      convertToWord(userChoice) +
      '<br />' +
      'Computer picked: ' +
      convertToWord(computerChoice) +
      '<br />' +
      'Result: Computer wins!';
  }

  function draw(userChoice, computerChoice) {
    display.innerHTML =
      'Player picked:  ' +
      convertToWord(userChoice) +
      '<br />' +
      'Computer picked: ' +
      convertToWord(computerChoice) +
      '<br />' +
      'Result: Its a draw!';
  }
}
game();

function main() {
  rock.addEventListener('click', () => game('r'));
  paper.addEventListener('click', () => game('p'));
  scissor.addEventListener('click', () => game('s'));
}

main();
