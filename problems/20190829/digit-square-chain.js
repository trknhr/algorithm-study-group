function countDigitSquareChain(n){
    let resultMap = new Array(n)
    let counter = 0

    for(let i = 1; i < n; i++) {
        if(resultMap[i] != null) {
            if(resultMap[i] === 89) {
                counter += 1
            }
            continue;
        }
        let tempArray = []
        let squareChain = i
        while(squareChain !== 89 && squareChain !== 1) {
            tempArray.push(squareChain)
            squareChain = squareChain.toString().split("").reduce((acc, cur) =>  {
                return acc + Math.pow(parseInt(cur), 2)
            },0)
        }
        for(const t of tempArray) {
            resultMap[t] = squareChain
        }

        if(squareChain === 89) {
            counter += 1
        }
        resultMap[i] = squareChain
    }

    return counter
}

console.log(countDigitSquareChain(10000000))