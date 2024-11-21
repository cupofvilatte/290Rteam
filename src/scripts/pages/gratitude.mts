import { initLeafAnimation } from "../features/leaves/leafAnimation.mts";
import { initGratitudeTracker, updateGratitudeList } from "../features/leaves/leaves.mts";


(function renderPage() {
    initGratitudeTracker();
    initLeafAnimation();
    
    
})();

(function initListeners() {
    (document.getElementById("gratitude-submit") as HTMLButtonElement)
        .addEventListener('click', updateGratitudeList);

})();




