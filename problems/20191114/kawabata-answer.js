const start = Date.now()

let max = 0
let n = 1
while (max === 0) {
    if (Math.pow(9, 5) * n < Math.pow(10, n)) {
        max = n
    }
    n++
}
const map = new Map()

let res = 0
for (let i = 1; i < max; i++) {
    for (let j = Math.pow(10, i); j < Math.pow(10, i + 1); j++) {
        const val = j.toString()
        let _res = 0
        for (let k = 0; k < val.length; k++) {
            const num = parseInt(val[k])
            let num2 = map.get(num)
            if (num2 == null) {
                num2 = Math.pow(num, 5)
                map.set(num, num2)
            }
            _res += num2
        }
        if (j === _res) {
            res += _res
        }
    }
}

console.log(max, res, Date.now() - start)
