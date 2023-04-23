//append
//prepend
//find
//insertAfter
//toArray
//toString
//delete
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  toArray() {
    let list = [];
    let node = this.head;
    while (node) {
      list.push(node);
      node = node.next;
    }
    return list;
  }
  toString() {
    let str = [];
    let node = this.head;
    while (node) {
      str.push(node.value);

      node = node.next;
    }
    return str.toString();
  }
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      return this;
    }
    this.tail.next = node;
    this.tail = node;
  }
  preppend(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      return this;
    }
    let old = this.head;
    this.head = node;
    this.head.next = old;
  }
  find(target) {
    let current = this.head;
    while (current.next) {
      if (current.value === target) return current;
      current = current.next;
    }

    return "not in linkedlist";
  }
  insertAfter(after, value) {
    let current = this.head;
    while (current.next) {
      if (current.value === after) {
        let old = current.next;
        current.next = new Node(value, old);
        return this;
      }
      current = current.next;
    }
    return "Can't be inserted";
  }
  delete(value) {
    let current = this.head;
    while (current.next) {
      if (current.value === value && current.next) {
        current.value = current.next.value;
        current.next = current.next.next;
      } else if (current.next.value === value && !current.next.next) {
        this.tail = current;
        return;
      } else {
        current = current.next;
      }
    }
    return this;
  }
}
let node1 = new LinkedList();
// node1.preppend("c");
// node1.append("a");

// node1.append("b");
// node1.preppend("c");
// node1.preppend("c");
// node1.preppend("c");

// node1.preppend("d");
// node1.append("c");
// console.log(node1);

// //console.log(node1.find("c"));
// console.log(node1.insertAfter("dc", "m"));
// //console.log(node1.delete("c"));
node1.append("a");
node1.append("b");
node1.append("c");
console.log(node1.toArray());
console.log(node1.toString());
export default LinkedList;
