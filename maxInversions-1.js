function maxInversions(arr) {
    let count = 0;
    for (let i = 0 ; i < arr.length - 1; i++){
        let minCount = 0;
        let maxCount = 0;
        
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] > arr[j]){
                minCount++;
            }
        }
        for (let k = i - 1; k >= 0; k--){
            if (arr[i] < arr[k]){
                maxCount++;
            }
        }
        count = count + (maxCount * minCount);
    }
    return count;
}

// const arr = [4,2,2,1];
const arr = [5,3,4,2,1];
console.log(maxInversions(arr)); // 7
