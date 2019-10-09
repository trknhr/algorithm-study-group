const ARR = [1, 2, 3, 4, 5]

function makeArr(arr) {
    const mapL = [1]
    const mapR = [1]
    for (let i = 1; i < arr.length; i++) {
        mapL.push(mapL[i - 1] * arr[i - 1])
        const j = arr.length - i
        mapR.unshift(mapR[0] * arr[j])
    }
    return arr.map((v, i) => {
        return mapL[i] * mapR[i]
    })
}

console.log(makeArr(ARR))
