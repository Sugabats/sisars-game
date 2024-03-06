
const question = document.querySelector('.question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('.questionHead')
const scoreText = document.querySelector('.score')
const timeText = document.querySelector('.time');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
let timeLeft = 30
let timerInterval


let questions = [
    {
        question: 'Which of the following defines the sequence 0, 1, 1, 2, 3, 5, ...?',
        choice1:'a. Arithmetic Sequence',
        choice2:'b. Fibonacci Sequence',
        choice3:'c. Geometric Sequence',
        choice4:'d. Harmonic Sequence',
        answer:1,
        
    },
    {
        question:'Which of the following defines the sequence -6, 18, -54, 162, ...?',		
        choice1:'a. Arithmetic Sequence',
        choice2:'b.Fibonacci Sequence',
        choice3:'c. Geometric Sequence',
        choice4:'d. Harmonic Sequence',
        answer:3,
    
    },
    {
        question: 'Which of the following defines the sequence 98, 49, 24.5, 12.25, ...?',
        choice1:'a. Arithmetic Sequence',
        choice2:'b. Fibonacci Sequence',
        choice3:'c. Geometric Sequence',
        choice4:'d. Harmonic Sequence',
        answer:3,
     
    },
    
    {
        question: 'Which of the following defines the sequence 1/3, 1/9, 1/27, 1/81, ...?',
        choice1:'a. Arithmetic Sequence',
        choice2:'b. Fibonacci Sequence',
        choice3:'c. Geometric Sequence',
        choice4:'d. Harmonic Sequence',
        answer:3,
    
    },
    {
        question: 'Which of the following defines the sequence -168, -109, -50, 9, 68, ...?',
        choice1:'a. Arithmetic Sequence',
        choice2:'b. Fibonacci Sequence',
        choice3:'c. Geometric Sequence',
        choice4:'d. Harmonic Sequence',
        answer:1,
    
    },
    {
        question: 'Which of the following defines the sequence 2, -4, 8, -16, ...?',
        choice1:'a. Arithmetic Sequence',
        choice2:'b. Fibonacci Sequence',
        choice3:'c. Geometric Sequence',
        choice4:'d. Harmonic Sequence',
        answer:3,
    
    },
    {
        question: 'Which of the following defines the sequence 12, 25, 38, 51, ...?',
        choice1:'a. Arithmetic Sequence',
        choice2:'b. Fibonacci Sequence',
        choice3:'c. Geometric Sequence',
        choice4:'d. Harmonic Sequence',
        answer:1,
    
    },
    {
        question: 'Which of the following defines the sequence 102, 34, 34/3, 34/9 ...?',
        choice1:'a. Arithmetic Sequence',
        choice2:'b. Fibonacci Sequence',
        choice3:'c. Geometric Sequence',
        choice4:'d. Harmonic Sequence',
        answer:3,
    
    },
    {
        question: 'Which of the following defines the sequence 1/5, 1/10, 1/15,1/20,1/25, ...?',
        choice1:'a. Arithmetic Sequence',
        choice2:'b. Fibonacci Sequence',
        choice3:'c. Geometric Sequence',
        choice4:'d. Harmonic Sequence',
        answer:4,
    
    },
    {
        question: 'Which of the following defines the sequence 1, 5, 9, 13, 17, 21, 25, 29, 33, ...?',
        choice1:'a. Arithmetic Sequence',
        choice2:'b. Fibonacci Sequence',
        choice3:'c. Geometric Sequence',
        choice4:'d. Harmonic Sequence',
        answer:1,
    
    },
    {
        question: 'Which of the following defines the sequence -168, -109, -50, 9, 68, ...?',
        choice1:'a. Arithmetic Sequence',
        choice2:'b. Fibonacci Sequence',
        choice3:'c. Geometric Sequence',
        choice4:'d. Harmonic Sequence',
        answer:1,
    
    },
    {
        question: 'A sequence in which each term is obtained by multiplying the preceding term by a constant is called a/an ______.',

        choice1:'a. Arithmetic Sequence',
        choice2:'b. Fibonacci Sequence',
        choice3:'c. Geometric Sequence',
        choice4:'d. Harmonic Sequence',
        answer:3,
    
    },
    {
        question: 'The indicated sum of a geometric sequence is called _____.   ',
        choice1:'a. common ratio',
        choice2:'b. geometric mean',
        choice3:'c. geometric series',
        choice4:'d. pattern rule',
        answer:3,
    
    },
    {
        question: 'A sequence whose consecutive terms have a common difference is a/an ___. ',
        choice1:'a. Arithmetic Sequence',
        choice2:'b. Fibonacci Sequence',
        choice3:'c. Geometric Sequence',
        choice4:'d. Harmonic Sequence',
        answer:1,
    
    },
    {
        question: 'A sequence which formed by taking the reciprocals of every term in an arithmetic sequence.',
        choice1:'a. Arithmetic Sequence',
        choice2:'b. Fibonacci Sequence',
        choice3:'c. Geometric Sequence',
        choice4:'d. Harmonic Sequence',
        answer:4,
    
    },
    {
        question: 'It is called a chain of numbers (or other objects) that usually follow a particular pattern. ',
        choice1:'a. pattern',
        choice2:'b. pattern rule',
        choice3:'c. sequence',
        choice4:'d. series',
        answer:3,
    
    },
    {
        question: 'It is a repeated arrangement of numbers, shapes, colors and so on. It is called _____.',
        choice1:'a. pattern',
        choice2:'b. pattern rule',
        choice3:'c. sequence',
        choice4:'d. series',
        answer:1,
    
    },
    {
        question: 'The indicated sum of an arithmetic sequence is called _____.',
        choice1:'a. common difference',
        choice2:'b. arithmetic mean',
        choice3:'c. arithmetic series',
        choice4:'d. pattern rule',
        answer:3,
    
    },
    {
        question: 'It is the constant number multiplied to a term to obtain the next term.',
        choice1:'a. common difference',
        choice2:'b. common ratio',
        choice3:'c. pattern',
        choice4:'d. pattern rule',
        answer:2,
    
    },
  
    {
        question: 'It is the constant number added to a term of a sequence to obtain the next term.',
        choice1:'a. common difference',
        choice2:'b. common ratio',
        choice3:'c. pattern',
        choice4:'d. pattern rule',
        answer:1, 
        
    },
    {
        question: 'A sequence in which each number is the sum of the two preceding ones is called _______.',
        choice1:'a. Arithmetic Sequence',
        choice2:'b. Fibonacci Sequence',
        choice3:'c. Geometric Sequence',
        choice4:'d. Harmonic Sequence',
        answer:2,
    
    }
]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 5;

function delayGameStart() {
    setTimeout(() => {
        startGame()
    }, 3000)
}

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion()
    startTimer()
}



