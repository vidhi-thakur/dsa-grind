## Queue data structure

- A queue can be implemented with an array and a linked list.

Queue data structure follows <u>First In First Out (FIFO)</u> principle. Imagine standing in a line in a coffee shop, the first person added to the line is served coffee first.

Methods that a queue data structure has: -

1. <u>enqueue</u>: add element to the end of the array,
2. <u>dequeue</u>: removes element from the start of the array,
3. <u>peek</u>: returns first element without removing it,
4. <u>isEmpty</u>: checks if the array is null,
5. <u>size</u>: returns the size of the array,
6. <u>print</u>: prints all the elements

### Implementstion

```
class Queue {
    constructor() {
        this.item = [];
    }

    enqueue(el) {
        this.item.push(el);
    }

    dequeue() {
        return this.isEmpty() ? "Queue is empty!" :  this.item.shift();
    }

    peek() {
        return this.isEmpty() ? "Queue is empty!" : this.item[0];
    }

    isEmpty() {
        return this.item.length === 0;
    }

    size() {
        return this.item.length;
    }

    print() {
        return this.item.forEach(val => console.log(val));
    }
}

let que = new Queue();
que.enqueue(1);
que.enqueue(3);
que.enqueue(6);
que.enqueue(2);
que.enqueue(7);
que.dequeue();
console.log(que.peek()); // 3
console.log(que.size()); // 4
que.print(); // 3 6 2 7
```
