問題: 
Event0-2がそれぞれ10回発生します。イベント発生時には関数が渡されます。
その関数をEvent0 > Event1 > Event2 > Event0 > Event1 > ... の順に実行してください。
関数はPromiseを返すので、Promiseが fulfilled したあとに次の関数を実行します。同時に複数の関数を実行してはいけません。

期待する実行結果
```
ID: 0 / 0 Start
ID: 0 / 0 Finish
 ID: 1 / 0 Start
 ID: 1 / 0 Finish
  ID: 2 / 0 Start
  ID: 2 / 0 Finish
ID: 0 / 1 Start
ID: 0 / 1 Finish
 ID: 1 / 1 Start
 ID: 1 / 1 Finish
  ID: 2 / 1 Start
  ID: 2 / 1 Finish
ID: 0 / 2 Start
ID: 0 / 2 Finish
 ID: 1 / 2 Start
 ID: 1 / 2 Finish
  ID: 2 / 2 Start
  ID: 2 / 2 Finish
ID: 0 / 3 Start
ID: 0 / 3 Finish
 ID: 1 / 3 Start
 ID: 1 / 3 Finish
  ID: 2 / 3 Start
  ID: 2 / 3 Finish
ID: 0 / 4 Start
ID: 0 / 4 Finish
 ID: 1 / 4 Start
 ID: 1 / 4 Finish
  ID: 2 / 4 Start
  ID: 2 / 4 Finish
ID: 0 / 5 Start
ID: 0 / 5 Finish
 ID: 1 / 5 Start
 ID: 1 / 5 Finish
  ID: 2 / 5 Start
  ID: 2 / 5 Finish
ID: 0 / 6 Start
ID: 0 / 6 Finish
 ID: 1 / 6 Start
 ID: 1 / 6 Finish
  ID: 2 / 6 Start
  ID: 2 / 6 Finish
ID: 0 / 7 Start
ID: 0 / 7 Finish
 ID: 1 / 7 Start
 ID: 1 / 7 Finish
  ID: 2 / 7 Start
  ID: 2 / 7 Finish
ID: 0 / 8 Start
ID: 0 / 8 Finish
 ID: 1 / 8 Start
 ID: 1 / 8 Finish
  ID: 2 / 8 Start
  ID: 2 / 8 Finish
ID: 0 / 9 Start
ID: 0 / 9 Finish
 ID: 1 / 9 Start
 ID: 1 / 9 Finish
  ID: 2 / 9 Start
  ID: 2 / 9 Finish
```