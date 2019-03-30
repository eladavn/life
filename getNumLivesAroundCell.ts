import * as ndarray from 'ndarray';
import * as _ from 'lodash';
let ops = require('ndarray-ops');

function getNumColumns(matrix : ndarray<number>) : number {
    return matrix.shape[1];
}


function isOnLeftEdge(col : number, matrix: ndarray<number>) : boolean {
    return col === 0;
}

function isOnRightEdge(col : number, matrix: ndarray<number>) : boolean {
    return col === getNumColumns(matrix)-1;
}

function getSurroundingLeftCol(col : number, matrix: ndarray<number>) : number {
    return isOnLeftEdge(col, matrix) ? 0 : col-1;
}

function getSurroundingWidth(col : number, matrix: ndarray<number>) : number {
    return isOnLeftEdge(col, matrix) || isOnRightEdge(col, matrix) ? 2 : 3;
}


export function getNumLivesAroundCell(matrix : ndarray<number>, row:number, col:number) : number {

    return ops.sum(matrix
                .lo(row-1,getSurroundingLeftCol(col,matrix))
                .hi(3, getSurroundingWidth(col,matrix) ) ) - matrix.get(row,col);
}
