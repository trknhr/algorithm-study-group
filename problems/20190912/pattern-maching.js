function isPatternMatch(word, pattern) {
    let countFirstPattern = 0

    let normalizePattern = pattern
    if(pattern[0] === "b") {
        for(const p of pattern) {
            normalizePattern += p === "a" ? "b" : "a"
        }
    }
    for(const p of normalizePattern) {
        if(p === normalizePattern.charAt(0)) {
            countFirstPattern++
        }
    }

    const countCanTakeFirst = Math.floor((word.length - countFirstPattern) / countFirstPattern)

    let firstSecond = 1
    for(let i = 0; i< pattern.length; i++) {
        if(pattern[i] === "a") {
            firstSecond++
            break;
        }
    }
    let result = false
    for(let i = 0; i <= countCanTakeFirst; i++) {
        const countCanTakeSecond = (word.length - i * countFirstPattern) / (normalizePattern.length - countFirstPattern)
        if(countCanTakeSecond % 2 === 0) {
            result = result || isPattern(word, i, countCanTakeSecond, normalizePattern, firstSecond)
        }
    }

    return result
}

function isPattern(word, alen, blen, pattern, firstSecond) {
    let aWord = ""
    let bWord = ""
    for(let i = 0; i < alen; i++) {
        aWord += word[i]
    }

    for(let i = firstSecond * alen ; i < firstSecond * alen + blen; i++) {
        bWord += word[i]
    }

    let resultWord = ""
    for(const p of pattern) {
        if(p === "a") {
            resultWord += aWord
        }else {
            resultWord += bWord
        }
    }
    console.log(resultWord)
    return resultWord === word
}

function main() {
    console.log(isPatternMatch("catcatgocatgo", "aabab"))
    console.log(isPatternMatch("catcatgocatgo", "ababb"))
}

main()