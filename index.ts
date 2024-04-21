import * as ndarray from 'ndarray';

import {CellsMatrix} from './cellsMatrix';
import {getNextGen} from "./getNextGen"; 
import {terminal} from 'terminal-kit';

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function show(matrix: CellsMatrix) : string {

    let result = '';

    for (let rowsCounter = 0; rowsCounter<matrix.shape[0]; rowsCounter++) {
        for (let colsCounter = 0; colsCounter<matrix.shape[1]; colsCounter++) {
            result += matrix.get(rowsCounter,colsCounter) === 0 ? ' ' : 'O';
        }

        result += '\n';
    }

    return result;
}

(async () => {
    let currGen = ndarray([
        0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0,
        0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0]            
    , [6,6]);
    
    while (true) {
        terminal.clear();
        console.log(show(currGen));
        
        await sleep(1000);
    
        currGen =  getNextGen(currGen) as CellsMatrix;
    
    
    }
})()

