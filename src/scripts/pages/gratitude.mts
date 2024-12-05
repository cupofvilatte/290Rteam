import { initLeafAnimation } from "../features/leaves/leafAnimation.mts";
import { clearLeafList, initGratitudeTracker, updateGratitudeList, updateWordCounts } from "../features/leaves/leaves.mts";

const starterWords = [ "family", "friends", "health", "love", "food", "shelter", "happiness", "freedom", "nature", "life", "family", "friends", "health", "love", "support", "kindness", "opportunities", "education", "memories", "community", "music", "laughter", "comfort", "peace", "adventure", "sunshine", "time", "pets", "dreams", "books", "hope", "wisdom", "family", "friends", "health", "love", "food", "shelter", "happiness", "gratitude", "healing", "growth", "faith", "art", "technology", "kindness", "nature", "family", "friends", "health" ];

(function renderPage() {
    updateWordCounts(starterWords); 
    initGratitudeTracker();
    initLeafAnimation();
})();

(function initListeners() {
    (document.getElementById("gratitude-submit") as HTMLButtonElement)
        .addEventListener('click', updateGratitudeList);
    (document.getElementById("clear-list") as HTMLButtonElement)
        .addEventListener('click', clearLeafList)
})();




