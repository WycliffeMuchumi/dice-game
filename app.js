var scores, roundScore, activeParticipant, dice;
scores = [0,0];
roundScore = 0;
activeParticipant = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

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
        // Using the ternary operator
        activeParticipant === 0 ? activeParticipant = 1 : activeParticipant = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        // Following method toggles active class from current participant to next participant in line
        // after either of the participant rolls a 1
        document.querySelector('.participant-0-panel').classList.toggle('active');
        document.querySelector('.participant-1-panel').classList.toggle('active');
        // Hiding the dice when an active participant rolls a 1
        document.querySelector('.dice').style.display = 'none';
    }
});