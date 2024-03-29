const audio = new Audio();

let isGameOn = false;

const artBoard = document.getElementById('art-board');

const modalBox = document.getElementById('modal-box')

function handleKeyboardButtonPress(event){

    if(isGameOn == false) return;

    const playerPressed = event.key;

    //stop the game if pressed 'Esc'
    if(playerPressed === "Escape"){
        gameOver();
    }
    
    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    
    //check matched or not
     if(playerPressed === expectedAlphabet){
        console.log('you will win the match');
        audio.src = "../Audio/success.wav";
        audio.play()

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);


        // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
     }
     else{
        console.log('you missed the point');

        audio.src = "../Audio/wrong.wav";
        audio.play()

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        const updateLifePercentage = (updatedLife / 5) * 100;

        artBoard.style.background = `linear-gradient(#FFFFFFB3 ${updateLifePercentage}%,red)`

        if(updatedLife === 0){
            gameOver();
            audio.src = "../Audio/exit.mp3";
             audio.play()
        }
     }

}

//capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    //console.log('your random alphabet', alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
    
}

function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // rest score and life
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)

    isGameOn = true;

    continueGame();

}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    //1. get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score', lastScore);
    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

    isGameOn = false;

    artBoard.style.background = `linear-gradient(#FFFFFFB3 100%,red)`
    
}

function modalOpen(e){
    if(e.clientY < 20){
        modalBox.style.display = "flex"
    }
}

function modalClose(){
    modalBox.style.display = "none"
}

document.body.onmousemove = modalOpen;