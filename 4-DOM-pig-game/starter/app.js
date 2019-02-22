/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activePlayer, roundScore, gamePlaying;

var previousScore;
var dice1 = document.getElementById("dice-1");
var dice2 = document.getElementById("dice-2");


init();

//var dice;

//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>"


document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){
        setPreviousScore(previousScore);
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceSec = Math.floor(Math.random() * 6) + 1;
        //var diceDOM = document.querySelector(".dice");
        
        dice1.src="dice-" + dice + ".png";
        dice1.style.display = "block";    

        dice2.src="dice-" + diceSec + ".png";
        dice2.style.display = "block";    

        if (dice === previousScore){
            dropScore();
            nextPlayer();
            return;
        }

        if (dice >1 && diceSec >1){
            roundScore += dice + diceSec;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
            previousScore = dice + diceSec;            
        }        
        else{
            nextPlayer();
        }      
    
    } 
  
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    var scoreToWinValue = document.getElementById("score-to-win").value;

    if (gamePlaying){
        // Add Curent score to global score
        scores[activePlayer] += roundScore;

        // Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check id player won the game
        if (scores[activePlayer] >= scoreToWinValue){
            document.querySelector('#name-' +activePlayer).textContent = "Winner!";
            document.querySelector('.dice').style.display = 'none';
            // document.querySelector('.btn-roll').style.display = 'none';
            // document.querySelector('.btn-hold').style.display = 'none';        
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        }
        
        else{
            //next player
        nextPlayer();
        }
        
    }
});

document.querySelector('.btn-new').addEventListener('click', init); 

function nextPlayer(){
    roundScore = 0;        
        document.getElementById("current-0").textContent = '0';
        document.getElementById("current-1").textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        dice1.style.display = "none";
        dice2.style.display = "none";
        resetPreviousScore();    
}

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true; 
    previousScore = 0;
    scoreToWinValue = 20;


    dice1.style.display = "none";
    dice2.style.display = "none";

    // document.querySelector('.btn-roll').style.display = 'block';
    // document.querySelector('.btn-hold').style.display = 'block';

    document.getElementById("score-0").textContent = '0';
    document.getElementById("score-1").textContent = '0';
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
    
    document.getElementById("name-0").textContent = 'Player1';
    document.getElementById("name-1").textContent = 'Player2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    //************
    resetPreviousScore();
    document.getElementById("score-to-win").value = scoreToWinValue;    
}

function resetPreviousScore(){
    previousScore = 0;
    document.getElementById("previous-0").textContent = "0";
    document.getElementById("previous-1").textContent = "0";
}

function setPreviousScore(score){
    previousScore = score;
    document.getElementById("previous-" +  activePlayer).textContent = score;
}

function dropScore(){
    scores[activePlayer] = 0;
    document.getElementById("score-"+activePlayer).textContent = "%(";
}