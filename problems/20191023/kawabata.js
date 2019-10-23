function canPlace(pos, board, color) {
    const dirs = [
        [-1, -1],
        [0, -1],
        [1, -1],
        [-1, 0],
        [1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
    ]
    return dirs.some(dir => next(pos, board, color, dir, true))
}

function next(pos, board, color, dir, isFirst) {
    const targetX = pos[0] + dir[0]
    const targetY = pos[1] + dir[1]

    if (board[targetY] == null) {
        return false
    } else if (board[targetY][targetX] == null) {
        return false
    }

    const target = board[targetY][targetX]
    if (target === 0) {
        return false
    } else if (target === color) {
        if (isFirst) {
            return false
        }
        return true
    } else {
        return next([targetX, targetY], board, color, dir, false)
    }
}

var BOARD = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, -1, 0, 0, 0],
    [0, 0, 0, -1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
]

var BOARD2 = [
    [0, 0, -1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, -1, 0, 0],
    [-1, 1, 0, 1, 1, 0, 0, 0],
    [0, 1, -1, 1, -1, 1, 0, 0],
    [-1, -1, 1, -1, 1, 1, -1, 0],
    [-1, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, -1, 0],
]

test([7, 5], BOARD2, 1, true)
test([3, 6], BOARD2, 1, true)
test([1, 2], BOARD2, 1, false)
test([2, 0], BOARD2, 1, false)
test([1, 0], BOARD2, 1, false)
test([0, 0], BOARD2, 1, false)

function test(pos, board, color, expect) {
    const res = canPlace(pos, board, color)
    if (res !== expect) {
        throw new Error(
            'invalid' +
                ', pos: ' +
                pos +
                ', color: ' +
                color +
                ', expect: ' +
                expect +
                ', received: ' +
                res
        )
    }
}
