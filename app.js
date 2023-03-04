const buttonZero = document.querySelector('.buttonZero'),
    buttonOne = document.querySelector('.buttonOne'),
    buttonTwo = document.querySelector('.buttonTwo'),
    buttonThree = document.querySelector('.buttonThree'),
    buttonFour = document.querySelector('.buttonFour'),
    buttonFive = document.querySelector('.buttonFive'),
    buttonSix= document.querySelector('.buttonSix'),
    buttonSeven = document.querySelector('.buttonSeven'),
    buttonEight = document.querySelector('.buttonEight'),
    xo = document.querySelector('.xo'),
    buttonReset = document.querySelector('.buttonReset'),
    txtXO = document.querySelector('.txtXO');


buttonZero.addEventListener('click', () => enterSymbol(buttonZero) );
buttonOne.addEventListener('click', () => enterSymbol(buttonOne) );
buttonTwo.addEventListener('click', () => enterSymbol(buttonTwo) );
buttonThree.addEventListener('click', () => enterSymbol(buttonThree) );
buttonFour.addEventListener('click', () => enterSymbol(buttonFour) );
buttonFive.addEventListener('click', () => enterSymbol(buttonFive) );
buttonSix.addEventListener('click', () => enterSymbol(buttonSix) );
buttonSeven.addEventListener('click', () => enterSymbol(buttonSeven) );
buttonEight.addEventListener('click', () => enterSymbol(buttonEight) );
buttonReset.addEventListener('click', () => reset());

function reset () {
    buttonZero.innerHTML = '';
    buttonOne.innerHTML = '';
    buttonTwo.innerHTML = '';
    buttonThree.innerHTML = '';
    buttonFour.innerHTML = '';
    buttonFive.innerHTML = '';
    buttonSix.innerHTML = '';
    buttonSeven.innerHTML = '';
    buttonEight.innerHTML = '';
    xo.innerHTML = 'X';

    buttonZero.disabled = false;
    buttonOne.disabled = false;
    buttonTwo.disabled = false;
    buttonThree.disabled = false;
    buttonFour.disabled = false;
    buttonFive.disabled = false;
    buttonSix.disabled = false;
    buttonSeven.disabled = false;
    buttonEight.disabled = false;
    
    buttonZero.style.cursor = 'pointer';
    buttonOne.style.cursor = 'pointer';
    buttonTwo.style.cursor = 'pointer';
    buttonThree.style.cursor = 'pointer';
    buttonFour.style.cursor = 'pointer';
    buttonFive.style.cursor = 'pointer';
    buttonSix.style.cursor = 'pointer';
    buttonSeven.style.cursor = 'pointer';
    buttonEight.style.cursor = 'pointer';
    txtXO.innerHTML = `Turn <span> ${xo.innerHTML} </span> `; 
    xo.innerHTML = 'X';




}


function checkXO () {
    if (xo.innerHTML == 'X') {
        xo.innerHTML = 'O';
    } else  {
        xo.innerHTML = 'X'; 
    }
}

function enterSymbol (button) {
    
    button.innerHTML = xo.innerHTML;
    button.style.cursor = 'auto';
    button.disabled = true;
    checkXO();
    txtXO.innerHTML = `Turn <span> ${xo.innerHTML} </span> `; 
    isEnd ()

}

function isEnd () {
    if (buttonZero.innerHTML !== '' 
        && buttonOne.innerHTML !== '' 
        && buttonTwo.innerHTML !== ''
        && buttonThree.innerHTML !== '' 
        && buttonFour.innerHTML !== '' 
        && buttonFive.innerHTML !== '' 
        && buttonSix.innerHTML !== '' 
        && buttonSeven.innerHTML !== '' 
        && buttonEight.innerHTML !== ''
        ) {
            txtXO.innerHTML = 'Game is <span>over</span>'
            xo.innerHTML = ''
        }
}














        // buttonZero
        // buttonOne
        // buttonTwo
        // buttonThree
        // buttonFour
        // buttonFive
        // buttonSix
        // buttonSeven
        // buttonEight