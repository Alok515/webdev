const userDis = document.getElementById("user");
const comDis = document.getElementById("computer");
const resultDis = document.getElementById("result");

const buttons = document.querySelectorAll("button");
let userc;
let comc;


buttons.forEach(choice => choice.addEventListener("click", (event)=>{
    userc = event.target.id;
    userDis.innerHTML = userc;
    comrand();
    computeR();
}));

function comrand(){
    const randnum = Math.floor(Math.random() * buttons.length) + 1;

    if(randnum === 1 )comc = "rock";
    if(randnum === 2 )comc = "paper";
    if(randnum === 3 )comc = "scissors";
    comDis.innerText = comc;
}

function computeR(){
    switch (userc + comc) {
    case 'scissorpaper':
    case 'rockscissors':
    case 'paperrock':
      resultDis.innerHTML = "YOU WIN!"
      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDis.innerHTML = "YOU LOSE!"
      break
    case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
    resultDis.innerHTML = "ITS A DRAW!"
    break
  }
}
