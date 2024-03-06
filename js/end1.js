document.addEventListener('DOMContentLoaded', function() {
    const averageTotalScoreElement = document.getElementById('averageTotalscore');
    const averageTotalScore = localStorage.getItem('averageTotalScore');
    if (averageTotalScore) {
        averageTotalScoreElement.innerText = averageTotalScore;
    }
});