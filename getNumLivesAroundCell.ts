import * as ndarray from 'ndarray';
import * as _ from 'lodash';
let ops = require('ndarray-ops');

function getNumColumns(matrix : ndarray<number>) : number {
    return matrix.shape[1];
}

export function getNumLivesAroundCell(matrix : ndarray<number>, row:number, col:number) : number {

    return ops.sum(matrix.lo(row-1,col-1).hi(3, col === getNumColumns(matrix)-1 ? 2 : 3 ) ) - matrix.get(row,col);
}
