import * as ndarray from 'ndarray';
import * as _ from 'lodash';

export function getNumLivesAroundCell(matrix : ndarray<number>, row:number, col:number) : number {
    return _.sum(matrix.data) - matrix.get(1,1);
}
