from heapq import *
import math

input = '''**************************
*S* *                    *
* * *  *  *************  *
* *   *    ************  *
*    *                   *
************** ***********
*                        *
** ***********************
*      *              G  *
*  *      *********** *  *
*    *        ******* *  *
*       *                *
**************************'''

def shortestPath(start, goal, board):
    minFromStart = {}
    for row in range(len(board)):
        for col in range(len(board[row])):
            minFromStart[(col, row)] = (math.inf, [0, 0])
    queue = []
    heappush(queue, (0, start))
    def updateLogic(col, row, distance, prev):
        if board[row][col] != "*":
            if distance + 1 < minFromStart[(col, row)][0]:
                minFromStart[(col, row)] = (distance + 1, prev)
                heappush(queue, (distance + 1, [col, row]))

    while queue:
        distance, pos = heappop(queue)
        [col, row] = pos
        # up
        if row > 0:
            updateLogic(col, row - 1, distance, pos)
        # down 
        if row < len(board) - 1:
            updateLogic(col, row + 1, distance, pos)
        # left
        if col > 0:
            updateLogic(col - 1, row, distance, pos)
        # right
        if col < len(board[row]) - 1:
            updateLogic(col + 1, row, distance, pos)
    current = (goal[0], goal[1])
    while True:
        col, row = minFromStart[current][1]
        if board[row][col] == "S":
            break
        board[row][col] = "$"
        current = (col, row)

    print("\n".join(["".join(r) for r in board]))

def main():
    line = input.split("\n")

    print([[c for c in l] for l in line])
    board = [[c for c in l] for l in line]

    start = [0, 0]
    goal = [0, 0]
    for row in range(len(board)):
        for c in range(len(board[row])):
            if board[row][c] == "S":
                start = [c, row]
            if board[row][c] == "G":
                goal = [c, row]

    shortestPath(start, goal, board)

main()