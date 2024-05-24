window.onload = function() {
    let easyScore = localStorage.getItem('easyTotalScore');
    let averageScore = localStorage.getItem('averageTotalScore');
    let difficultScore = localStorage.getItem('difficultTotalScore');
  
    document.getElementById('easyTotalScore').innerText = easyScore;
    document.getElementById('averageTotalScore').innerText = averageScore;
    document.getElementById('difficultTotalScore').innerText = difficultScore;
  
    let totalScore = parseInt(easyScore) + parseInt(averageScore) + parseInt(difficultScore);
    document.getElementById('total_score').innerText = `Total: ${totalScore}`;
  }