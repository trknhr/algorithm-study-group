type VNode = {
    content: string
    children: VNode[]
}

type Tree = {
    children: VNode[]
}

type Patch = {
    type: 'delete' | 'create' | 'update'
    index: number
    content?: string
}

const root: Tree = {
    children: [
        {
            content: 'aaa',
            children: [
                {
                    content: 'aaa-0',
                    children: [],
                },
            ],
        },
        ,
        {
            content: 'bbb',
            children: [
                {
                    content: 'bbb-0',
                    children: [],
                },
            ],
        },
        {
            content: 'ccc',
            children: [
                {
                    content: 'ccc-0',
                    children: [],
                },
                {
                    content: 'ccc-1',
                    children: [],
                },
            ],
        },
    ],
}

const update: Tree = {
    children: [
        {
            content: 'aaa',
            children: [
                {
                    content: 'aaa-a',
                    children: [],
                },
            ],
        },
        ,
        {
            content: 'bb',
            children: [
                {
                    content: 'bbb-0',
                    children: [],
                },
            ],
        },
        {
            content: 'ccc',
            children: [
                {
                    content: 'ccc-0',
                    children: [],
                },
            ],
        },
    ],
}

function diff(tree1: Tree, tree2: Tree): Patch[] {}
