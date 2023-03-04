const buttonZero = document.querySelector('.buttonZero'),
    buttonOne = document.querySelector('.buttonOne'),
    buttonTwo = document.querySelector('.buttonTwo'),
    buttonThree = document.querySelector('.buttonThree'),
    buttonFour = document.querySelector('.buttonFour'),
    buttonFive = document.querySelector('.buttonFive'),
    buttonSix= document.querySelector('.buttonSix'),
    buttonSeven = document.querySelector('.buttonSeven'),
    buttonEight = document.querySelector('.buttonEight'),
    xo = document.querySelector('.xo');

buttonZero.addEventListener('click', () => enterSymbol(buttonZero) );
buttonOne.addEventListener('click', () => enterSymbol(buttonOne) );
buttonTwo.addEventListener('click', () => enterSymbol(buttonTwo) );
buttonThree.addEventListener('click', () => enterSymbol(buttonThree) );
buttonFour.addEventListener('click', () => enterSymbol(buttonFour) );
buttonFive.addEventListener('click', () => enterSymbol(buttonFive) );
buttonSix.addEventListener('click', () => enterSymbol(buttonSix) );
buttonSeven.addEventListener('click', () => enterSymbol(buttonSeven) );
buttonEight.addEventListener('click', () => enterSymbol(buttonEight) );

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
    button.classList = 'filled';
    button.disabled = true;
    checkXO();

    button.addEventListener('mouseout', () => {button.style.color = 'red'});
}
