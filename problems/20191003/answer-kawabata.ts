type VNode = {
    content: string
    children: VNode[]
}

type Patch = {
    type: 'delete' | 'create' | 'update'
    index: number
    node?: VNode
}

const before: VNode = {
    content: '0',
    children: [
        {
            content: '1',
            children: [
                {
                    content: '2',
                    children: [],
                },
            ],
        },
        {
            content: '3',
            children: [
                {
                    content: '4',
                    children: [],
                },
            ],
        },
        {
            content: '5',
            children: [
                {
                    content: '6',
                    children: [],
                },
                {
                    content: '7',
                    children: [],
                },
            ],
        },
    ],
}

const after: VNode = {
    content: '0',
    children: [
        {
            content: '1',
            children: [
                {
                    content: '2_update',
                    children: [],
                },
            ],
        },
        {
            content: '3',
            children: [
                {
                    content: '4',
                    children: [],
                },
                {
                    content: '4_craete',
                    children: [],
                },
            ],
        },
        {
            content: '5',
            children: [
                {
                    content: '6',
                    children: [],
                },
            ],
        },
    ],
}

const patches = diff(before, after)
console.log(patches)

function diff(from: VNode, to: VNode): Patch[] {
    const patches: Patch[] = []
    const map = indexMap(from)
    compare(from, to, map, patches)
    return patches
}

function compare(
    from: VNode,
    to: VNode,
    map: Map<VNode, number>,
    patches: Patch[]
) {
    if (from.content !== to.content) {
        const i = map.get(from)
        const p: Patch = {
            type: 'update',
            index: i,
            node: to,
        }
        patches.push(p)
    }
    const len =
        from.children.length > to.children.length
            ? from.children.length
            : to.children.length
    for (let i = 0; i < len; i++) {
        if (!from.children[i]) {
            patches.push({
                type: 'create',
                index: map.get(from),
                node: to.children[i],
            })
        } else if (!to.children[i]) {
            const idx = map.get(from.children[i])
            patches.push({
                type: 'delete',
                index: idx,
            })
        } else {
            compare(from.children[i], to.children[i], map, patches)
        }
    }
}

function indexMap(node: VNode) {
    const map = new Map<VNode, number>()
    let i = 0
    recur(node, node => {
        map.set(node, i)
        i++
    })
    return map
}

function recur(node: VNode, handler: (node: VNode) => void) {
    handler(node)
    node.children.forEach(n => recur(n, handler))
}
