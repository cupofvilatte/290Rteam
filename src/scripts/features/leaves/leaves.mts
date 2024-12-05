import { initWordAdder, popList } from "./wordAdder.mts";

const leaves: [string, number][] = []
const wordCounts: { [key: string]: number } = {}
const updateWordCounts = (words: string[]) => words.forEach(word => wordCounts[word] = word in wordCounts ? wordCounts[word] + 1 : 1);


function initGratitudeTracker() {
    initWordAdder();
    updateLeaves();
    (document.getElementById('gratitude-submit') as HTMLButtonElement).addEventListener('click', updateGratitudeList)
}

function updateGratitudeList() {
    updateWordCounts(popList());
    updateLeaves();
}

function updateLeaves() {
    const frequencies = Object.values(wordCounts)
    const minFreq = Math.min(...frequencies);
    const maxFreq = Math.max(...frequencies);
    const newLeaves = Object.entries(wordCounts).map(
        ([word, freq]) => [word, calcFontSize(freq, minFreq, maxFreq)] as [string, number]
    );
    leaves.splice(0, leaves.length, ...newLeaves);
}

function clearLeafList() {
    leaves.length = 0;
    Object.keys(wordCounts).forEach(key => delete wordCounts[key]);
}

// Leaf Font Size
const minFont = 16;
const maxFont = 26;
const calcFontSize = (wordFrequency: number, minFreq: number, maxFreq: number) => minFreq === maxFreq ? minFont : minFont + (wordFrequency - minFreq) / (maxFreq - minFreq) * (maxFont - minFont);


export { leaves, initGratitudeTracker, updateGratitudeList, clearLeafList, updateWordCounts }