import seedrandom from "seedrandom";

export function newSeed(seed: string): () => number {
    const rndGen = seedrandom(seed);
    return () => rndGen();
}

export function choice<T>(array: T[]): T {
    if (array.length === 0) throw new Error("cannot select random element from empty array");
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}