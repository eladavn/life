import * as ndarray from 'ndarray';
import * as _ from 'lodash';
let ops = require('ndarray-ops');


export function getNumLivesAroundCell(matrix : ndarray<number>, row:number, col:number) : number {

    return ops.sum(matrix.lo(row-1,col-1).hi(3,3)) - matrix.get(row,col);
}
