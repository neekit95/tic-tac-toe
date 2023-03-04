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

// function hover (button) {
//     if(button == '') {
//     return button.addEventListener ('mouseover', () => button.bacgroundColor = 'red');
//     }    
// }

// hover ();


// buttonOne.addEventListener('mouseover', () => enterSymbol(buttonOne) );
// buttonTwo.addEventListener('mouseover', () => enterSymbol(buttonTwo) );
// buttonThree.addEventListener('mouseover', () => enterSymbol(buttonThree) );
// buttonFour.addEventListener('mouseover', () => enterSymbol(buttonFour) );
// buttonFive.addEventListener('mouseover', () => enterSymbol(buttonFive) );
// buttonSix.addEventListener('mouseover', () => enterSymbol(buttonSix) );
// buttonSeven.addEventListener('mouseover', () => enterSymbol(buttonSeven) );
// buttonEight.addEventListener('mouseover', () => enterSymbol(buttonEight) );


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
    button.style.color = '';
    checkXO();
    txtXO.innerHTML = `Turn <span> ${xo.innerHTML} </span> `; 
    isEnd ();
    isXWin();
    isOWin();
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
            txtXO.innerHTML = 'It is <span>drow!</span>'
            xo.innerHTML = ''
        }
    buttonZero.style.color = '';
    buttonOne.style.color = '';
    buttonTwo.style.color = '';
    buttonThree.style.color = '';
    buttonFour.style.color = '';
    buttonFive.style.color = '';
    buttonSix.style.color = '';
    buttonSeven.style.color = '';
    buttonEight.style.color = '';
}
function buttonsDisabled () {
    buttonZero.disabled = true;
    buttonOne.disabled = true;
    buttonTwo.disabled = true;
    buttonThree.disabled = true;
    buttonFour.disabled = true;
    buttonFive.disabled = true;
    buttonSix.disabled = true;
    buttonSeven.disabled = true;
    buttonEight.disabled = true;

    buttonZero.style.cursor = 'auto';
    buttonOne.style.cursor = 'auto';
    buttonTwo.style.cursor = 'auto';
    buttonThree.style.cursor = 'auto';
    buttonFour.style.cursor = 'auto';
    buttonFive.style.cursor = 'auto';
    buttonSix.style.cursor = 'auto';
    buttonSeven.style.cursor = 'auto';
    buttonEight.style.cursor = 'auto';
}
function isXWin () {
    if(
        buttonZero.innerHTML =='X' 
        && buttonOne.innerHTML == 'X'
        && buttonTwo.innerHTML == 'X') {
        buttonsDisabled();
        txtXO.innerHTML = '<span>X</span> wins!'
        buttonZero.style.color = 'rgb(192, 10, 10)'; 
        buttonOne.style.color = 'rgb(192, 10, 10)'; 
        buttonTwo.style.color = 'rgb(192, 10, 10)'; 
            
    } else if (
        buttonThree.innerHTML =='X' 
        && buttonFour.innerHTML == 'X'
        && buttonFive.innerHTML == 'X' 
    ) {
        buttonsDisabled();
        txtXO.innerHTML = '<span>X</span> wins!'
        buttonThree.style.color = 'rgb(192, 10, 10)'; 
        buttonFour.style.color = 'rgb(192, 10, 10)'; 
        buttonFive.style.color = 'rgb(192, 10, 10)'; 
    } else if (
        buttonSix.innerHTML =='X' 
        && buttonSeven.innerHTML == 'X'
        && buttonEight.innerHTML == 'X' 
        ) {
            buttonsDisabled();
            txtXO.innerHTML = '<span>X</span> wins!'
            buttonSix.style.color = 'rgb(192, 10, 10)'; 
            buttonSeven.style.color = 'rgb(192, 10, 10)'; 
            buttonEight.style.color = 'rgb(192, 10, 10)'; 
    } else if (
        buttonZero.innerHTML =='X' 
        && buttonFour.innerHTML == 'X'
        && buttonEight.innerHTML == 'X' 
        ) {
            buttonsDisabled();
            txtXO.innerHTML = '<span>X</span> wins!'
            buttonZero.style.color = 'rgb(192, 10, 10)'; 
            buttonFour.style.color = 'rgb(192, 10, 10)'; 
            buttonEight.style.color = 'rgb(192, 10, 10)'; 
    } else if (
        buttonTwo.innerHTML =='X' 
        && buttonFour.innerHTML == 'X'
        && buttonSix.innerHTML == 'X' 
        ) {
            buttonsDisabled();
            txtXO.innerHTML = '<span>X</span> wins!'
            buttonTwo.style.color = 'rgb(192, 10, 10)'; 
            buttonFour.style.color = 'rgb(192, 10, 10)'; 
            buttonSix.style.color = 'rgb(192, 10, 10)'; 
    } else if (
        buttonTwo.innerHTML =='X' 
        && buttonThree.innerHTML == 'X'
        && buttonSix.innerHTML == 'X' 
        ) {
            buttonsDisabled();
            txtXO.innerHTML = '<span>X</span> wins!'
            buttonTwo.style.color = 'rgb(192, 10, 10)'; 
            buttonThree.style.color = 'rgb(192, 10, 10)'; 
            buttonSix.style.color = 'rgb(192, 10, 10)';
    } else if (
        buttonOne.innerHTML =='X' 
        && buttonFour.innerHTML == 'X'
        && buttonSeven.innerHTML == 'X' 
        ) {
            buttonsDisabled();
            txtXO.innerHTML = '<span>X</span> wins!'
            buttonOne.style.color = 'rgb(192, 10, 10)'; 
            buttonFour.style.color = 'rgb(192, 10, 10)'; 
            buttonSeven.style.color = 'rgb(192, 10, 10)';
    } else if (
        buttonTwo.innerHTML =='X' 
        && buttonFive.innerHTML == 'X'
        && buttonEight.innerHTML == 'X' 
        ) {
            buttonsDisabled();
            txtXO.innerHTML = '<span>X</span> wins!'
            buttonTwo.style.color = 'rgb(192, 10, 10)'; 
            buttonFive.style.color = 'rgb(192, 10, 10)'; 
            buttonEight.style.color = 'rgb(192, 10, 10)';
    } 
        
            
}
function isOWin () {
    if(
        buttonZero.innerHTML =='O' 
        && buttonOne.innerHTML == 'O'
        && buttonTwo.innerHTML == 'O') {
        buttonsDisabled();
        txtXO.innerHTML = '<span>O</span> wins!'
        buttonZero.style.color = 'rgb(192, 10, 10)'; 
        buttonOne.style.color = 'rgb(192, 10, 10)'; 
        buttonTwo.style.color = 'rgb(192, 10, 10)'; 
            
    } else if (
        buttonThree.innerHTML =='O' 
        && buttonFour.innerHTML == 'O'
        && buttonFive.innerHTML == 'O' 
    ) {
        buttonsDisabled();
        txtXO.innerHTML = '<span>O</span> wins!'
        buttonThree.style.color = 'rgb(192, 10, 10)'; 
        buttonFour.style.color = 'rgb(192, 10, 10)'; 
        buttonFive.style.color = 'rgb(192, 10, 10)'; 
    } else if (
        buttonSix.innerHTML =='O' 
        && buttonSeven.innerHTML == 'O'
        && buttonEight.innerHTML == 'O' 
        ) {
            buttonsDisabled();
            txtXO.innerHTML = '<span>O</span> wins!'
            buttonSix.style.color = 'rgb(192, 10, 10)'; 
            buttonSeven.style.color = 'rgb(192, 10, 10)'; 
            buttonEight.style.color = 'rgb(192, 10, 10)'; 
    } else if (
        buttonZero.innerHTML =='O' 
        && buttonFour.innerHTML == 'O'
        && buttonEight.innerHTML == 'O' 
        ) {
            buttonsDisabled();
            txtXO.innerHTML = '<span>O</span> wins!'
            buttonZero.style.color = 'rgb(192, 10, 10)'; 
            buttonFour.style.color = 'rgb(192, 10, 10)'; 
            buttonEight.style.color = 'rgb(192, 10, 10)'; 
    } else if (
        buttonTwo.innerHTML =='O' 
        && buttonFour.innerHTML == 'O'
        && buttonSix.innerHTML == 'O' 
        ) {
            buttonsDisabled();
            txtXO.innerHTML = '<span>O</span> wins!'
            buttonTwo.style.color = 'rgb(192, 10, 10)'; 
            buttonFour.style.color = 'rgb(192, 10, 10)'; 
            buttonSix.style.color = 'rgb(192, 10, 10)'; 
    } else if (
        buttonTwo.innerHTML =='O' 
        && buttonThree.innerHTML == 'O'
        && buttonSix.innerHTML == 'O' 
        ) {
            buttonsDisabled();
            txtXO.innerHTML = '<span>O</span> wins!'
            buttonTwo.style.color = 'rgb(192, 10, 10)'; 
            buttonThree.style.color = 'rgb(192, 10, 10)'; 
            buttonSix.style.color = 'rgb(192, 10, 10)';
    } else if (
        buttonOne.innerHTML =='O' 
        && buttonFour.innerHTML == 'O'
        && buttonSeven.innerHTML == 'O' 
        ) {
            buttonsDisabled();
            txtXO.innerHTML = '<span>O</span> wins!'
            buttonOne.style.color = 'rgb(192, 10, 10)'; 
            buttonFour.style.color = 'rgb(192, 10, 10)'; 
            buttonSeven.style.color = 'rgb(192, 10, 10)';
    } else if (
        buttonTwo.innerHTML =='O' 
        && buttonFive.innerHTML == 'O'
        && buttonEight.innerHTML == 'O' 
        ) {
            buttonsDisabled();
            txtXO.innerHTML = '<span>O</span> wins!'
            buttonTwo.style.color = 'rgb(192, 10, 10)'; 
            buttonFive.style.color = 'rgb(192, 10, 10)'; 
            buttonEight.style.color = 'rgb(192, 10, 10)';
    } 
        
            
}



