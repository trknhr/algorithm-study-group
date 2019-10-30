function main(fruits) {
    const map = {}
    for(const f of fruits) {
        if(map[f] == null) {
            map[f] = 1
        } else {
            map[f] += 1
        }
    }

    let startWindow = 0
    let maxLen = 0

    for (let endWindow = 0; endWindow < fruits.length; endWindow++) {
        map[fruits[endWindow]] += 1

        while(Object.keys(map).length > 2) {
            map[fruits[startWindow]] -= 1
            if(map[fruits[startWindow]] == 0){
                delete map[fruits[startWindow]]
                startWindow += 1
            }
        }

        maxLen = Math.max(endWindow - startWindow + 1 , maxLen)
    }
    return maxLen;
  };
  
  
console.log("A: ", main(['A', 'B', 'C', 'A', 'C']))
console.log("A: ", main(['A', 'B', 'C', 'B', 'B', 'C']))
  