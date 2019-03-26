import {getNextGen} from "./getNextGen"; 
import {assert} from 'chai';

describe('getNextGen', function() {
    it('should return empty array when getting empty array', function() {

        // Act
        let result = getNextGen([]);

        // Assert
        assert.lengthOf(result,0);
    });
});