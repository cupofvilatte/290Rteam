import { initLeafAnimation } from "../features/leaves/leaves.mts";
import { initGratitudeTracker, updateGratitudeList } from "../features/leaves/wordStore.mts";


(function renderPage() {
    // (document.querySelector('textarea') as HTMLTextAreaElement).innerText = '';
    initLeafAnimation();
})();

(function initListeners() {
    (document.getElementById("gratitude-submit") as HTMLButtonElement)
        .addEventListener('click', updateGratitudeList);
    initGratitudeTracker();

})();




