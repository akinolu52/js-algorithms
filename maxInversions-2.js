
function maxInversions(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                for (let k = j + 1; k < arr.length; k++) {
                    
                    if (arr[j] > arr[k]) {
                        count++;
                    }
                }
            }
            
        }
    }
    return count;
}

const arr = [4,2,2,1];
// const arr = [5,3,4,2,1];
console.log(maxInversions(arr))
