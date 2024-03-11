let easyTotalScore = 0;
let averageTotalScore = 0;
let difficultTotalScore = 0;
let finalTotalScore = 0;

function displayFinalScore() {
  easyTotalScore = localStorage.getItem('easyTotalScore') || 0;
  averageTotalScore = localStorage.getItem('averageTotalScore') || 0;
  difficultTotalScore = localStorage.getItem('difficultTotalScore') || 0;

  easyTotalScoreNum = Number(easyTotalScore);
  averageTotalScoreNum = Number(averageTotalScore);
  difficultTotalScoreNum = Number(difficultTotalScore);

  finalTotalScore = easyTotalScoreNum + averageTotalScoreNum + difficultTotalScoreNum;
  const totalScoreDiv = document.querySelector('.total_score');
  totalScoreDiv.textContent = `Final Score: ${finalTotalScore}`;
}

displayFinalScore();

function resetScores() {
  localStorage.setItem('easyTotalScore', '0');
  localStorage.setItem('averageTotalScore', '0');
  localStorage.setItem('difficultTotalScore', '0');

  easyTotalScore = 0;
  averageTotalScore = 0;
  difficultTotalScore = 0;
  finalTotalScore = 0;

  displayFinalScore();
}

const resetButton = document.querySelector('#reset-button');
