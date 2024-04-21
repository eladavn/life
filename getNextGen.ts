import {CellsMatrix, CreateCellsMatrix} from './cellsMatrix';
import {getNumLivesAroundCell} from './getNumLivesAroundCell';

export function getNextGen(currGen : CellsMatrix) : CellsMatrix | Error {

    return (
        currGen.dimension > 2 ?
            new Error('Should be called with less than 3 dimensions') :
            getNextGen2D(
                currGen.shape.length === 1? 
                    // Incase of a flat array make a 1x1 matrix of it
                    CreateCellsMatrix(currGen.data, 1,1) : 
                    currGen)
        );
}

function getRowFromFlatArrayIndex(index:number, colsCount : number) : number {

    return Math.floor(index/colsCount);   
}

function getColFromFlatArrayIndex(index:number, colsCount : number) : number {
    return index%colsCount;   
}


function shouldCellLive(currCelVal: number, numLivesAroundCell : number) : boolean {

    return currCelVal === 0 ?
        (
            numLivesAroundCell === 3 ?
                true:
                false
        ) :
        (
            // Cell is currently alive
            numLivesAroundCell<2 ?
                false:
                numLivesAroundCell>3 ?
                    false:
                    // Alive cell surrounded by 2-3 living cells
                    true
        );
}

function getNextGenCell(currGen : CellsMatrix, row:number, col:number) : number {
    return shouldCellLive(currGen.get(row,col), getNumLivesAroundCell(currGen,row,col)) ? 1 : 0;
}

function getNextGen2D(currGen : CellsMatrix ) : CellsMatrix {

    return CreateCellsMatrix(currGen.data.map((val : number, index : number) => getNextGenCell(currGen, 
            getRowFromFlatArrayIndex(index, currGen.shape[1]),
            getColFromFlatArrayIndex(index, currGen.shape[1])))            
        ,currGen.shape[0], currGen.shape[1]);

}