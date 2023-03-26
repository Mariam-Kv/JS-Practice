class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  // toString() {
  //   return String(this.value);
  // }
}
class LinkedList {
  constructor() {
    //start of linkedlist
    this.head = null;
    this.tail = null;
  }
  append(value) {
    let node = new Node(value, null);
    if (this.tail) {
      this.tail.next = node;
    }
    if (!this.head) {
      this.head = node;
    }

    this.tail = node;
    return this;
  }
  prepend(value) {
    let node = new Node(value, this.head);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    this.head = node;
  }
  toArray() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current);
      current = current.next;
    }
    return arr;
  }
  find(data) {
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current) {
      if (current.value === data) {
        return current;
      }
      current = current.next;
    }
    return false;
  }
  delete(data) {
    let find = this.find(data);
    console.log(find);
  }
}
let list = new LinkedList();
list.append("a").append("b").prepend("c");
// console.log(JSON.stringify(list));
// console.log(list.toArray());
console.log(list.find("a"));
console.log(list.delete("a"));
