test(5,19,7)
test(1,4,10)
test(3,4,10)
test(10,20,5)
test(8,10,3)


function test(current, max, len){
    console.log("Cur:",current, ", Max:",max,", Len:",len,", Result:",paging(current, max,len));
}

function paging(current, max, len){
    const result = [];
    const s = Math.max(Math.min(current+Math.floor(len/2), max)-len+1, 1);
    result[0] = s>1 ? "prev": 1;

    for(let i=1; i<len; i++){
        let page = s+i;
        if(page<=max){
            result[i] = page;
        }else{
            return result;
        }
    }
    if(s+len-1<max){
        result[len-1] = "next";
    }
    return result;
}

