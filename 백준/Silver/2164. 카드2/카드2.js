let input = require('fs').readFileSync('/dev/stdin').toString();

let N = Number(input);

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    add(value) {
        const newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            } else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
            }
        this.tail = newNode;
        this.length++;
        return newNode;
    }
    
    getHead() {
        return this.head.value;
    }
    
    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }
    
    getSize() {
        return this.length;
    }
}

const list = new LinkedList();

for(let i = 1; i<=N; i++) list.add(i);

while(list.getSize() > 1){
      list.removeHead();
      list.add(list.getHead());
      list.removeHead();
      }

console.log(list.getHead());