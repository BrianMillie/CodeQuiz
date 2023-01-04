
// set start for hiding original screen data, questions for setting next screen and choices as the parent of the new elements
var btn = document.getElementById('start');
var startpage = document.getElementById('start-screen');
var questions = document.getElementById('questions');
var questiontitle = document.getElementById('question-title');
var questionIndex = -1
var feed = document.getElementById('feedback');
var seconds = 60
var end = document.getElementById('end-screen');
var finalScore = document.getElementById('final-score');
var sub = document.getElementById('submit');
var initials = document.getElementById('initials')
var highScores = [];
var Output = ""
var previousOutput = [];
var item = [];
var newEntry = [];
var timer;

var displayQuestion = function () {
    questionIndex = questionIndex + 1
    if ((questionIndex >= queries.length) || (seconds < 0)) {
        highscore()
    } else {

        for (m = 1; m < 5; m++) {
            if (document.contains(document.getElementById("button" + m))) {
                document.getElementById("button" + m).remove()
            }
        }
        var but = [];
        for (var i = 1; i < 5; i++) {
            but[i] = document.createElement('button');
            but[i].id = ('button' + i);
            but[i].className += 'button';
            but[i].innerText = queries[questionIndex].options[i - 1];
            document.getElementById('choices').appendChild(but[i]);
        }
        // change question
        questiontitle.innerText = (queries[questionIndex].query);
        setTimeout(myFunction, 30000);
    }
}
// listen for starter click, hide old data, loop to create 4 new buttons with answers from questions.js on 1st question all in same function
btn.addEventListener('click', function (event) {

    event.stopPropagation();
    timer = setInterval(function () {
        document.getElementById('time').innerText = seconds
        seconds--;
        if (seconds < 0) {
            clearInterval(timer);
            document.getElementById('time').innerText = "Expired"
        }
    }, 1000);
    startpage.setAttribute('style', 'display: none;');
    // remove the display none from items needed to display
    questions.classList.remove('hide');
    feed.classList.remove('hide');

    //call 1st question to be displayed
    displayQuestion()

})

//added extra buttons for capturing clicks and the screen feedback element

var choices = document.getElementById('choices');
choices.addEventListener('click', function (event) {
    //document.getElementById('question-title').innerText= (queries[0].query)
    if (event.target.innerText === queries[questionIndex].answer) {

        feed.innerText = 'Correct'

    } else {
        feed.innerText = 'Wrong Answer 10 seconds deducted'
        seconds = seconds - 10
    }
    displayQuestion()
})

function myFunction() {

    feed.innerText = ''
}

function highscore() {
    clearInterval(timer);
    questiontitle.setAttribute('style', 'display: none;');
    choices.setAttribute('style', 'display: none;');
    end.classList.remove('hide');
    finalScore.innerText = seconds
    document.getElementById('time').setAttribute('style', 'display: none;');
    feed.setAttribute('style', 'display: none;');

    sub.addEventListener('click', function (event) {
        event.stopPropagation();
        var highestScores = JSON.parse(localStorage.getItem('highestScores')) || [];
        var high = {
            initials: initials.value,
            score: seconds
        }
        highestScores.push(high)
        localStorage.setItem('highestScores', JSON.stringify(highestScores))
        window.location = "highscores.html";
    })
}