const NAMES = {
    John: 10,
    Jon: 3,
    Davis: 2,
    Kari: 3,
    Johnny: 11,
    Carlton: 8,
    Carleton: 2,
    Jonathan: 9,
    Carrie: 5,
}

const SYNONYMS = [
    ['Jonathan', 'John'],
    ['Jon', 'Johnny'],
    ['Johnny', 'John'],
    ['Kari', 'Carrie'],
    ['Carleton', 'Carlton'],
]

interface Node {
    neighbors: Node[]
    name: string
    freq: number
    visited: boolean
}

function getSum(node: Node) {
    if (node.visited) {
        return 0
    }
    node.visited = true
    let sum = node.freq
    node.neighbors.forEach(neighbor => {
        sum += getSum(neighbor)
    })
    return sum
}

function getAllSum(names: { [key: string]: number }, synonyms: string[][]) {
    const nodes: { [key: string]: Node } = {}
    // O(N)
    Object.keys(names).forEach(name => {
        nodes[name] = {
            neighbors: [],
            name,
            freq: names[name],
            visited: false,
        } as Node
    })

    // O(M)
    synonyms.forEach(synonym => {
        nodes[synonym[0]].neighbors.push(nodes[synonym[1]])
        nodes[synonym[1]].neighbors.push(nodes[synonym[0]])
    })

    const rootNames: { [key: string]: number } = {}

    // O(N * M) だけど visited ははじかれるので O(N + M) になる
    Object.keys(nodes).forEach(name => {
        const node = nodes[name]
        if (!node.visited) {
            const sum = getSum(node)
            rootNames[name] = sum
        }
    })
    return rootNames
}

console.log(getAllSum(NAMES, SYNONYMS))
