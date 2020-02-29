const getUserChoice=userInput=>{
  userInput = userInput.toLowerCase();
  if(userInput!=='piatra' && userInput!=='hartie' && userInput!=='foarfeca' && userInput!=='bomba'){
     console.log('Corecteaza ce ai scris. Nu imi pot da seama!')   }
  else{
    return userInput;
  }
};
  
const getComputerChoice =()=>{
  const randomNumber=Math.floor(Math.random()*3);
 
  switch(randomNumber){
    case 0:
      return 'piatra';
        case 1:
      return 'hartie';
        case 2:
      return 'foarfeca';
  }
};

const determineWinner=(userChoice,computerChoice)=>{
  if(userChoice==='bomba'){
    return 'Nu mai conteaza...ai castigat oricum!';
  }
  if(userChoice===computerChoice){
    return 'Egalitate';
  }
  if (userChoice==='piatra'){
    if (computerChoice==='hartie')
      {
      return 'Castiga calculatorul';}
else{
      return 'Castiga utilizatorul';
    }}
 if(userChoice==='hartie'){
   if(computerChoice==='foarfeca'){
      return 'Castiga calculatorul';
 }
  else
    {
      return 'Castiga utilizatorul';
    }
 }
  if(userChoice==='foarfeca'){
    if(computerChoice==='piatra')
    {
      return 'Castiga calculatorul';
    }
    else {
      return 'Castiga utilizatorul';
    } 
  }
 };
 
const playGame=()=>{
  const userChoice=getUserChoice('bomba');
  const computerChoice=getComputerChoice();
  
  console.log(`Tu ai ales:${userChoice} iar PC:${computerChoice}`);   
  console.log(determineWinner(userChoice,computerChoice)); 
  };

playGame();


                  
