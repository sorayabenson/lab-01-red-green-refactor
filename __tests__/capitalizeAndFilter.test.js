const capitalizeAndFilter = require('../capitalizeAndFilter/capitalizeAndFilter.js');

describe('capitalizeAndFilter function', () => {
    it('takes in array of strings, capitalizes them, and filters out any words that begin with f', () => {
        const strings = ['jump', 'Run', 'fight'];

        const upperStrings = capitalizeAndFilter(strings);
        
        expect(upperStrings).toEqual(['JUMP', 'RUN']);
    });

    it('takes in array of strings, capitalizes them, and filters out any words that begin with f', () => {
        const strings = ['Find food', 'forest fire', 'swim', 'camp fire'];

        const upperStrings = capitalizeAndFilter(strings);
        
        expect(upperStrings).toEqual(['SWIM', 'CAMP FIRE']);
    });

});
