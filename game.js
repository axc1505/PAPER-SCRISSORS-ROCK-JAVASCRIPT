const getUserChoice=userInput=>{
  userInput = userInput.toLowerCase();
  if(userInput!=='rock' && userInput!=='paper' && userInput!=='scrissors' && userInput!=='bomb'){
     console.log('Corecteaza ce ai scris. Nu imi pot da seama!')   }
  else{
    return userInput;
  }
};
  
const getComputerChoice =()=>{
  const randomNumber=Math.floor(Math.random()*3);
 
  switch(randomNumber){
    case 0:
      return 'rock';
        case 1:
      return 'paper';
        case 2:
      return 'scrissors';
  }
};

const determineWinner=(userChoice,computerChoice)=>{
  if(userChoice==='bomb'){
    return 'Nu mai conteaza...ai castigat oricum!';
  }
  if(userChoice===computerChoice){
    return 'Tie';
  }
  if (userChoice==='rock'){
    if (computerChoice==='paper')
      {
      return 'Computerul castiga';}
else{
      return 'Castiga omul';
    }}
 if(userChoice==='paper'){
   if(computerChoice==='scrissors'){
      return 'Castiga computer';
 }
  else
    {
      return 'Castiga omul 3';
    }
 }
  if(userChoice==='scrissors'){
    if(computerChoice==='rock')
    {
      return 'Castiga android';
    }
    else {
      return 'Castiga omul 4';
    } 
  }
 };
 
const playGame=()=>{
  const userChoice=getUserChoice('bomb');
  const computerChoice=getComputerChoice();
  
  console.log(`Tu ai ales:${userChoice} iar PC:${computerChoice}`);   
  console.log(determineWinner(userChoice,computerChoice)); 
  };

playGame();


                  
