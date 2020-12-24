let playerScore = 0;
let computerScore = 0;
let options = ["Fire", "Water","Grass"];
let textIndex = 0;
let titleText = 'Be prepared to defend yourself against \"Daffy Duck, The Wizard\" or your secrets will be leaked.';
let instructionText = 'You\'ll have to defeat Master Daffy Duck in a FIRE-GRASS-WATTER! match. The rules are simple, but magic aren\'t, so here are the instructions.';
const textSpeed = 70;
let startButton = document.querySelector('.startButton');
startButton.addEventListener('click', startGame);
let introductText = document.querySelector('.insertedText');
let instructionBtt= document.querySelector('.instruction');
instructionBtt.addEventListener('click', showInstructions);
let battleWeapons = document.querySelectorAll('.attack');
let pointsUser = document.querySelector('.counterPlayer');
let pointsMachine = document.querySelector('.counterMachine');
let statusMessage = document.querySelector('.status');
let restartButton = document.querySelector('.restartButtonActivable');
let buttonsContainers =  document.querySelectorAll('.containerButton')

window.onload = magicText = () => {
    if (textIndex < titleText.length) {
        introductText.innerHTML += titleText.charAt(textIndex);
        textIndex++;
        setTimeout(magicText, textSpeed/5);
    } else{
        buttonsContainers.forEach((buttons) => {
            buttons.style.display='block';
        })
        return textIndex = 0;
    }  
};

function instructionList(){
    document.querySelector('.containerInstruction').style.display='none';
    document.querySelector('.containerStart').style.display='none';
    if (textIndex < instructionText.length) {
        introductText.innerHTML += instructionText.charAt(textIndex);
        textIndex++;
        setTimeout(instructionList, textSpeed/2);
    } else {
        document.querySelector('.containerStart').style.display='block';
    }
}

function showInstructions(){
    introductText.innerHTML = " ";
    instructionList();
    document.querySelector('.elements').style.display = 'grid';
}


function startGame(){
    buttonsContainers.forEach((buttons) => { buttons.style.display='none';})
    introductText.style.display= 'none';
    document.querySelector('.elements').style.display = 'none';
    document.querySelector('.playButtons').style.display = 'flex';
    document.querySelector('#pointsCounter').style.display= 'initial';
}



function computerSelection(){
    return (options[Math.floor(Math.random() * Math.floor(3))]);
}

function winner(){
    if (playerScore == 5 || computerScore == 5){
        restartButton.style.display = 'inline-block';
        replayGame();
        battleWeapons.forEach((button) => {
            button.setAttribute('disabled', '');
        })
        if (playerScore > computerScore){
            statusMessage.innerHTML = 'You\'ve won'
            statusMessage.style.cssText = 'animation-play-state: paused; color:green !important; font-size: 20px;';
        } else {
            statusMessage.innerHTML = 'You\'ve lost'
            statusMessage.style.cssText = 'animation-play-state: paused; color:red !important;  font-size: 20px;';
        }  
    }
   
    
}
function replayGame(){
    
    restartButton.addEventListener('click',() =>{
        window.location.reload();
    })
}
function battleStart(playerSelection, computerPlay){
    let playerChoice = document.querySelector('.userChoice');
    let computerChoice = document.querySelector('.computerChoice');
    let roundWin = document.querySelector('.roundWinner');
    if (playerSelection === computerPlay){
                playerChoice.innerHTML = `You\'ve chosen ${playerSelection} against`
                computerChoice.innerHTML = `Duffy's ${computerPlay} spell`
                roundWin.innerHTML = `That means a draw, you\'re both good magicians`
            }
            else if (playerSelection === options[0] && computerPlay !== options[1] || playerSelection === options[1] && computerPlay !== options[2] || playerSelection === options[2] && computerPlay !== options[0]){
                playerChoice.innerHTML = `Your ${playerSelection} spell were SO effective against`
                computerChoice.innerHTML = `Duffy's ${computerPlay} spell!`
                roundWin.innerHTML = `You've won 1 point!`
                playerScore+=1;
                pointsUser.innerHTML = playerScore;
            }
            else{ 
                playerChoice.innerHTML = `Bad choice wizard, ${playerSelection} spell missed against`
                computerChoice.innerHTML = `the powerfull ${computerPlay} of the Mighty Duffy`
                roundWin.innerHTML = `Duffy wons 1 point!`
            computerScore+=1;
            pointsMachine.innerHTML = computerScore;
            }
        console.log(playerScore);
        console.log(computerScore);
}
function selections(){
    let playerSelection;

    battleWeapons.forEach((weapon) => {
        weapon.addEventListener('click', () => {
            if (weapon.classList.contains('fire_attack')){
                playerSelection = options[0];
                document.querySelector('.water_attack').style.borderColor='white';
                document.querySelector('.fire_attack').style.borderColor='red';
                document.querySelector('.grass_attack').style.borderColor='white';
            } else if ( weapon.classList.contains('water_attack')){
                playerSelection = options[1];
                document.querySelector('.water_attack').style.borderColor='blue';
                document.querySelector('.fire_attack').style.borderColor='white';
                document.querySelector('.grass_attack').style.borderColor='white';
            } else {
                playerSelection = options[2];
                document.querySelector('.water_attack').style.borderColor='white';
                document.querySelector('.fire_attack').style.borderColor='white';
                document.querySelector('.grass_attack').style.borderColor='green';
            }
            battleStart(playerSelection, computerSelection());
            winner();
        })
    })
   
}
selections();