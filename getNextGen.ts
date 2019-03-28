import * as ndarray from 'ndarray';

export function getNextGen(currGen : ndarray<boolean> ) : ndarray<boolean> {

    if (currGen.dimension > 2) {
        throw new Error('Should be called with less than 3 dimensions');
    }

    return ndarray(currGen.data.slice(), currGen.shape);
}