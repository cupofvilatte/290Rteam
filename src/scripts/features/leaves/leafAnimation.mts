import { leaves } from "./leaves.mts";
import { newSeed } from "../../utility/random.mts";

const leafContainer = document.getElementById("leaf-area") as HTMLDivElement;
const rnd = newSeed("Thankgiving is Yum")

function initLeafAnimation() {
    setInterval(() => {
        const [leaf, fontSize] = getRandomLeaf();
        animateLeaf(leaf, fontSize);
    }, 1000);
    
}

function animateLeaf(word: string, fontSize: number) {
    const leaf = document.createElement("span");
    leaf.textContent = word;
    leaf.style.fontSize = `${fontSize}px`;
    leaf.style.left = `${getRandomXPosition()}px`;
    leafContainer.appendChild(leaf);
    leaf.addEventListener("animationend", () => leaf.remove());
}

function getRandomLeaf(): [string, number] {
    return leaves[Math.floor(rnd() * leaves.length)]; 
}

function getRandomXPosition(): number {
    const leftBoundary = leafContainer.offsetWidth * 0.2;  
    const rightBoundary = leafContainer.offsetWidth * 0.8; 
    return rnd() * (rightBoundary - leftBoundary) + leftBoundary;
}

export { initLeafAnimation }