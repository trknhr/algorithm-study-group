function calc(arr) {
    let map = []
    const res = []
    for (let i = 0; i <= 30; i++) {
        let meets = []
        for (let j = 0; j < arr.length; j++) {
            const exist = arr[j].find(day => day === i)
            if (exist) {
                meets.push(j)
            }
        }

        if (meets.length > 1) {
            for (const meet of map) {
            }
            map.push(meets)
        }
    }
}

calc([[1], [2, 3], [1, 2], [3, 4, 5]])
