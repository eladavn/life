import {CellsMatrix} from './cellsMatrix';
import * as _ from 'lodash';
let ops = require('ndarray-ops');

function getNumColumns(matrix : CellsMatrix) : number {
    return matrix.shape[1];
}

function getNumRows(matrix : CellsMatrix) : number {
    return matrix.shape[0];
}

function isOnTopEdge(row : number, matrix: CellsMatrix) : boolean {
    return row === 0;
}

function isOnBottomEdge(row : number, matrix: CellsMatrix) : boolean {
    return row === getNumRows(matrix)-1;
}

function isOnLeftEdge(col : number, matrix: CellsMatrix) : boolean {
    return col === 0;
}

function isOnRightEdge(col : number, matrix: CellsMatrix) : boolean {
    return col === getNumColumns(matrix)-1;
}

function getSurroundingLeftCol(col : number, matrix: CellsMatrix) : number {
    return isOnLeftEdge(col, matrix) ? 0 : col-1;
}

function getSurroundingTopRow(row : number, matrix: CellsMatrix) : number {
    return isOnTopEdge(row, matrix) ? 0 : row-1;
}

function getSurroundingWidth(col : number, matrix: CellsMatrix) : number {
    return isOnLeftEdge(col, matrix) && isOnRightEdge(col, matrix) ? 1 :
            isOnLeftEdge(col, matrix) || isOnRightEdge(col, matrix) ? 2 : 
            3;
}

function getSurroundingHeight(row : number, matrix: CellsMatrix) : number {
    return isOnTopEdge(row, matrix) && isOnBottomEdge(row,matrix) ? 1 : 
            isOnTopEdge(row, matrix) || isOnBottomEdge(row,matrix) ? 2 : 
            3;
}

// Get the matrix which is surrounding the cell at row, col while taking into account the edges of the matrix
function getSurroundingMatrix(matrix: CellsMatrix, row: number, col: number): CellsMatrix {
    return matrix
        .lo(getSurroundingTopRow(row, matrix), getSurroundingLeftCol(col, matrix))
        .hi(getSurroundingHeight(row, matrix), getSurroundingWidth(col, matrix));
}


export function getNumLivesAroundCell(matrix : CellsMatrix, row:number, col:number) : number {

    return ops.sum(getSurroundingMatrix(matrix, row, col) ) 
            - matrix.get(row,col);
}

