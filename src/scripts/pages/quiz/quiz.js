import questions from "../../../data/questions.json" with {type: "json"};

document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const resultsSpan = document.getElementById("myresults");
    const NUM_QUESTIONS = 5;

    // Randomly select 5 questions from the imported `questions`
    const selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, NUM_QUESTIONS);

    // Populate HTML with the questions
    selectedQuestions.forEach((q, index) => {
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        legend.textContent = `${index + 1}. ${q.question}`;
        fieldset.appendChild(legend);

        for (const [key, value] of Object.entries(q.options)) {
            const label = document.createElement("label");
            label.innerHTML = `
                <input type="radio" name="q${index + 1}" value="${key}" />
                ${key}) ${value}
            `;
            fieldset.appendChild(label);
            fieldset.appendChild(document.createElement("br"));
        }

        quizForm.insertBefore(fieldset, resultsSpan);
    });

    // Set correct answers
    globalThis.answers = selectedQuestions.map(q => q.answer);
    globalThis.tot = selectedQuestions.length;
});

function getCheckedValue(radioName) {
    const radios = document.getElementsByName(radioName);
    for (const radio of radios) {
        if (radio.checked) return radio.value;
    }
}

function getScore() {
    let score = 0;
    for (let i = 0; i < tot; i++) {
        if (getCheckedValue("q" + (i + 1)) === answers[i]) score += 1;
    }
    return score;
}

document.querySelector(".view-results").addEventListener('click', function returnScore() {
    const score = getScore();
    document.getElementById("myresults").innerHTML = `Your score is ${score}/${tot}`;
    if (score > 2) {
        console.log("Bravo");
    }
});
