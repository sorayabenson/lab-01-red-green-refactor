const fetch = require('node-fetch');

const URL = 'http://futuramaapi.herokuapp.com/api/quotes';

const mungeQuotes = (array) => {
    const shapedResponse = array.map((quote) => {
        return { name: quote.character, text: quote.quote, image: quote.image };
    });

    return shapedResponse;
};

const getRandomQuote = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

const fetchQuotes = async() => {

    const result = await fetch(URL);
    const body = await result.json();

    const mungedQuotes = mungeQuotes(body);

    const randomQuote = getRandomQuote(mungedQuotes);

    return randomQuote;

};

module.exports = fetchQuotes;
