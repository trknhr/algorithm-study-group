名前と人口のマップと同じ読み方リストが与えられ、同じ読み方の名前をまとめた数を返す関数を書きなさい。例えば'Jonathan', 'John'は同じ読み方とするので合算する。最終的なリストにはどの名前を使っても構わない。

```
// 名前と人口のマップ
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

// 同じ読み方の名前リスト
const SYNONYMS = [
    ['Jonathan', 'John'],
    ['Jon', 'Johnny'],
    ['Johnny', 'John'],
    ['Kari', 'Carrie'],
    ['Carleton', 'Carlton'],
]
```
