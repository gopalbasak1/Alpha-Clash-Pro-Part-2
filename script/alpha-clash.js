// function play(){
//     //step-1: hide the home screen. to hide the screen add the class hidden to the home section.

//     const homeSection =document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // step-2: show the playground

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(expectedAlphabet,playerPressed);
}

//capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}