getNewQuestion = () => {
    clearInterval(timerInterval);
    timeLeft = 30;
    timeText.innerText = timeLeft;
   
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        saveScore()
        

    return window.location.assign('/average.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true 
}


function startTimer() {
    timeLeft = 30;
    timeText.innerText = timeLeft;
    const timer = setInterval(() => {
        if (timeLeft > 0 && acceptingAnswers) {
            timeLeft--;
            timeText.innerText = timeLeft;
        } else {
            clearInterval(timerInterval);
            if (acceptingAnswers) {
                acceptingAnswers = false;
                getNewQuestion();
            }
        }
    }, 1000);
}

    choices.forEach(choice => {
        choice.addEventListener('click', e =>{
            if(!acceptingAnswers) return

            acceptingAnswers = false
            const selectedChoice = e.target
            const selectedAnswer = selectedChoice.dataset['number']

            let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

            if(classToApply === 'correct'){
                incrementScore(SCORE_POINTS);
            }

            selectedChoice.parentElement.classList.add(classToApply)

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply)
                getNewQuestion()

            }, 1000);
        })
    })


    incrementScore = num => {
        score += num
        scoreText.innerText = score
    }

    
    saveScore = () => {
        localStorage.setItem('easyTotalScore', score);
    }

    startGame()



