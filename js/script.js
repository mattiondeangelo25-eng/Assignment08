console.log("script.js connected!");

document.addEventListener('DOMContentLoaded', () => {
    // Stores all user answers: {questionId: points}
    const userAnswers = {};

    // 1. Select all question blocks
    const questions = document.querySelectorAll('.question-block');

    questions.forEach(question => {
        const buttons = question.querySelectorAll('.answer-btn');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Toggles "selected" visual state
                buttons.forEach(btn => btn.classList.remove('active', 'btn-primary'));
                buttons.forEach(btn => btn.classList.add('btn-outline-primary'));
                
                button.classList.add('active', 'btn-primary');
                button.classList.remove('btn-outline-primary');

                // Stores the user's points
                const qId = question.getAttribute('data-question-id');
                const points = parseInt(button.getAttribute('data-points'));
                userAnswers[qId] = points;
                
                console.log(userAnswers); // Test to verify storage
            });
        });
    });

    // 2. Calculation Logic
    const resultBtn = document.getElementById('result-btn');
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');

    resultBtn.addEventListener('click', () => {
        // Calculate total score
        let totalScore = 0;
        for (let qId in userAnswers) {
            totalScore += userAnswers[qId];
        }

        // Determine result based on points
        let category = "";
        if (totalScore >= 4 && totalScore <= 6) category = "Explorer";
        else if (totalScore >= 7 && totalScore <= 9) category = "Artist";
        else if (totalScore >= 10 && totalScore <= 12) category = "Leader";
        else if (totalScore >= 13 && totalScore <= 16) category = "Thinker";
        else category = "Please answer all questions.";

        // Update UI
        resultText.textContent = `You are: ${category} (Score: ${totalScore})`;
        resultContainer.style.display = 'block';
    });
});
