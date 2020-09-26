var scores, roundScore, activeParticipant, dice;
newGame();

document.querySelector('.btn-roll').addEventListener('click', function rollButton() {
    // 1.Display random number once button has been clicked
    // Using the math object to generate a random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2.Display the result
    var diceValue = document.querySelector('.dice');
    diceValue.style.display = 'block';
    // changing image of an image element
    diceValue.src = 'dice-' + dice + '.png';

    // 3.Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activeParticipant).textContent = roundScore; 
    } else {
        // Next participant
        nextParticipant();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // Adding participant's current score to the global score once participant clicks on the hold button
    scores[activeParticipant] += roundScore;
    // Update the Game's User Interface
    document.querySelector('#score-' + activeParticipant).textContent = scores[activeParticipant];
    // Toggle the active class to the next participant once active participant clicks on hold button

    // Check if the participant won the game
    if (scores[activeParticipant] >= 20) {
        document.querySelector('#name-' + activeParticipant).textContent = 'Winner!!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.participant-' + activeParticipant + '-panel').classList.add('winner');
        document.querySelector('.participant-' + activeParticipant + '-panel').classList.remove('active');
    } else {
        // Next participant
        nextParticipant();
    }
});

function nextParticipant() {
    activeParticipant === 0 ? activeParticipant = 1 : activeParticipant = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.participant-0-panel').classList.toggle('active');
    document.querySelector('.participant-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', newGame);

// Initializing new game
function newGame() {
    scores = [0, 0];
    activeParticipant = 0;
    roundScore = 0;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Participant 1';
    document.getElementById('name-1').textContent = 'Participant 2';
    // Removes active class from current winner after initializing new game
    document.querySelector('.participant-0-panel').classList.remove('winner');
    document.querySelector('.participant-1-panel').classList.remove('winner');
    document.querySelector('.participant-0-panel').classList.remove('active');
    document.querySelector('.participant-1-panel').classList.remove('active');
    document.querySelector('.participant-0-panel').classList.add('active');
}