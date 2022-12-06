
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
var score = 0
var sub = document.getElementById('submit');
var Output = [];
var Name = document.getElementById('initials')
var leaderboard = [];

var displayQuestion = function () {
    questionIndex = questionIndex + 1
    console.log(questionIndex, seconds)
    if ((questionIndex === 4) || (seconds < 0)) {
        highscore()
    } else {

        for (m = 1; m < 5; m++) {
            if (document.contains(document.getElementById("button" + m))) {
                document.getElementById("button" + m).remove()
            }
        }
        var but = [];
        for (var i = 1; i < 5; i++) {
            console.log(i)
            but[i] = document.createElement('button');
            but[i].id = ('button' + i);
            but[i].className += 'button';
            but[i].innerText = queries[questionIndex].options[i - 1];
            document.getElementById('choices').appendChild(but[i]);
        }
        // change question
        questiontitle.innerText = (queries[questionIndex].query);
        setTimeout(myFunction, 10000);
    }
}
// listen for starter click, hide old data, loop to create 4 new buttons with answers from questions.js on 1st question all in same function
btn.addEventListener('click', function (event) {

    event.stopPropagation();
    timer = setInterval(function () {
        document.getElementById('time').innerText = seconds
        seconds--;
        if (seconds === 0) {
            clearTimeout(timer);
            feed.innerText("time up")
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
    console.log('here')
    if (event.target.innerText === queries[questionIndex].answer) {

        feed.innerText = 'Correct'

    } else {
        feed.innerText = 'Wrong Answer 10 seconds deducted'
        seconds = seconds - 10
    }
    displayQuestion()
})

function myFunction(seconds) {

    feed.innerText = 'Time Up 10 seconds deducted'
    seconds = seconds - 10
    displayQuestion()
}

function highscore() {
    questiontitle.setAttribute('style', 'display: none;');
    choices.setAttribute('style', 'display: none;');
    end.classList.remove('hide');
    finalScore.innerText = seconds
    score = finalScore.innerText
    document.getElementById('time').setAttribute('style', 'display: none;');
    feed.setAttribute('style', 'display: none;');

    sub.addEventListener('click', function (event) {
        event.stopPropagation();
        Output = [initials.value, score]
        console.log(Output)
        localStorage.setItem('Output', JSON.stringify(Output));
        window.location = "highscores.html";

    })

}