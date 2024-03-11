const question = document.querySelector('#question');
const answer = document.querySelector('.answer');
answer.value.toLowerCase();
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
    answer: ['15', '-15']
  },
  {
    question: 'What is the sum of the first 6 terms in the sequence with the first term 1/2 and a common ratio of 4?',
    answer: ['1365/2', '682.5']

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
    question: 'What is the 3rd term of a geometric sequence with the 1st term 4 and the 5th term 64?',
    answer: '16',  
  }  
];

const SCORE_POINTS = 1
const MAX_QUESTIONS = 5 



startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]

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
    } else {
      saveScore()
      return window.location.assign('/difficult.html');
      
    }
    acceptingAnswers = true;
  }, 1000);
  
};
let lastQuestionIndex = -1; // Initialize lastQuestionIndex to -1

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
      timeLeft = 60;
};

saveScore = () => {
  localStorage.setItem('averageTotalScore', score);
  showCongratsMessage(score);
}

function showCongratsMessage(totalScore) {
  alert(`You have finished the Average Round with a score of ${totalScore} out of 5! \nHit okay to proceed to difficult round`)
  window.location.assign('/difficult.html')
}
startGame();

answer.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkAnswer(e);

    if(e.target.classList.contains('incorrect')){
      e.target.style.backgroundColor = 'red';
    } else if (e.target.classList.contains('correct')){
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





