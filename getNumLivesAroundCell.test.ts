import {getNumLivesAroundCell} from './getNumLivesAroundCell'; 
import {CreateCellsMatrix} from './cellsMatrix';

import {assert} from 'chai';

describe('getNumLivesAroundCell', () => {
    
    it('with live middle cell within 3x3 matrix', () => {
        // Arrange
        let matrix = CreateCellsMatrix([
                1, 1, 0,
                0, 1, 0,
                0, 1, 1]            
            , 3,3);

        // Act
        let result = getNumLivesAroundCell(matrix, 1, 1);

        // Assert
        assert.equal(result,4);
    });

    it('with dead middle cell within 3x3 matrix', () => {
        // Arrange
        let matrix = CreateCellsMatrix([
                1, 1, 0,
                0, 0, 0,
                0, 1, 1]            
            , 3,3);

        // Act
        let result = getNumLivesAroundCell(matrix, 1, 1);

        // Assert
        assert.equal(result,4);
    });

    it('with cell surrounded in all directions', () => {
        // Arrange
        let matrix = CreateCellsMatrix([
                1, 1, 0, 0,
                0, 0, 0, 0,
                0, 1, 1, 0]            
            , 3,4);

        // Act
        let result = getNumLivesAroundCell(matrix, 1, 2);

        // Assert
        assert.equal(result,3);
    });

    it('with cell on right edge', () => {
        // Arrange
        let matrix = CreateCellsMatrix([
                1, 1, 0, 0,
                0, 0, 0, 0,
                0, 1, 1, 0]            
            , 3,4);

        // Act
        let result = getNumLivesAroundCell(matrix, 1, 3);

        // Assert
        assert.equal(result,1);
    });

    it('with cell on left edge', () => {
        // Arrange
        let matrix = CreateCellsMatrix([
                0, 1,
                0, 0,
                0, 1]            
            , 3,2);

        // Act
        let result = getNumLivesAroundCell(matrix, 1, 0);

        // Assert
        assert.equal(result,2);
    });

    it('with cell on top edge', () => {
        
        // Arrange
        let matrix = CreateCellsMatrix([
                0, 1, 0,
                0, 0, 1]            
            , 2,3);

        // Act
        let result = getNumLivesAroundCell(matrix, 0, 1);

        // Assert
        assert.equal(result,1);
    });

    it('with cell on bottom edge', () => {
        
        // Arrange
        let matrix = CreateCellsMatrix([
                0, 1, 1,
                0, 1, 1]            
            , 2,3);

        // Act
        let result = getNumLivesAroundCell(matrix, 1, 1);

        // Assert
        assert.equal(result,3);
    });    


    it('with single row', () => {
        
        // Arrange
        let matrix = CreateCellsMatrix([1,0,1]
            , 1,3);

        // Act
        let result = getNumLivesAroundCell(matrix, 0, 1);

        // Assert
        assert.equal(result,2);
    });    

    it('with single column', () => {
        
        // Arrange
        let matrix = CreateCellsMatrix([
            1,
            0,
            1]
            , 3,1);

        // Act
        let result = getNumLivesAroundCell(matrix, 1, 0);

        // Assert
        assert.equal(result,2);
    });    

    it('with single cell', () => {
        
        // Arrange
        let matrix = CreateCellsMatrix([1], 1,1);

        // Act
        let result = getNumLivesAroundCell(matrix, 0, 0);

        // Assert
        assert.equal(result,0);
    });    
});
