let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

//console.log(generateTarget());

const compareGuesses = ( userGuess, computerGuess, secretTarget) => {
if ( userGuess < 0 || userGuess > 9 ){
alert('number is out of range');
} else{
userGuess =getAbsoluteDistance(secretTarget, userGuess);
computerGuess = getAbsoluteDistance( secretTarget, computerGuess);
if (userGuess < computerGuess || userGuess === computerGuess){
  return true;
} else {
return false;
}
}
};

//console.log(compareGuesses(3, 4, 2));

const updateScore = winner => {
  
  if (winner === 'human'){
   humanScore += 1 ;
    //console.log('human' + humanScore)
  } else {
    computerScore += 1;
    //console.log('computer');
  }
};

//updateScore('human');

const advanceRound = () => currentRoundNumber ++ ;

const getAbsoluteDistance = (num1, num2) => {
return Math.abs(num1 - num2);
}

//console.log(advanceRound());
