
var highScores = JSON.parse(localStorage.getItem('highestScores')) || [];

otherLine = [];
console.log(highScores.length)
if (highScores.length > 0) {
    for (i = 0; i < highScores.length; i++) {
        otherLine[i] = document.createElement('li');
        otherLine[i].id = ('li' + i);
        otherLine[i].className += 'li';
        otherLine[i].innerText = 'Name: ' + highScores[i].initials + ' Score: ' + highScores[i].score
        document.getElementById('highscores').appendChild(otherLine[i]);

    }
}

var clear = document.getElementById('clear');

clear.addEventListener('click', function (event) {
    event.stopPropagation
    localStorage.clear();
    document.getElementById('highscores').innerHTML = '';
})
