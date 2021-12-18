function meanderingArray(unsorted) {
    let sorted = [];
    let arr = [...unsorted];
    
    const forwardSort = unsorted.sort((a, b) => a - b);
    const backwardSort = arr.sort((a, b) => b - a);

    let count = unsorted.length / 2;

    if (arr.length % 2 !== 0) {
        count -= 1
    } 

    for (let i = 0; i < count; i++) {
        sorted = [...sorted, backwardSort[i], forwardSort[i]];
    }

    if (arr.length % 2 !== 0) {
        sorted = [...sorted, backwardSort[count+ 0.5]];
    } 

    return sorted;
}
const arr = [5, 2, 7, 8, -2, 25, 25];
// const arr = [-27676, 211621, 904304, 161270, -292822, 732004, 860511, -825806, -721722, 536428, -927571, -287004];
console.log(meanderingArray(arr)); // [ 25, -2, 25, 2, 8, 5, 7 ]
