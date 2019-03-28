import * as ndarray from 'ndarray';
import {List} from 'immutable';

export function getNextGen(currGen : ndarray<number> ) : ndarray<number> | Error {

    return (
        currGen.dimension > 2 ?
            new Error('Should be called with less than 3 dimensions') :
            getNextGen2D(currGen)            
    );
}

function convert2dto1dIndex(row:number, col:number) : number {
    return 4;   
}

function getNextGen2D(currGen : ndarray<number> ) : ndarray<number> {

    return ndarray( currGen.shape[0] < 3 || currGen.shape[1] < 3 ?
                currGen.data.slice() :
                List<number>(currGen.data).update(convert2dto1dIndex(1,1), _ => 0).toArray()
            ,currGen.shape
    );

}