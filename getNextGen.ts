import * as ndarray from 'ndarray';

export function getNextGen(currGen : ndarray<boolean> ) : ndarray<boolean> {
    if (currGen.data.length === 0) {
        return ndarray<boolean>([]);
    }

    return ndarray<boolean>([false]);
}