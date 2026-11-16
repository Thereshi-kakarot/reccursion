const isObject = (value) => value !== null && typeof value === 'object';

const totalIntegers = function(obj) {

    let count = 0;

    if(!isObject(obj)) {
        return;
    }

    const integers = Object.values(obj);

    for(const integer of integers) {
        if(Number.isInteger(integer)){
            count++;
        }else if(isObject(integer)){
            count += totalIntegers(integer);
        }
    }
    return count;
}

module.exports = totalIntegers;