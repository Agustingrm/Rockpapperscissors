//Possible options for Computer
let optionsarray = ['rock','papper','scissors'];

//Chose a position inside the array
//Random number 0, 1 or 2 (random position in array)
//Random Number between 0 and 2
//Random Number

function computerplay() {
    var Computer = Math.floor(Math.random()*optionsarray.length);
    return optionsarray[Computer];
}

//Onclick, start game when rock is pressed
    const rock = document.querySelector('#rock');
    rock.addEventListener('click',() => {round('rock'); return},)
;
//Onclick, start game when papper is pressed
    const papper = document.querySelector('#papper');
    papper.addEventListener('click',() => {round('papper'); return},)
;
//Onclick, start game when scissors is pressed
    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click',() => {round('scissors'); return},)
;

//Counters
var Humani = 0;
var Computerj = 0;

//Shows 0 at the star of the game
document.getElementById('humanScore').innerHTML = Humani;
document.getElementById('computerScore').innerHTML = Computerj;

//Each round
function round(string){
    //Execute Humanplay and asign
    var Human = string;
    //Execute Computerplay
    var Computer = computerplay();
    //If Human && Choose the same
    if (Humani == 5){return}
    if (Computerj == 5){return}
    if (Human == Computer)
    {
        var result = "Oh! It's a Tie!"
    }
    //If Human Choose Rock && Computer Choose Paper)
    if (Human == 'rock' && Computer == 'papper')
    {
        Computerj++;
        var result = 'Machine Choose Papper. You lose. Good Luck next time';
        
    }
    //If Human Choose Rock && Computer Choose Scissors)
    if (Human == 'rock' && Computer == 'scissors')
    {
        Humani++;
        var result = 'Machine Choose Scissors. You win!. Good for you';
        
    }
    //If Human Choose Papper && Computer Choose Rock)
    if (Human == 'papper' && Computer == 'rock')
    {   
        Humani++;
        var result = 'Machine Choose Rock. You win!. Good for you!';
       
    }
    //If Human Choose Papper && Computer Choose Scissors)
    if (Human == 'papper' && Computer == 'scissors')
    {   
        Computerj++;
        var result ='Machine Choose Scissors. You lose. Good Luck next time!';
        
    }
    //If Human Choose Scissors && Computer Choose Rock)
    if (Human == 'scissors' && Computer == 'rock')
    {
        Computerj++;
        var result = 'Machine Choose Rock. You lose. Good Luck next time!';
        
    }
    //If Human Choose Scissors && Computer Choose Paper)
    if (Human == 'scissors' && Computer == 'papper')
    {   
        Humani++;
        var result = 'Machine Choose Papper. You win!. Good for you!';
    }
    if (Humani == 5)
    {
    var result = 'You win! Congratulations!';
    document.getElementById('humanScore').innerHTML = Humani;
    document.getElementById('computerScore').innerHTML = Computerj;
    document.getElementById('textOutcome').innerHTML = result;
    document.getElementById('newGameCenter').style.display = 'flex';
    return;
    }
    if (Computerj == 5)
    {
    var result = 'You Lose. Try Again'
    document.getElementById('humanScore').innerHTML = Humani;
    document.getElementById('computerScore').innerHTML = Computerj;
    document.getElementById('textOutcome').innerHTML = result;
    //Makes New Game button Visible
    document.getElementById('newGameCenter').style.display = 'flex';
    return;
    }
    console.log('Human: ' +Humani + ' - Computer: '+Computerj);
    document.getElementById('humanScore').innerHTML = Humani;
    document.getElementById('computerScore').innerHTML = Computerj;
    document.getElementById('textOutcome').innerHTML = result;
    return;
};

//Allows New game
newGame.addEventListener('click', function () {
    window.location.reload();
  });