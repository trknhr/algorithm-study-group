function getLastTen() {
    let result = 28433

    for(let i = 0; i < 7830457; i++) {
        result = result * 2 % 10000000000
    }

    return result + 1
}

onsole.log(getLastTen())