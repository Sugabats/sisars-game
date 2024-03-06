document.addEventListener('DOMContentLoaded', function() {
    const difficultTotalScoreElement = document.getElementById('difficultTotalscore');
    const difficultTotalScore = localStorage.getItem('difficultTotalScore');
    if (difficultTotalScore) {
        difficultTotalScoreElement.innerText = difficultTotalScore;
    }
});