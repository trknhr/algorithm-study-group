木構造の差分抽出関数を作成しなさい。

データ型

```
// ノード
type VNode = {
    content: string
    children: VNode[]
}

// 差分
type Patch = {
    type: 'delete' | 'create' | 'update'
    node?: VNode
}
```

`before`と`after`を比較する。

```
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
```

こういう差分データを返す関数を作成する。

```
{
    2: { type: 'update', node: { content: '2_update', children: [] } },
    4: { type: 'create', node: { content: '4_craete', children: [] } },
    7: { type: 'delete' }
}
```
