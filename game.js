let playerScore = 0;
let computerScore = 0;
let options = ["rock", "paper","scissors"];
let textIndex = 0;
let titleText = 'Be prepared to defend yourself against \"Daffy Duck, The Wizard\" or your secrets will be leaked.';
let instructionText = 'You\'ll have to defeat Master Daffy Duck in a ROCK-PAPER-SCISSORS! match. The rules are simple, but magic aren\'t so here are the instructions.';
const textSpeed = 70;
let startButton = document.querySelector('.startButton');
startButton.addEventListener('click', startGame);
let introductText = document.querySelector('.insertedText');
let instructionBtt= document.querySelector('.instruction');
instructionBtt.addEventListener('click', showInstructions);

window.onload = magicText = () => {
    if (textIndex < titleText.length) {
        introductText.innerHTML += titleText.charAt(textIndex);
        textIndex++;
        setTimeout(magicText, textSpeed);
    } else{
        return textIndex = 0;
    }  
};

function instructionList(){
    if (textIndex < instructionText.length) {
        introductText.innerHTML += instructionText.charAt(textIndex);
        textIndex++;
        setTimeout(instructionList, textSpeed/2);
    }
}

function showInstructions(){
    startButton.style.display = 'none';
    instructionBtt.style.display = 'none';
    introductText.innerHTML = " ";
    instructionList();
}


function startGame(){
    startButton.style.display = 'none';
    instructionBtt.style.display = 'none';
    introductText.style.display= 'none';
}











// function computerSelection(){
//     return (options[Math.floor(Math.random() * Math.floor(3))]);
// }

//     function game () {
//         console.log("Juego Iniciado");
//         const playerSelection = prompt("What's your choice");
//         let computerPlay = computerSelection();
//         console.log(`You selected ${playerSelection}`);
//         console.log(`Computed selected ${computerPlay}`);
       
//         if (playerSelection === computerPlay){
//              console.log("TIE");
//         }
//         else if (playerSelection === options[0] && computerPlay !== options[1] || playerSelection === options[1] && computerPlay !== options[2] || playerSelection === options[2] && computerPlay !== options[0]){
//             console.log(`You've won! ${playerSelection} beats ${computerPlay}`);
//             playerScore+=1;
//         }
//         else{ 
//         console.log(`Computer wins! ${computerPlay} beats ${playerSelection}`);
//         computerScore+=1;
//     }
//     console.log(playerScore);
//     console.log(computerScore);
// }