import * as ndarray from 'ndarray';
import {List} from 'immutable';

export function getNextGen(currGen : ndarray<number> ) : ndarray<number> | Error {

    return (
        currGen.dimension > 2 ?
            new Error('Should be called with less than 3 dimensions') :
            getNextGen2D(currGen)            
    );
}

function getNextGen2D(currGen : ndarray<number> ) : ndarray<number> {

    return currGen.shape[0] < 3 || currGen.shape[1] < 3 ?
        ndarray(currGen.data.slice() ,currGen.shape) :
        ndarray(List<number>(currGen.data).update(4, _ => 0).toArray(), currGen.shape);
}