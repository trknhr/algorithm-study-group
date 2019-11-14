var ARR = ['A', 'B', 'C', 'A', 'C']
var ARR2 = ['A', 'B', 'C', 'B', 'B', 'C']

function longestArray(arr) {
    let start = 0
    let buscket = []
    let selectTypes = []
    let maxBuscket = []
    arr.forEach((val, i) => {
        console.log(val, selectTypes, buscket, maxBuscket)
        if (selectTypes.indexOf(val) < 0) {
            if (selectTypes.length === 2) {
                // reset
                selectTypes = [buscket[buscket.length - 1], val]
                const newBuscket = []
                for (let j = buscket.length - 1; j > -1; j--) {
                    if (buscket[j] === selectTypes[0]) {
                        newBuscket.push(buscket[j])
                    } else {
                        break
                    }
                }
                buscket = newBuscket
            } else if (selectTypes.length < 2) {
                selectTypes.push(val)
            }
        }
        buscket.push(val)
        if (buscket.length > maxBuscket.length) {
            maxBuscket = buscket
        }
    })

    return maxBuscket
}

console.log('result', longestArray(ARR))
console.log('result', longestArray(ARR2))
