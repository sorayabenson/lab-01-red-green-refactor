const fetch = require('node-fetch');

const fetchQuotes = async() => {

    const result = await fetch('http://futuramaapi.herokuapp.com/api/quotes');
    const body = await result.json();

    const mungedQuotes = body.map((quote) => {
        return ({ name: quote.character, text: quote.quote, image: quote.image });
    });

    const randomQuote = mungedQuotes[Math.floor(Math.random() * mungedQuotes.length)];

    return randomQuote;

};

module.exports = fetchQuotes;
