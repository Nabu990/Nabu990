// questions 
const questions = [
    {
        question: "What is the difference between div and article element?",
        answers:[
            { text: "They do the same thing", correct: true },
            { text: "Article have section and div don't", correct: false },
            { text: "div define a new Idea", correct: false },
            { text: " B and C", correct: false },
        ]
    },
    {
        question: "How can you make a image a link?",
        answers:[
            { text: "Add the anger tag in the img element", correct: false },
            { text: "Add the img element in the anger element", correct: true },
            { text: "Create a new element", correct: false },
            { text: "change the text-decoration", correct: false },
        ]
    },
    {
        question: "What is the use of the hr element?",
        answers:[
            { text: "create a vertical line", correct: false },
            { text: "create a circle in a element", correct: false },
            { text: "Link you to a new page", correct: true },
            { text: "Change the width of an element", correct: false },
        ]
    },
    {
        question: "What can the img tag do?",
        answers:[
            { text: "Make an element bigger", correct: false },
            { text: "Add an image to the page", correct: true },
            { text: "Make the image have a round border", correct: false },
            { text: "Make the image bigger", correct: false },
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

