//массив
//O(1) - получить элемент (знаем позицию элемента)
//О(n) - добавить/удалить
//О(n) - поиск

// Linked list
//O(n) - получить элемент (знаем позицию элемента)/search
//О(1) - добавить/удалить
//+ мгновенно можем добавлять элемент
// - чтобы получить элемент нам надо итерироваться самого начала (мы не имеем индекс элемента)

//append +
//prepend +
//find +
//insertAfter +
//toArray +
//toString +
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
  append(value) {
    let node = new Node(value);
    if (!this.tail) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.tail = node;
  }
  preppend(value) {
    let node = new Node(value);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    }
    if (this.tail) {
      let old = this.head;
      this.head = new Node(value, old);
    }
  }
  find(value) {
    if (!this.tail) {
      return "Linked list is empty";
    }
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return false;
  }
  insertAfter(target, value) {
    if (!this.tail) {
      return "Linked list is empty";
    }
    let current = this.head;
    while (current) {
      if (current.value === target) {
        let old = current.next;
        current.next = new Node(value, old);
        return this;
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
  toString() {
    let str = [];
    let current = this.head;
    while (current) {
      str.push(current.value);
      current = current.next;
    }
    return str.toString();
  }
  delete(value) {
    //fitst element
    if (!this.tail) {
      return false;
    }
    while (this?.head.value === value) {
      this.head = this.head.next;
    }
    //middle element

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    //last element
    if (this.tail.value === value) {
      this.tail = current;
    }
    return this;
  }
}

let node = new LinkedList();

node.append("a");
node.append("b");
node.append("c");

node.preppend("c");
node.preppend("c");

// // console.log(node.find("c"));
// console.log(node.insertAfter("a", "m"));
// node.append("c");
// console.log(node.toArray());
// console.log(node.toString());
// node.delete("c");
console.log(node);
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
// delete(value) {
//   if (!this.tail) {
//     return false;
//   }
//   let current = this.head;
//   while (this.head && this.head.value === value) {
//     this.head = this.head.next;
//   }
//   while (current.next) {
//     if (current.next.value === value) {
//       let old = current.next.next;

//       current.next = old;
//     } else {
//       current = current.next;
//     }
//   }
//   if ((this.tail.value = value)) {
//     console.log(current);
//     this.tail = current;
//   }
//   return this;
// }

