木構造の差分抽出関数を作成しなさい。

データ型

```
// ノード
type VNode = {
    content: string
    children: VNode[]
    index: number
}

// 差分
type Patch = {
    type: 'delete' | 'create' | 'update'
    index: number // 'delete'と'update'の場合そのノードのindex、'create'の場合は親のノードのindex
    node?: VNode
}
```

index は root のノードを 0 番目として深さ優先で番号。

`before`と`after`を比較して差分の配列を返す関数を作成する。

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
[
    { type: 'update', index: 2, node: { content: '2_update', children: [] } },
    { type: 'create', index: 3, node: { content: '4_craete', children: [] } },
    { type: 'delete', index: 7 }
]
```
