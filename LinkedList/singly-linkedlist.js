class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  appendNode(newdata) {
    let newNode = {
      value: newdata,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  traverse() {
    let res = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      res.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log("linked list", res);
    return res;
  }

  removeNode(index) {
    let counter = 1;
    let lead = this.head;
    if (index === 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
    }

    lead.next = lead.next.next;
  }

  searchNode(val) {
    let result = undefined;
    let isFound = true;
    let lead = this.head;

    while (isFound) {
      //set isFound to "false" when likend list reached at last node i.e(null)
      isFound = !!lead;

      lead = lead.next;

      if (isFound && lead.value === val) {
        isFound = false;
        result = lead;
      }
    }
    return result;
  }

  insertNodeAtAnyPosition(pos, data) {
    let counter = 1;
    let currentNode = this.head;
    while (counter < pos) {
      currentNode = currentNode.next;
      counter++;
    }

    let nextNode = currentNode.next;
    currentNode.next = {
      value: data,
      next: nextNode,
    };
  }
}

const linkedList = new LinkedList(1);
linkedList.appendNode(2);
linkedList.appendNode(3);
linkedList.appendNode(4);
linkedList.appendNode(5);
linkedList.insertNodeAtAnyPosition(3, 88);
linkedList.traverse();
console.log("search node", linkedList.searchNode(5));
linkedList.removeNode(1);
linkedList.traverse();
