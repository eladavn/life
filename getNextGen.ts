import * as ndarray from 'ndarray';
import {List} from 'immutable';
import {getNumLivesAroundCell} from './getNumLivesAroundCell';

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


function shouldCellLive(currGen : ndarray<number>, row:number, col:number) : boolean {
    return getNumLivesAroundCell(currGen,row,col) < 2 ? false : true;
}

function getNextGenCell(currGen : ndarray<number>, row:number, col:number) : number {
    return shouldCellLive(currGen,row,col) ? 1 : 0;
}

function  getNextGenForLessThanTwoRowsMatrix(currGen : ndarray<number>) : ndarray.Data<number> {
    return currGen.data.map((val : number, index : number) => getNextGenCell(currGen, 0, index));
}

function getNextGen2D(currGen : ndarray<number> ) : ndarray<number> {

    return ndarray( 
        currGen.shape[0] < 2 ?
            getNextGenForLessThanTwoRowsMatrix(currGen) :
            List<number>(currGen.data)
                .update(convert2dto1dIndex(1,1),
                    _ =>  shouldCellLive(currGen,1,1) ? 1 : 0)
                .toArray()
        ,currGen.shape);

}