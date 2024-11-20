import seedrandom from "seedrandom";

export function newSeed(seed: string): VoidFunction {
    const rndGen = seedrandom(seed);
    return () => rndGen();
}