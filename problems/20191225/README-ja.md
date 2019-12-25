以下のようなデータ構造がある。

```
const textShape = {
  text: "0123456789",
  styles: [
    {
      index: 0,
      color: "000"
    },
    {
      index: 3,
      color: "f00"
    },
    {
      index: 7,
      color: "0f0"
    }
  ],
  links: [
    {
      startIndex: 4,
      endIndex: 5,
      to: "https://nulab.com"
    },
    {
      startIndex: 6,
      endIndex: 9,
      to: "https://cacoo.com"
    }
  ]
};
```

以下のような構造の HTML を出力せよ。

```html
<span style="color: #000">012</span><span style="color: #f00">3</span
><a href=""><span style="color: #f00">45</span></a
><a href=""
    ><span style="color: #f00">6</span><span style="color: #0f0">789</span></a
>
```
