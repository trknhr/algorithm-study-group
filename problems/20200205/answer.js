function countMin(arr) {
    let min = Number.MAX_SAFE_INTEGER
    let count = 0
    for (const val of arr) {
        if (val < min) {
            min = val
            count = 1
        } else if (val === min) {
            count++
        }
    }
    return count
}
// countMin([0,1,2,3,3,3,3,3,0]);
// countMin([1,2,3,0,3,3,0,3,0,3,0]);

function findMaxArray(arr, k) {
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += arr[i]
    }
    let max = sum
    for (let i = k; i < arr.length; i++) {
        sum -= arr[i - k]
        sum += arr[i]
        if (sum > max) {
            max = sum
        }
    }
    return max
}

console.log(findMaxArray([2, 1, 5, 1, 3, 2], 3))

function test() {
    const arr = [];
    const length = Math.floor(Math.random() * 15)+2;
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 9) + 1);
    }
    const k = Math.floor(Math.random() * (length-2))+2;
    console.log("----")
    console.log("array = ", arr, ", K = ", k)
    console.log("answer:", findMaxArray(arr, k))
}

test();
test();
test();
test();