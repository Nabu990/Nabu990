// questions 
const questions = [
    {
        question: "Which of the following is the correct way to declare a variable in JavaScript?",
        answers:[
            { text: "let variableName = 10;", correct: true },
            { text: "int variableName = 10;", correct: false },
            { text: "var variableName = 10;", correct: false },
            { text: "float variableName = 10", correct: false },
        ]
    },
    {
        question: "What will be the output of the following code? console.log(1 + '1' - 1)",
        answers:[
            { text: "10", correct: false },
            { text: " 11", correct: false },
            { text: "1", correct: true },
            { text: "NAN", correct: false },
        ]
    },
    {
        question: "What will be the result of the following code? console.log(!!'false')",
        answers:[
            { text: "false", correct:false },
            { text: "true", correct: true },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false },
        ]
    },
    {
        question: "What is the result of this expression? console.log('5' - 2)",
        answers:[
            { text: "3", correct: true },
            { text: "2", correct: false },
            { text: "6", correct: false },
            { text: "10", correct: false },
        ]
    }
];
// html element
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.innerText = `Score: ${score}`;
    nextButton.innerText = 'Next';
    questionContainerElement.classList.remove('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    nextButton.classList.add('hide');
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    if (isCorrect) {
        score++;
        scoreElement.innerText = `Score: ${score}`;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
    });
    nextButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert(`Quiz finished! Your score: ${score}`);
        startQuiz();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        nextQuestion();
    }
});

startQuiz();