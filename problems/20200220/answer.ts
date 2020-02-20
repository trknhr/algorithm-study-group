type DNode = {
    // このノードから伸びるエッジの情報
    edges: Edge[] // 各エッジ
    id: number

    // ダイクストラ法のためのデータ
    done: boolean // 確定ノードか否か
    cost: number // このノードへの現時点で判明している最小コスト
    previous: DNode | null
}

type Edge = {
    to: DNode
    cost: number
}

function createNode(id: number): DNode {
    return {
        edges: [],
        id,
        done: false,
        cost: -1,
        previous: null,
    }
}

function addNode(from: DNode, to: DNode, cost: number) {
    from.edges.push({
        to,
        cost,
    })
}

function createNodes() {
    var node1 = createNode(1) // start
    var node2 = createNode(2) // top
    var node3 = createNode(3) // center
    var node4 = createNode(4) // bottom-left
    var node5 = createNode(5) // bottom-right
    var node6 = createNode(6) // goal

    addNode(node1, node2, 5)
    addNode(node1, node3, 4)
    addNode(node1, node4, 2)

    addNode(node2, node1, 5)
    addNode(node2, node6, 6)
    addNode(node2, node3, 2)

    addNode(node3, node2, 2)
    addNode(node3, node1, 4)
    addNode(node3, node4, 3)
    addNode(node3, node5, 2)

    addNode(node4, node1, 2)
    addNode(node4, node3, 3)
    addNode(node4, node5, 6)

    addNode(node5, node4, 6)
    addNode(node5, node3, 2)
    addNode(node5, node6, 4)

    addNode(node6, node2, 6)
    addNode(node6, node5, 4)

    return [node1, node2, node3, node4, node5, node6]
}

let NODES = createNodes()

// initial process
let current = NODES[0]
current.cost = 0
const targets: DNode[] = current.edges.map(e => e.to)

while (true) {
    // update edge's node cost
    for (const edge of current.edges) {
        const cost = edge.cost + current.cost
        if (edge.to.cost === -1 || cost < edge.to.cost) {
            edge.to.cost = cost
            edge.to.previous = current
        }
    }
    current.done = true

    let minCostNode: DNode = targets[0]
    let index = 0
    for (let i = 1; i < targets.length; i++) {
        const n = targets[i]
        if (n.cost < minCostNode.cost) {
            minCostNode = n
            index = i
        }
    }
    targets.splice(index, 1)
    for (const e of minCostNode.edges) {
        if (!e.to.done && targets.indexOf(e.to) < 0) {
            targets.push(e.to)
        }
    }
    current = minCostNode
    if (targets.length === 0) {
        break
    }
}

while (current) {
    console.log('trace', current.id, current.cost)
    current = current.previous
}
