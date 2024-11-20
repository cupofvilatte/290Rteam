import { wordCounts } from "./wordStore.mts";

// Leaf Animation Properties
const minFont = 10;
const maxFont = 24;




function initLeafAnimation() {
    
}



const calcFontSize = (wordFrequency: number, minFreq: number, maxFreq: number) => minFont + (wordFrequency - minFreq) / (maxFreq - minFreq) * (maxFont - minFont);


export { initLeafAnimation }