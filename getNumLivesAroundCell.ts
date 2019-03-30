import * as ndarray from 'ndarray';
import * as _ from 'lodash';
let ops = require('ndarray-ops');

function getNumColumns(matrix : ndarray<number>) : number {
    return matrix.shape[1];
}

function getNumRows(matrix : ndarray<number>) : number {
    return matrix.shape[0];
}

function isOnTopEdge(row : number, matrix: ndarray<number>) : boolean {
    return row === 0;
}

function isOnBottomEdge(row : number, matrix: ndarray<number>) : boolean {
    return row === getNumRows(matrix)-1;
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

function getSurroundingTopRow(row : number, matrix: ndarray<number>) : number {
    return isOnTopEdge(row, matrix) ? 0 : row-1;
}

function getSurroundingWidth(col : number, matrix: ndarray<number>) : number {
    return isOnLeftEdge(col, matrix) && isOnRightEdge(col, matrix) ? 1 :
            isOnLeftEdge(col, matrix) || isOnRightEdge(col, matrix) ? 2 : 
            3;
}

function getSurroundingHeight(row : number, matrix: ndarray<number>) : number {
    return isOnTopEdge(row, matrix) && isOnBottomEdge(row,matrix) ? 1 : 
            isOnTopEdge(row, matrix) || isOnBottomEdge(row,matrix) ? 2 : 
            3;
}


export function getNumLivesAroundCell(matrix : ndarray<number>, row:number, col:number) : number {

    return ops.sum(matrix
                .lo(getSurroundingTopRow(row,matrix),getSurroundingLeftCol(col,matrix))
                .hi(getSurroundingHeight(row,matrix), getSurroundingWidth(col,matrix) ) ) 
            - matrix.get(row,col);
}
