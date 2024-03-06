const question = document.querySelector('#question');
const answer = document.querySelector('.answer').value.toLowerCase;
const progressText = document.querySelector('.questionHead');
const scoreText = document.querySelector('.score');
const timeText = document.querySelector('.time');


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0; 
let availableQuestions = [];
let timeLeft = 60;

const questions = [
  {
    question: 'What is the 8th term of the sequence 6, 18, 54, 162,...?',
    answer: '13122',

  },
  {
    question: 'How many terms are there in the sequence 6, 3, ..., 3/64?',
    answer: '8',

  },
  {
    question: 'What is the geometric mean of 3 and 75?',
    answer: '15', answer:'-15',

  },
  {
    question: 'What is the sum of the first 6 terms in the sequence with the first term 1/2 and a common ratio of 4?',

    answer: '1365/2', answer:'682.5',

  },
  {
    question: 'What is the arithmetic mean of 8 and -10.',
    answer: '-1',  
  },
  {
    question: 'What is the 11th term of the sequence 6, 4, 2, 0,...?',
    answer: '-14',  
  },
  {
    question: 'How many terms are there in the sequence 7, 10, ..., 37?',
    answer: '11',  
  },
  {
    question: 'What is the sum of the first 8 terms in the sequence 2, 7/2, 5, 13/2, ...?',
    answer: '58',  
  },
  {
    question: 'What is the 1st term of a sequence with the 5th term 31 and a common difference of 4?',
    answer: '15',  
  },
  {
    question: 'What is the 3rd term of a geometric sequence with the 1st term 4 and the 5th term 62?',
    answer: '16',  
  }
];

const SCORE_POINTS = 1
const MAX_QUESTIONS = 5 

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];

    setTimeout(() =>{
     getNewQuestion();
     timer();
    }, 3000);
   
    
};

checkAnswer = (e) => {
  if (!acceptingAnswers) return;

  acceptingAnswers = false;
  const answerValue = e.target.value;

  if (answerValue === currentQuestion.answer) {
    score += SCORE_POINTS;
    scoreText.innerText = `${score}`;
    
  }
  setTimeout(()=>{
    answer.classList.remove('correct', 'incorrect');
    if (questionCounter < MAX_QUESTIONS) {
      getNewQuestion();
    } else {
      saveScore()
      return window.location.assign('/difficult.html');
      
    }
    acceptingAnswers = true;
  }, 1000);
  
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    
    saveScore()
    return window.location.assign('/score.html');
  }

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  answer.value = '';
  acceptingAnswers = true;


  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  timeLeft = 60;
    
  
};

saveScore = () => {
  localStorage.setItem('averageTotalScore', score);
}
startGame();

answer.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkAnswer(e);
  }
});

function timer(){
  let timerInterval = setInterval(() =>{
    timeLeft--;
    timeText.innerText = timeLeft + ' s';
    if(timeLeft === 0){
        clearInterval(timerInterval);
        getNewQuestion();
        timer();
    }
  }, 1000);
}




