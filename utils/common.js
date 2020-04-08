module.exports = {
    getObjectFromArray (nameKey, key, myArray)  {
        return myArray.filter(arr => {
            if(arr[key] === nameKey) {
                return arr
            }
        });
    }
} 
