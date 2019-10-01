type Data = {
    content: string
    children: Data[]
}

type Tree = {
    children: Data[]
}

const node: Data = {
    content: 'aaa',
    children: [],
}

const root: Tree = {
    children: [
        {
            content: '0',
            children: [
                {
                    content: '0-0',
                    children: [],
                },
            ],
        },
        ,
        {
            content: '1',
            children: [
                {
                    content: '1-0',
                    children: [],
                },
            ],
        },
        {
            content: '2',
            children: [
                {
                    content: '2-0',
                    children: [],
                },
            ],
        },
    ],
}

const update: Tree = {
    children: [
        {
            content: '0',
            children: [
                {
                    content: '0-0',
                    children: [],
                },
            ],
        },
        ,
        {
            content: '1',
            children: [
                {
                    content: '1-0',
                    children: [],
                },
            ],
        },
        {
            content: '2',
            children: [],
        },
    ],
}

function diff(tree1: Tree, tree2: Tree) {}
