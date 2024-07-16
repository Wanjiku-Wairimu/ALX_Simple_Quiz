// Define the checkAnswer function
function checkAnswer() {
    // The correct answer to the quiz question
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = "";
    if (selectedOption) {
        userAnswer = selectedOption.value;
    }

    // Get the feedback element
    const feedback = document.getElementById('feedback');

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);