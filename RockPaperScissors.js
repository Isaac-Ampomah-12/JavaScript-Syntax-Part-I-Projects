const getUserChoice =  userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
  return userInput;
}else{
  console.log('Incorrect input');
}
};


//console.log(getUserChoice ('Scissors'));

function getComputerChoice(){
  let ranNum = Math.floor(Math.random()*3);
  switch(ranNum){
    case 0: 
      return 'rock';
    case 1: 
      return 'paper';
    default: 
      return 'scissors';
  }
}
//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) =>{
  if(userChoice === 'bomb'){
    return 'You won';
  }
  if(userChoice === computerChoice){
    return 'its a tie';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer won';
    }else{
      return 'You won';
    }
  }

  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer won';
    }else{
      return 'You won';
    }
  }

  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer won';
    }else{
      return 'You won';
    }
  }
};

//console.log(determineWinner('scissors','paper'));
const playGame= () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`Your chose: ${userChoice} and Computer chose ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();