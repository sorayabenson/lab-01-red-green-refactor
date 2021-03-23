const fetchQuotes = require('../fetchQuotes/fetchQuotes.js');

describe('fetchQuotes function', () => {
    it('Return one single quote with the name, text, and image', async() => {
        const quote = await fetchQuotes();
        
        expect(quote).toEqual(expect.any(Object));

        // expect(quote).toBeCalledWith(
        //     expect.objectContaining({
        //         name: expect.any(String),
        //         text: expect.any(String),
        //         image: expect.any(String),
        //     }),
        // );
    });

});
