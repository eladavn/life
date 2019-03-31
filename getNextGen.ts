import * as ndarray from 'ndarray';
import {getNumLivesAroundCell} from './getNumLivesAroundCell';

let shouldDebug = false;

export function getNextGen(currGen : ndarray<number> ) : ndarray<number> | Error {

    return (
        currGen.dimension > 2 ?
            new Error('Should be called with less than 3 dimensions') :
            getNextGen2D(currGen)            
    );
}

function getRowFromFlatArrayIndex(index:number, colsCount : number) : number {

    if (shouldDebug) {
        console.log(`getRowFromFlatArrayIndex [${index},${colsCount}] : ${Math.floor(index/colsCount)}`);
    }

    return Math.floor(index/colsCount);   
}

function getColFromFlatArrayIndex(index:number, colsCount : number) : number {

    if (shouldDebug) {
        console.log(`getColFromFlatArrayIndex [${index},${colsCount}] : ${index%colsCount}`);
    }

    return index%colsCount;   
}


function shouldCellLive(currGen : ndarray<number>, row:number, col:number) : boolean {
    return getNumLivesAroundCell(currGen,row,col) < 2 ? false : true;
}

function getNextGenCell(currGen : ndarray<number>, row:number, col:number) : number {

    if (shouldDebug) {
        console.log(`getNextGenCel [${row},${col}]`);
    }

    return shouldCellLive(currGen,row,col) ? 1 : 0;
}

function  getNextGenForLessThanTwoRowsMatrix(currGen : ndarray<number>) : ndarray.Data<number> {
    return currGen.data.map((val : number, index : number) => getNextGenCell(currGen, 0, index));
}

function  getNextGenForMoreThanOneRowsMatrix(currGen : ndarray<number>) : ndarray.Data<number> {

    shouldDebug = true;

    return currGen.data.map((val : number, index : number) => getNextGenCell(currGen, 
                getRowFromFlatArrayIndex(index, currGen.shape[1]),
                getColFromFlatArrayIndex(index, currGen.shape[1])));
}

function getNextGen2D(currGen : ndarray<number> ) : ndarray<number> {

    return ndarray( 
        currGen.shape[0] < 2 ?
            getNextGenForLessThanTwoRowsMatrix(currGen) :
            getNextGenForMoreThanOneRowsMatrix(currGen)            
        ,currGen.shape);

}