// function isOWin () {
//     if(
//         buttonZero.innerHTML =='O' 
//         && buttonOne.innerHTML == 'O'
//         && buttonTwo.innerHTML == 'O') {
//             buttonsDisabled();
//             txtXO.innerHTML = '<span>O</span> wins!'
            
//     } else if (
//         buttonThree.innerHTML =='O' 
//         && buttonFour.innerHTML == 'O'
//         && buttonFive.innerHTML == 'O' 
//     ) {
//         buttonsDisabled();
//         txtXO.innerHTML = '<span>O</span> wins!'
//     } else if (
//         buttonSix.innerHTML =='O' 
//         && buttonSeven.innerHTML == 'O'
//         && buttonEight.innerHTML == 'O' 
//         ) {
//             buttonsDisabled();
//             txtXO.innerHTML = '<span>O</span> wins!'
//     } else if (
//         buttonZero.innerHTML =='O' 
//         && buttonFour.innerHTML == 'O'
//         && buttonEight.innerHTML == 'O' 
//         ) {
//             buttonsDisabled();
//             txtXO.innerHTML = '<span>O</span> wins!'
//     } else if (
//         buttonTwo.innerHTML =='O' 
//         && buttonFour.innerHTML == 'O'
//         && buttonSix.innerHTML == 'O' 
//         ) {
//             buttonsDisabled();
//             txtXO.innerHTML = '<span>O</span> wins!'
//     } else if (
//         buttonZero.innerHTML =='O' 
//         && buttonThree.innerHTML == 'O'
//         && buttonSix.innerHTML == 'O' 
//         ) {
//             buttonsDisabled();
//             txtXO.innerHTML = '<span>O</span> wins!'
//     } else if (
//         buttonOne.innerHTML =='O' 
//         && buttonFour.innerHTML == 'O'
//         && buttonSeven.innerHTML == 'O' 
//         ) {
//             buttonsDisabled();
//             txtXO.innerHTML = '<span>O</span> wins!'
//     } else if (
//         buttonTwo.innerHTML =='O' 
//         && buttonFive.innerHTML == 'O'
//         && buttonEight.innerHTML == 'O' 
//         ) {
//             buttonsDisabled();
//             txtXO.innerHTML = '<span>O</span> wins!'
//     } 
        
            
// }













        // buttonZero
        // buttonOne
        // buttonTwo
        // buttonThree
        // buttonFour
        // buttonFive
        // buttonSix
        // buttonSeven
        // buttonEight