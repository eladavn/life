import {getNextGen} from "./getNextGen"; 
import {assert} from 'chai';

describe('getNextGen', function() {
    it('should return empty array when getting empty array', function() {

        // Act
        let result = getNextGen([]);

        // Assert
        assert.lengthOf(result,0);
    });

    it('should return [[false]] array when getting [[false]]', function() {

        // Act
        let result = getNextGen([[false]]);

        // Assert
        assert.deepEqual(result,[[false]]);
    });
});