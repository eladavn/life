import * as ndarray from 'ndarray';

export function getNextGen(currGen : ndarray<boolean> ) : ndarray<boolean> | Error {

    return (
        currGen.dimension > 2 ?
            new Error('Should be called with less than 3 dimensions') :
            ndarray(currGen.data.slice(), currGen.shape)
    );
}