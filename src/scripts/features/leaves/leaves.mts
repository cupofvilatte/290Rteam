import { initWordAdder, popList } from "./wordAdder.mts";

const leaves: [string, number][] = []
const wordCounts: { [key: string]: number } = {}
const updateWordCounts = (words: string[]) => words.forEach(word => wordCounts[word] = word in wordCounts ? wordCounts[word] + 1 : 1);

// For Testing
const gratitudeWords = [ "Family", "Friends", "Health", "Love", "Food", "Shelter", "Happiness", "Freedom", "Nature", "Life", "Family", "Friends", "Health", "Love", "Support", "Kindness", "Opportunities", "Education", "Memories", "Community", "Music", "Laughter", "Comfort", "Peace", "Adventure", "Sunshine", "Time", "Pets", "Dreams", "Books", "Hope", "Wisdom", "Family", "Friends", "Health", "Love", "Food", "Shelter", "Happiness", "Gratitude", "Healing", "Growth", "Faith", "Art", "Technology", "Kindness", "Nature", "Family", "Friends", "Health" ];

function initGratitudeTracker() {
    initWordAdder();
    updateWordCounts(gratitudeWords); // FOR DEBUGGING -- REMOVE LATER
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


// Leaf Font Size
const minFont = 16;
const maxFont = 30;
const calcFontSize = (wordFrequency: number, minFreq: number, maxFreq: number) => minFont + (wordFrequency - minFreq) / (maxFreq - minFreq) * (maxFont - minFont);


export { leaves, initGratitudeTracker, updateGratitudeList }