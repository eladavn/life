import {getNumLivesAroundCell} from './getNumLivesAroundCell'; 
import {assert} from 'chai';
import * as ndarray from 'ndarray';

describe('getNumLivesAroundCell', () => {
    
    it('works for live middle cell within 3x3 matrix', () => {
        // Arrange
        let matrix = ndarray([
                1, 1, 0,
                0, 1, 0,
                0, 1, 1]            
            , [3,3]);

        // Act
        let result = getNumLivesAroundCell(matrix, 1, 1);

        // Assert
        assert.equal(result,4);
    });
});
