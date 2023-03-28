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
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current);
      current = current.next;
    }
    return arr;
  }
  // remove(value) {
  //   let found = this.find(value);
  //   if (!found) {
  //     return;
  //   }
  //   let current = this.head;
  //   console.log(current);
  //   while (current) {
  //     if (current === found) {
  //       current.next = current.next.next;
  //     }
  //     current = current.next;
  //   }
  //   return this;
  // }
}

let list = new LinkedList();

list.append("a");
list.append("b");

console.log(list.remove("a"));
