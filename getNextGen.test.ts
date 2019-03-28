import {getNextGen} from "./getNextGen"; 
import {assert} from 'chai';
import {expect} from 'chai';
import * as ndarray from 'ndarray';

describe('getNextGen', function() {
    it('should return empty array when getting empty array', function() {

        // Act
        let result = getNextGen(ndarray([])) as ndarray<boolean>;

        // Assert
        assert.equal(result.data.length,0);
    });

    it('should return [[false]] array when getting [[false]]', function() {

        // Act
        let result = getNextGen(ndarray([false])) as ndarray<boolean>;

        // Assert
        assert.deepEqual(result.data,[false]);
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
        let nextGen = getNextGen(currGen) as ndarray<boolean>;

        // Assert
        assert.deepEqual(nextGen.shape,[3,2]);

    })

});