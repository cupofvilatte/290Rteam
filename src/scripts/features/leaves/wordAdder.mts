import { addListItem } from "../../templates/gratitude.mts";

const wordInput = document.getElementById("gratitude-input") as HTMLButtonElement;
const wordList = document.querySelector('.gratitude-list') as HTMLOListElement

function initWordAdder() {
    (document.getElementById("add-word") as HTMLButtonElement)
        .addEventListener('click', addWord);
    wordInput.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === "Enter") addWord();
    });
    wordInput.addEventListener("click", () => wordInput.value = '')
}

function addWord() {
    addListItem(wordList, wordInput.value);
    wordInput.value = '';
}

export { initWordAdder }