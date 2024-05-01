import {CellsMatrix} from './cellsMatrix';
import * as _ from 'lodash';
let ops = require('ndarray-ops');

function getNumColumns(matrix : CellsMatrix) : number {
    return matrix.shape[1];
}

function getNumRows(matrix : CellsMatrix) : number {
    return matrix.shape[0];
}

function isOnTopEdge(cellRow : number, matrix: CellsMatrix) : boolean {
    return cellRow === 0;
}

function isOnBottomEdge(cellRow : number, matrix: CellsMatrix) : boolean {
    return cellRow === getNumRows(matrix)-1;
}

function isOnLeftEdge(cellCol : number, matrix: CellsMatrix) : boolean {
    return cellCol === 0;
}

function isOnRightEdge(cellCol : number, matrix: CellsMatrix) : boolean {
    return cellCol === getNumColumns(matrix)-1;
}

function getSurroundingLeftCol(cellCol : number, matrix: CellsMatrix) : number {
    return isOnLeftEdge(cellCol, matrix) ? 0 : cellCol-1;
}

function getSurroundingTopRow(cellRow : number, matrix: CellsMatrix) : number {
    return isOnTopEdge(cellRow, matrix) ? 0 : cellRow-1;
}

function getSurroundingWidth(cellCol : number, matrix: CellsMatrix) : number {
    return isOnLeftEdge(cellCol, matrix) && isOnRightEdge(cellCol, matrix) ? 1 :
            isOnLeftEdge(cellCol, matrix) || isOnRightEdge(cellCol, matrix) ? 2 : 
            3;
}

function getSurroundingHeight(cellRow : number, matrix: CellsMatrix) : number {
    return isOnTopEdge(cellRow, matrix) && isOnBottomEdge(cellRow,matrix) ? 1 : 
            isOnTopEdge(cellRow, matrix) || isOnBottomEdge(cellRow,matrix) ? 2 : 
            3;
}

// Get the matrix which is surrounding the cell at row, col while taking into account the edges of the matrix
function getSurroundingMatrix(matrix: CellsMatrix, row: number, col: number): CellsMatrix {
    return matrix
        // Pick to upper-left cell of the surrounding matrix by shifting the full matrix
        .lo(getSurroundingTopRow(row, matrix), getSurroundingLeftCol(col, matrix))

        // Set the height and width of the surrounding matrix by slicing
        .hi(getSurroundingHeight(row, matrix), getSurroundingWidth(col, matrix));
}


export function getNumLivesAroundCell(matrix : CellsMatrix, row:number, col:number) : number {

    return ops.sum(getSurroundingMatrix(matrix, row, col) ) 
            - matrix.get(row,col);
}

