export function getNextGen(currGen : boolean[][] ) : boolean[][] {
    if (currGen.length === 0) {
        return [];
    }

    return [[false]];
}