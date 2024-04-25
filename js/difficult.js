const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
answer.value.toLowerCase();
const progressText = document.querySelector('.questionHead');
const scoreText = document.querySelector('.score');
const timeText = document.querySelector('.time')
const alertBox = document.getElementById('alert-box');
const totalScoreText = document.getElementById('totalScore');
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];
let timeLeft = 120;




const questions = [
    {
      question: 'How many ancestors will Memay have on the 4th generation if there are 7 generations preceding her?' ,
      answer: ['16 ancestors', '16', '16ancestors']
  
    },
    {
        question: 'If the cell divides every 30 minutes. How many cells are there in 4.5 hours?' ,
        answer: ['512 cells','512','512cells']
    
      },
      {
        question: 'A rubber ball is dropped on a hard surface from a height of 80ft and bounces up and down. On each rebound, it bounces up exactly one-half the distance it just came down. How far will the ball have traveled if you catch it after it reaches the top of the seventh bounce?' ,

        answer:  ['1905ft/8', '238.13 ft', '1905/8', '238.13', '238.13ft']
      },
      {
        question: 'A conference hall has 20 rows of seats. The first row contains 20 seats, the second row contains 22 seats, the third row contains 24 seats, and so on. How many seats are there in the last row?' ,
        answer: ['58 seats', '58', '58seats']
    
      },
      {
        question: 'In the popular Christmas song "12 Days of Christmas", how many gifts are given on the 12th day of Christmas?',
        answer: ['78 gifts', '78', '78gifts']
    
      },
      {
        question: "Sisar took a job with a starting hourly wage of 3.50 pesos and is promised a raise of 5 pesos per hour every 2 months for 5 years. At the end of 5 years, what would be Sisar's hourly wage?" ,

        answer: ['153.50 pesos','153.50','153,50pesos'   ]
      },
      {
        question: "Suppose Gru saves 100 pesos in January, and each month thereafter, he manages to save one-half more than of what he saved the previous month. How much is Gru's savings after May?" ,
        answer: ['1318.75 pesos','1318.75','1318.75pesos']
    
      },
      {
        question: 'A town with a current population of 100000 citizens is growing at a rate of 2% per year. What the population of the town 5 years from now?' ,
        answer: ['110408 citizens','110408','110408citizens']
    
      }

]

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

checkEmptyAnswer = () => {
  if(answer.value.trim() === ''){
    alert('Please answer to proceed');
    answer.focus();
    return true;
  }
  return false;
}

checkAnswer = (e) => {
  if(checkEmptyAnswer()) return;
if (!acceptingAnswers) return;

acceptingAnswers = false;
const answerValue = e.target.value;

if (currentQuestion.answer.includes(answerValue)) {
  e.target.classList.add('correct');
  score += SCORE_POINTS;
  scoreText.innerText = `${score}`;
}else{
  e.target.classList.add('incorrect');
}
setTimeout(()=>{
  answer.classList.remove('correct', 'incorrect');
  if (questionCounter < MAX_QUESTIONS) {
    getNewQuestion();
  } else if(questionCounter === MAX_QUESTIONS){
      alertBox.style.display = 'flex';
      totalScoreText.innerText = score;
  }else {
    saveScore()
    
  }
  acceptingAnswers = true;
}, 1000);   

};

let lastQuestionIndex = -1; 

getNewQuestion = () => {
      if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        saveScore();
        return window.location.assign('/score.html');
      }

      let questionIndex;
        do {
          questionIndex = Math.floor(Math.random() * availableQuestions.length);
        } while (questionIndex === lastQuestionIndex); 

      lastQuestionIndex = questionIndex; 

      currentQuestion = availableQuestions[questionIndex];
      question.innerText = currentQuestion.question;
      answer.value = '';
      acceptingAnswers = true;

      availableQuestions.splice(questionIndex, 1);

      questionCounter++;
      progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
      timeLeft = 120;
};
saveScore = () => {
  localStorage.setItem('difficultTotalScore', score);
}
function showCongratsMessage() {
  alertBox.style.display = 'flex';
  totalScoreText.innerText = score;
  
}
 function proceedToFinalScore(){ window.location.assign('/score.html')
}
startGame();

answer.addEventListener('keydown', (e) => {
if (e.key === 'Enter') {
  checkAnswer(e);

  if(e.target.classList.contains('incorrect')){
    e.target.style.backgroundColor = 'red';
  }else if(e.target.classList.contains('correct')){
    e.target.style.backgroundColor = 'green';
  }
  setTimeout(()=>{  
    e.target.style.backgroundColor = '';
  }, 1000);
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


