import {getNumLivesAroundCell} from './getNumLivesAroundCell'; 
import {assert} from 'chai';
import * as ndarray from 'ndarray';

describe('getNumLivesAroundCell', () => {
    
    it('with live middle cell within 3x3 matrix', () => {
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

    it('with dead middle cell within 3x3 matrix', () => {
        // Arrange
        let matrix = ndarray([
                1, 1, 0,
                0, 0, 0,
                0, 1, 1]            
            , [3,3]);

        // Act
        let result = getNumLivesAroundCell(matrix, 1, 1);

        // Assert
        assert.equal(result,4);
    });

    it('with cell surrounded in all directions', () => {
        // Arrange
        let matrix = ndarray([
                1, 1, 0, 0,
                0, 0, 0, 0,
                0, 1, 1, 0]            
            , [3,4]);

        // Act
        let result = getNumLivesAroundCell(matrix, 1, 2);

        // Assert
        assert.equal(result,3);
    });

    it('with cell on right edge', () => {
        // Arrange
        let matrix = ndarray([
                1, 1, 0, 0,
                0, 0, 0, 0,
                0, 1, 1, 0]            
            , [3,4]);

        // Act
        let result = getNumLivesAroundCell(matrix, 1, 3);

        // Assert
        assert.equal(result,1);
    });
});
