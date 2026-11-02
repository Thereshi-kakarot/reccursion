const contains = function(object, target){
    const values = Object.values(object);
    for (let i = 0; i <values.length; i++){
        if(values[i] === target){
            return true;
        }
        if(typeof values[i] === 'object' && values[i] !== null){
            return contains(values[i], target);
    }
    }
    return false;
}

module.exports = contains