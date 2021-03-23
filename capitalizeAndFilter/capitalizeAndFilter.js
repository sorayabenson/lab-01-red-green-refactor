const uppercaseString = (string) => string.toUpperCase();

const fFilter = (array) => {

    const newArray = [];
    array.map(string => {
        if(string[0] != 'F') {
            newArray.push(string);
        }            
    }); 
    return newArray;
};

const capitalizeAndFilter = (array) => {
    
    const upperCaseArray = array.map(string => uppercaseString(string));

    const filteredArray = fFilter(upperCaseArray);
      
    return filteredArray;

};

module.exports = capitalizeAndFilter;
