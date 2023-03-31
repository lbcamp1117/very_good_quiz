var quizContainer = documentgetElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


var myQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctAnswer: "parentheses"}
        ,{
            question: "Arrays in JavaScript can be used to store ____.",
            answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
            correctAnswer: "all of the above"
        }


];




function generateQuiz(questions, quizContainer, resultsContainer,submitButton) {
    function showResults(questions, quizContainer, resultsContainer){
        var results = [];
        for (var i = 0; i < questions.length; i++) {
            results.push(questions[i].answer);
        }
        resultsContainer.innerHTML = "";
        for (var i = 0; i < results.length; i++) {
            var li = document.createElement("li");
            li.textContent = results[i];
            resultsContainer.appendChild(li);
        }
    }
    function showQuestion(question, quizContainer, resultsContainer){
    var output = [];
    var answers;

    for (var i = 0; i < question.answers.length; i++) {
        answers = document.createElement("button");
        answers.textContent = question.answers[i];
        output.push(answers);
    }
    for(letter in questions[i].answers){

        '<label>'
        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
        + letter + ': '
        + questions[i].answers[letter]
    + '</label>'
;
    }
    output.push(
        'div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
    );
showQuestion(questions, quizContainer);

submitButoon.onclick = function() {
    showResults(questions, quizContainer, resultsContainer);
    }
quizContainer.innerHTML = output.join('');
}

function showResults(questions, quizContainer, resultsContainer)}

var answersContainers = quizContainer.querySelectorAll(".answers");

var userAnswers = '';
var numCorrect = 0;

for (var i=0; i < answersContainers.length; i++) {

    userAnswers = (answersContainers[i].querySelector('input[name="question'+i+'"]:checked')||{}).value;
if(userAnswers === questions[i].correctAnswer){
    numCorrect++;
    answersContainers[i].style.color = "blue";

}
else{
    answersContainers[i].style.color = "orange";
    }
}    

resultsContainer.innerHTML = "You got " + numCorrect + " out of " + questions.length;

submitButton.onclick = function() {
    showResults(questions, quizContainer, resultsContainer);}
