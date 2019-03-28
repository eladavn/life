import {getNextGen} from "./getNextGen"; 
import {assert} from 'chai';
import {expect} from 'chai';
import * as ndarray from 'ndarray';

describe('getNextGen', function() {
    it('should return empty array when getting empty array', function() {

        // Act
        let result = getNextGen(ndarray([])) as ndarray<number>;

        // Assert
        assert.equal(result.data.length,0);
    });

    it('should return [[0]] array when getting [[0]]', function() {

        // Act
        let result = getNextGen(ndarray([0])) as ndarray<number>;

        // Assert
        assert.deepEqual(result.data,[0]);
    });

    it('should accept up to two dimensions', function() {

        // Act
        let result = getNextGen(ndarray([],[2,2,2])); 

        // Assert
        assert.isTrue(result instanceof Error);
    });

    it('should return a matrix with the same dimensions as given', () => {

        // Arrange
        let currGen = ndarray(new Array(6), [3,2]);

        // Act
        let nextGen = getNextGen(currGen) as ndarray<number>;

        // Assert
        assert.deepEqual(nextGen.shape,[3,2]);

    })

    it('should kill a cell with no neighbors', ()=>{
        
        // Arrange
        let currGen = ndarray<number>(new Int8Array(9), [3,3]);
        currGen.set(1,1,1);
        
        // Act
        let nextGen = getNextGen(currGen) as ndarray<number>;

        // Assert
        assert.equal(nextGen.get(1,1),0);

    });

});

