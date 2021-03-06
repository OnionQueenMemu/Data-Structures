class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }
    push(val){
        let node = new Node(val)
        if(this.length === 0){
            this.top = node;
            this.length += 1
        } else {
            let temp = this.top
            this.top = node;
            this.top.next = temp
            this.length += 1;
        }
        return this.length;
    }

    pop(){
        if(this.length === 0) return null;
        if(this.length === 1){
            let temp = this.top;
            this.top = null;
            this.length -= 1;
            return temp.value;
        } else {
            let temp = this.top
            this.top = this.top.next;
            this.length -= 1;
            return temp.value;
        }
    }

    size(){
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
