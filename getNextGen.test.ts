import {getNextGen} from "./getNextGen"; 
import {assert} from 'chai';
import {CellsMatrix, CreateCellsMatrix} from './cellsMatrix';

describe('getNextGen', function() {
    it('should return empty array when getting empty array', function() {

        // Act
        let result = getNextGen(CreateCellsMatrix([],0,0)) as CellsMatrix;

        // Assert
        assert.equal(result.data.length,0);
    });

    it('should return [[0]] array when getting [[0]]', function() {

        // Act
        let result = getNextGen(CreateCellsMatrix([0],1,1)) as CellsMatrix;

        // Assert
        assert.deepEqual(result.data,[0]);
    });

    it('should return a matrix with the same size as given', () => {

        // Arrange
        let currGen = CreateCellsMatrix(new Array(6).fill(0), 3,2);

        // Act
        let nextGen = getNextGen(currGen) as CellsMatrix;

        // Assert
        assert.deepEqual(nextGen.shape,[3,2]);

    })

    it('should kill a cell with no neighbors', ()=>{
        
        // Arrange
        let currGen = CreateCellsMatrix(new Array(9).fill(0), 3,3);
        currGen.set(1,1,1);
        
        // Act
        let nextGen = getNextGen(currGen) as CellsMatrix;

        // Assert
        assert.equal(nextGen.get(1,1),0);

    });

    it('should keep a cell with two neighbors', ()=>{
        
        // Arrange
        let currGen = CreateCellsMatrix(new Array(9).fill(0), 3,3);
        currGen.set(1,1,1); // The cell
        currGen.set(0,0,1);  // It's neighbors
        currGen.set(0,1,1);
        
        // Act
        let nextGen = getNextGen(currGen) as CellsMatrix;

        // Assert
        assert.equal(nextGen.get(1,1),1);

    });

    it('should kill a cell with one neighbor', ()=>{
        
        // Arrange
        let currGen = CreateCellsMatrix([
            0, 1, 0,
            0, 1, 0,
            0, 0, 0]            
        , 3,3);
    
        // Act
        let nextGen = getNextGen(currGen) as CellsMatrix;

        // Assert
        assert.equal(nextGen.get(1,1),0);

    });

    it('should iterate on a single row', ()=>{
        
        // Arrange
        let currGen = CreateCellsMatrix([
            1, 1, 1]            
        , 3,1);
    
        // Act
        let nextGen = getNextGen(currGen) as CellsMatrix;

        // Assert
        assert.deepEqual(nextGen.data,[0,1,0]);

    });

    it('should iterate on rows', ()=>{
        
        // Arrange
        let currGen = CreateCellsMatrix([
            1, 0, 0, 1,
            0, 0, 0, 0,
            0, 0, 0, 0,
            1, 0, 0, 1]            
        , 4,4);
    
        // Act
        let nextGen = getNextGen(currGen) as CellsMatrix;

        // Assert
        assert.deepEqual(nextGen.data,[
            0,0,0,0,
            0,0,0,0,
            0,0,0,0,
            0,0,0,0]);

    });

    it('should keep a cell with three neighbors', ()=>{
        
        // Arrange
        let currGen = CreateCellsMatrix([
            1, 1,
            1, 1]            
        , 2,2);
   
        
        // Act
        let nextGen = getNextGen(currGen) as CellsMatrix;

        // Assert
        assert.deepEqual(nextGen.data,[
            1,1,
            1,1]);

    });

    it('should kill a cell with more than three neighbors', ()=>{
        
        // Arrange
        let currGen = CreateCellsMatrix([
            1, 1, 1,
            1, 1, 0]            
        , 2,3);
   
        
        // Act
        let nextGen = getNextGen(currGen) as CellsMatrix;

        // Assert
        assert.equal(nextGen.get(1,1),0);

    });

    it('should reproduce a cell with three neighbors', ()=>{
        
        // Arrange
        let currGen = CreateCellsMatrix([
            1, 0, 1,
            0, 1, 0]            
        , 2,3);
   
        
        // Act
        let nextGen = getNextGen(currGen) as CellsMatrix;

        // Assert
        assert.equal(nextGen.get(0,1),1);

    });

    it('should keep a cell with two neighbors dead', ()=>{
        
        // Arrange
        let currGen = CreateCellsMatrix([
            1, 0,
            0, 1]            
        , 2,2);
   
        
        // Act
        let nextGen = getNextGen(currGen) as CellsMatrix;

        // Assert
        assert.equal(nextGen.get(0,1),0);

    });

    it('should keep a cell with four neighbors dead', ()=>{
        
        // Arrange
        let currGen = CreateCellsMatrix([
            1, 1,
            0, 1,
            1, 0]            
        , 3,2);
   
        
        // Act
        let nextGen = getNextGen(currGen) as CellsMatrix;

        // Assert
        assert.equal(nextGen.get(1,0),0);

    });
});

