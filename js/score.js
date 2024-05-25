window.onload = function() {
  let easyScore = localStorage.getItem('easyTotalScore');
  let averageScore = localStorage.getItem('averageTotalScore');
  let difficultScore = localStorage.getItem('difficultTotalScore');

  
  easyScore = easyScore === null ? 0 : parseInt(easyScore);
  averageScore = averageScore === null ? 0 : parseInt(averageScore);
  difficultScore = difficultScore === null ? 0 : parseInt(difficultScore);

  document.getElementById('easyTotalScore').innerText = easyScore;
  document.getElementById('averageTotalScore').innerText = averageScore;
  document.getElementById('difficultTotalScore').innerText = difficultScore;

  let totalScore = easyScore + averageScore + difficultScore;
  document.getElementById('total_score').innerText = `Total: ${totalScore}`;
}