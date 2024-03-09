document.addEventListener('DOMContentLoaded', function() {
    const difficultTotalScoreElement = document.getElementById('difficultTotalscore');
    const difficultTotalScore = localStorage.getItem('difficultTotalScore');

  
    if (difficultTotalScoreElement && difficultTotalScore) {
        difficultTotalScoreElement.innerText = difficultTotalScore;
    }
});