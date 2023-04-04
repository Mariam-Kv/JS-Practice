//массив
//O(1) - получить элемент (знаем позицию элемента)
//О(n) - добавить/удалить
//О(n) - поиск

// Linked list
//+ мгновенно можем добавлять элемент
// - чтобы получить элемент нам надо итерироваться самого начала (мы не имеем индекс элемента)
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  // toString() {
  //   return String(this.value);
  // }
}
// [value,next]->[value,next]->[value,next]

// node - Узел сети
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
  append(value) {
    //О(1)
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }
  prepend(value) {
    //О(1)
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let old = this.head;
      this.head = node;
      this.head.next = old;
    }
  }
  insertAfter(after, value) {
    //О(n)
    let found = this.find(after);
    if (found) {
      let temp = found.next;
      let newNode = new Node(value);
      found.next = newNode;
      newNode.next = temp;
      return this;
    }
    return false;
  }
  find(value) {
    //О(n)
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return false;
  }
  toArray() {
    //О(n)
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current);
      current = current.next;
    }
    return arr;
  }
  delete(value) {
    //О(n)
    let current = this.head;
    if (!this.find(value)) {
      return "Such element not found";
    }
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      while (current.next) {
        if (current.next.value === value) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    }

    return this;
  }
}

let list = new LinkedList();

// list1.append("a");
// list1.append("b");

// list1.append("b");
// list1.append("c");
// list1.append("b");
// // list1.prepend("d");
// // list1.append("m");
// // console.log(list1);
// // console.log(list1.find("b"));
// list1.insertAfter("a", "m");
// list1.prepend("f");
// // console.log(list1);
// // console.log(list1.toArray());
// console.log(list1.toString());
// console.log(list1.delete("b"));
// console.log(list1.toString());
