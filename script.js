let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget =() =>{
  return Math.floor(Math.random()*10)
}
const compareGuesses = (humanGuess,computerGuess,secretTarget) =>{
  checkHumanGuess(humanGuess);
  
  const diffHuman = Math.abs(humanGuess-secretTarget);
  const diffComputer =Math.abs(computerGuess-secretTarget);
  console.log(diffHuman,diffComputer)
  if(diffHuman>diffComputer){
    return false;
  }else{
    return true;
  }
  
  
}
const updateScore = (Winner) =>{
  if(Winner==='human'){
    humanScore +=1
  }else{
    computerScore +=1;
  }
    

}
const advanceRound =() =>
  currentRoundNumber +=1

const checkHumanGuess = (human)=>{
  if(human<=0||human>=9)
    {
      window.alert("please check your entry and try again")

    }
  
}





