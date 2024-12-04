import seedrandom from "seedrandom";

export function newSeed(seed: string): () => number {
    const rndGen = seedrandom(seed);
    return () => rndGen();
}