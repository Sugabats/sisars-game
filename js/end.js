document.addEventListener('DOMContentLoaded', function() {
    const easyTotalScoreElement = document.getElementById('easyTotalscore');
    const easyTotalScore = localStorage.getItem('easyTotalScore');

    
    if (easyTotalScoreElement && easyTotalScore) {
        easyTotalScoreElement.innerText = easyTotalScore;
    }
});