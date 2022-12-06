
// set start for hiding original screen data, questions for setting next screen and choices as the parent of the new elements
var btn = document.getElementById('start');
var startpage = document.getElementById('start-screen');
var questions = document.getElementsByClassName('questions')
var questiontitle = document.getElementById('question-title')
var questionIndex = -1
var feed = document.getElementById('feedback')
var timming = document.getElementById('time')
var seconds = 60

var displayQuestion = function () {
    questionIndex = questionIndex + 1
    // if (questionIndex = 4) {

    // }

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

}
// listen for starter click, hide old data, loop to create 4 new buttons with answers from questions.js on 1st question all in same function
btn.addEventListener('click', function (event) {

    event.stopPropagation();
    startpage.setAttribute('style', 'display: none;');
    // remove the display none from items needed to display
    var element = document.getElementById('questions');
    element.classList.remove('hide');
    var element = document.getElementById('feedback');
    element.classList.remove('hide');
    // use the arrays on 1st question to add the question
    // loop through the creation of 4 buttons including the inner answers of question 1 append to the choices section
    displayQuestion()

})

//added extra buttons for capturing clicks and the screen feedback element
var choices = document.getElementById('choices');
choices.addEventListener('click', function (event) {
    setTimeout(myFunction, 10000);
    //document.getElementById('question-title').innerText= (queries[0].query)
    console.log('here')
    if (event.target.innerText === queries[questionIndex].answer) {

        feed.innerText = 'Correct'

    } else {
        feed.innerText = 'Wrong Answer'
    }
    displayQuestion()
})

function myFunction(seconds) {

    feed.innerText = 'Time Up 10 seconds deducted'
    seconds = seconds - 10
}
