function calc(value) {
    const str = value + "";
    const digitNUm = (str).length;
    let res = 0;
    for (var i = 0; i < digitNUm; i++) {
       res += Math.pow(parseInt(str[i]), 2);
    }
    return res;
}

function chainDigit(value) {
   let res = 0;
   const map1 = new Map();
   const map89 = new Map();
   for (var i = 1; i < value; i++) {
       let val = calc(i);
       let isContinue = true;
       while (isContinue) {
           if (val === 1) {
               map1.set(val, true);
               isContinue = false;
           } else if (val === 89) {
               map89.set(val, true);
               res++;
               isContinue = false;
           } else if (map1.has(val)) {
               map1.set(val, true);
               isContinue = false;
           } else if (map89.has(val)) {
               map89.set(val, true);
               res++;
               isContinue = false;
           }
           val = calc(val);
       }
   }
   return res;
}
console.log("result", chainDigit(10000000));
