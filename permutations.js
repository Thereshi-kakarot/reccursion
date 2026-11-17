const permutations = function (arr){
    if(arr.length === 0 ){
        return [[]];
    }
    const result = [];

    for(let i = 0; i < arr.length; i++){
        const currentNum = arr[i];
        const rest = arr.slice(0, i).concat(arr.slice(i + 1));

        for (const perm of permutations(rest)){
            result.push([currentNum, ...perm])
        }
    }

    return result;
}

module.exports = permutations;