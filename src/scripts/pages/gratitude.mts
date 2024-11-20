import { initLeafAnimation } from "../features/leaves/leaves.mts";
import { updateGratitudeList } from "../features/leaves/wordStore.mts";
import { initWordAdder } from "../features/leaves/wordAdder.mts";


(function renderPage() {
    // (document.querySelector('textarea') as HTMLTextAreaElement).innerText = '';
    initLeafAnimation();
})();

(function initListeners() {
    (document.getElementById("gratitude-submit") as HTMLButtonElement)
        .addEventListener('click', updateGratitudeList);
    initWordAdder();

})();




