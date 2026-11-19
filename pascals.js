const pascals = function pascals(n){
    if(n === 1) return [1];

    const prev = pascals(n - 1);
    const row = [1];

    for (let i = 1; i < prev.length; i++){
        row.push(prev[i - 1] + prev[i]);
    }
    row.push(1);
    return row;
}

module.exports = pascals;