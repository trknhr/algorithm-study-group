import java.util.*

class Point(
    val x: Int,
    val y: Int,
    val cost: Int
): Comparable<Point> {
    override fun compareTo(other: Point): Int {
        return compareValues(cost, other.cost)
    }
}

fun solve(input: String) {
    val strMap = input.split("\n").map { it.toCharArray() }.toTypedArray()

    var startX = 0
    var startY = 0
    var goalX = 0
    var goalY = 0

    val h = strMap.size
    val w = strMap[0].size
    val map = Array(w) { Array(h) { 0 } }


    val W = -1
    val S = 1
    val T = 2
    val B = 3
    val R = 4
    val L = 5

    val queue = PriorityQueue<Point>()

    strMap.forEachIndexed { y, line ->
        line.forEachIndexed { x, c ->
            when (c) {
                'S' -> { startX = x; startY = y; map[x][y] = S }
                'G' -> { goalX = x; goalY = y }
                '*' -> { map[x][y] = W }
            }
        }
    }

    var cnt = 0
    queue.add(Point(startX, startY, 0))
    while(true) {
        ++cnt
        val p = queue.poll()
        if ((p.x == goalX) && (p.y == goalY)) break;
//        println("${p.x}, ${p.y}")

        Triple(p.x + 1, p.y, L).let { (nextX, nextY, d) ->
            if (map[nextX][nextY] == 0) {
                map[nextX][nextY] = d

                val cost = p.cost + 1 + Math.abs(nextX - goalX) + Math.abs(nextY - goalY)
                queue.add(Point(nextX, nextY, cost))
            }
        }
        Triple(p.x, p.y + 1, T).let { (nextX, nextY, d) ->
            if (map[nextX][nextY] == 0) {
                map[nextX][nextY] = d

                val cost = p.cost + 1 + Math.abs(nextX - goalX) + Math.abs(nextY - goalY)
                queue.add(Point(nextX, nextY, cost))
            }
        }
        Triple(p.x - 1, p.y, R).let { (nextX, nextY, d) ->
            if (map[nextX][nextY] == 0) {
                map[nextX][nextY] = d

                val cost = p.cost + 1 + Math.abs(nextX - goalX) + Math.abs(nextY - goalY)
                queue.add(Point(nextX, nextY, cost))
            }
        }
        Triple(p.x, p.y - 1, B).let { (nextX, nextY, d) ->
            if (map[nextX][nextY] == 0) {
                map[nextX][nextY] = d

                val cost = p.cost + 1 + Math.abs(nextX - goalX) + Math.abs(nextY - goalY)
                queue.add(Point(nextX, nextY, cost))
            }
        }
    }

    val route = Array(w) { Array(h) { ' ' } }
    var x = goalX
    var y = goalY
    while (true) {
        if ((x == startX) && (y == startY)) break;

        route[x][y] = '$'

        val d = map[x][y]
        when(d) {
            T -> { y -= 1}
            B -> { y += 1}
            R -> { x += 1}
            L -> { x -= 1}
        }
    }

    println(cnt)

    strMap.forEachIndexed { y, line ->
        line.forEachIndexed { x, c ->
            if (c == ' ') {
                print(route[x][y])
            } else {
                print(c)
            }
        }
        println()
    }
}

fun main(args: Array<String>) {

    solve(
"""
**************************
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
**************************
""".trim()
    )
}
