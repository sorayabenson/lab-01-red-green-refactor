const copyAndPush = require('./copyAndPush.js');

describe('copyAndPush function', () => {
    it('takes in an array, makes a copy of it, and pushes a new item at the end of the array', () => {
        const numbers = [1, 2, 3];

        const newNumbers = copyAndPush(numbers, 4);

        expect(newNumbers).toEqual([1, 2, 3, 4]);
        expect(numbers).toEqual([1, 2, 3]);
    });

    it('takes in an array, makes a copy of it, and pushes a new item at the end of the array', () => {
        const books = ['Howl`s Moving Castle', 'Castle in the Air'];

        const newBooks = copyAndPush(books, 'House of Many Ways');

        expect(newBooks).toEqual(['Howl`s Moving Castle', 'Castle in the Air', 'House of Many Ways']);
    });
});
