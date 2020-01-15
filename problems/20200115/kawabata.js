function sqrt(val) {
    const length = val * 1000
    let range = Math.floor(length * 0.5)
    let isContitue = true
    let center = range

    while (isContitue) {
        const result = (center / 1000) * (center / 1000)
        range = Math.floor(range * 0.5)
        if (range < 1) {
            isContitue = false
        } else if (result > val) {
            center -= range
        } else if (result < val) {
            center += range
        }
    }
    return center / 1000
}

function abs(val) {
    if (val < 0) {
        return -1 * val
    } else {
        return val
    }
}

console.log(sqrt(2))
console.log(sqrt(3))
console.log(sqrt(4))
console.log(sqrt(5))
console.log(sqrt(100))
