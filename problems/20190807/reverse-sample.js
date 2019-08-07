class LinkedNode {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }

    getList() {
        let result = ''
        let temp = this
        while (temp !== null) {
            result += temp.value + ' '
            temp = temp.next
        }
        return result
    }
}

const list = [1, 4, 5, 7, 8, 10]

let head = null
let temp = null
for(const l of list) {
    if(head == null) {
        head = new LinkedNode(l)
        temp = head
    } else {
        temp.next = new LinkedNode(l)
        temp = temp.next
    }
}

console.log(`list are: ${head.getList()}`)
