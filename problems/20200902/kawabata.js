function hanoi(n, from, to, work) {
  if (n > 0) {
      hanoi(n-1, from, work, to);
      console.log(n, "番目の円盤を", from, "から", to, "に移動");
      hanoi(n-1, work, to, from);
  }
}

for (let i = 1; i <= 5; i++) {
  console.log("start: ", i);
  hanoi(i, "A", "B", "C");
}
