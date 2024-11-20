import { initWordAdder, popList } from "./wordAdder.mts";

const wordCounts: { [key: string]: number } = {}
const updateWordCounts = (words: string[]) => words.forEach(word => wordCounts[word] = word in wordCounts ? wordCounts[word] + 1 : 1);

const gratitudeWords = [ "Family", "Friends", "Health", "Love", "Food", "Shelter", "Happiness", "Freedom", "Nature", "Life", "Family", "Friends", "Health", "Love", "Support", "Kindness", "Opportunities", "Education", "Memories", "Community", "Music", "Laughter", "Comfort", "Peace", "Adventure", "Sunshine", "Time", "Pets", "Dreams", "Books", "Hope", "Wisdom", "Family", "Friends", "Health", "Love", "Food", "Shelter", "Happiness", "Gratitude", "Healing", "Growth", "Faith", "Art", "Technology", "Kindness", "Nature", "Family", "Friends", "Health" ];

function initGratitudeTracker() {
    initWordAdder();
    updateWordCounts(gratitudeWords); // FOR DEBUGGING -- REMOVE LATER
    (document.getElementById('gratitude-submit') as HTMLButtonElement).addEventListener('click', updateGratitudeList)
}

function updateGratitudeList() {
    updateWordCounts(popList());
}

export { wordCounts, initGratitudeTracker, updateGratitudeList }