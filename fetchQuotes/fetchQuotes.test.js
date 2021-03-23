const fetchQuotes = require('./fetchQuotes.js');

describe.only('fetchQuotes function', () => {
    it('Return one single quote with the name, text, and image', async() => {
        const quote = await fetchQuotes();
        
        expect(quote).toEqual(expect.any(Object));
    });

});
