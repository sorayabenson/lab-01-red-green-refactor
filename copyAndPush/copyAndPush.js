const copyAndPush = (array, newItem) => {
    const newArray = [...array];
    
    newArray.push(newItem);

    return newArray;
    
};

module.exports = copyAndPush;
