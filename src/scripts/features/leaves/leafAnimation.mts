import { leaves } from "./leaves.mts";
import { newSeed, choice } from "../../utility/random.mts";
import { leafsvg } from "../../templates/gratitude.mts";

const leafContainer = document.getElementById("leaf-area") as HTMLDivElement;
const rnd = newSeed("Thankgiving is Yum")

const halfBoundaryWidth = 700 / 2; // Leaf X rnd area

function initLeafAnimation() {
    setInterval(() => {
        const data = getRandomLeaf();
        if (data === null) return;
        const [leaf, fontSize] = data;
        animateLeaf(leaf, fontSize);
    }, 1000);
    
}

function animateLeaf(word: string, fontSize: number) {
    const leaf = document.createElement("div");
    
    leaf.insertAdjacentHTML("beforeend", leafsvg()); // Add img
    
    const leafText = document.createElement("span");
    leafText.innerText = word;
    leaf.insertAdjacentElement("beforeend", leafText);
    
    leaf.classList.add(`leaf-${choice(["yellow", "red", "brown", "orange"])}`)
    leaf.style.fontSize = `${fontSize}px`;
    leaf.style.width = `${6 * fontSize}px`;
    leaf.style.height = `${6 * fontSize}px`;
    leaf.style.left = `${getRandomXPosition()}px`;
    leaf.style.animation = choice(["swayFall 5s linear forwards", "swayFall 8s linear forwards", "bigSway 8s linear forwards", "straightFall 2.5s linear forwards", "propellerFall 4s linear forwards"])
    
    leafContainer.appendChild(leaf);
    leaf.addEventListener("animationend", () => leaf.remove());
}

function getRandomLeaf(): [string, number] | null {
    if (!leaves.length) return null;
    return leaves[Math.floor(rnd() * leaves.length)]; 
}

function getRandomXPosition(): number {
    const containerWidth = leafContainer.offsetWidth;
    const center = containerWidth / 2; // Find the center of the container

    const leftBoundary = Math.max(0, center - halfBoundaryWidth);
    const rightBoundary = Math.min(containerWidth, center + halfBoundaryWidth);
    
    return rnd() * (rightBoundary - leftBoundary) + leftBoundary;
}

export { initLeafAnimation }