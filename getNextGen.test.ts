import {getNextGen} from "./getNextGen"; 
import {assert} from 'chai';
import {expect} from 'chai';
import * as ndarray from 'ndarray';

describe('getNextGen', function() {
    it('should return empty array when getting empty array', function() {

        // Act
        let result = getNextGen(ndarray([]));

        // Assert
        assert.equal(result.data.length,0);
    });

    it('should return [[false]] array when getting [[false]]', function() {

        // Act
        let result = getNextGen(ndarray([false]));

        // Assert
        assert.deepEqual(result.data,[false]);
    });

    it('should accept up to two dimensions', function() {

        // Arrange
        let callWithThreeDimensions = () => {

            // Act
            getNextGen(ndarray([],[2,2,2])); 
        }

        // Assert
        expect(callWithThreeDimensions).to.throw();
    });

});