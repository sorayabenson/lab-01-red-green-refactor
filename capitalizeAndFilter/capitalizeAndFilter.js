const capitalizeAndFilter = (array) => {
    const filteredArray = [];

    for(const string of array){
        const result = string.toUpperCase();

        if(result[0] != 'F') {
            filteredArray.push(result);
        }
    }

    return filteredArray;

};

module.exports = capitalizeAndFilter;
