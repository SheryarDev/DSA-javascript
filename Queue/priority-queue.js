class Node {
    constructor(element, priority) {
      this.element = element;
      this.priority = priority;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push an element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop an element off the stack
    pop() {
      return this.items.pop();
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Peek at the top element of the stack
    peek() {
      return this.items[this.items.length - 1];
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.head = null;
    }
  
    // isEmpty: Check if the queue is empty
    isEmpty() {
      return this.head === null;
    }
  
    // Enqueue: Add an element with a priority
    enqueue(element, priority) {
      const newNode = new Node(element, priority);
      const stack = new Stack();
  
      // Case 1: Queue is empty or new node has highest priority
      if (this.isEmpty() || this.head.priority > priority) {
        newNode.next = this.head;
        this.head = newNode;
        console.log(`Enqueued: ${element} with priority ${priority}`);
        return;
      }
  
      // Case 2: Traverse and use stack to find correct position
      let current = this.head;
      while (current !== null && current.priority <= priority) {
        stack.push(current);
        current = current.next;
      }
  
      // Insert the new node in the correct position
      newNode.next = current;
      if (!stack.isEmpty()) {
        stack.peek().next = newNode;
      }
  
      console.log(`Enqueued: ${element} with priority ${priority}`);
    }
  
    // Dequeue: Remove the element with the highest priority
    dequeue() {
      if (this.isEmpty()) {
        console.log("Priority Queue is empty");
        return null;
      }
      const dequeuedElement = this.head.element;
      this.head = this.head.next;
      console.log(`Dequeued: ${dequeuedElement}`);
      return dequeuedElement;
    }
  
    // Peek: Get the element with the highest priority without removing it
    peek() {
      if (this.isEmpty()) {
        console.log("Priority Queue is empty");
        return null;
      }
      console.log(`Front element: ${this.head.element} with priority ${this.head.priority}`);
      return this.head.element;
    }
  
    // Print Queue: Print all elements in the queue
    printQueue() {
      if (this.isEmpty()) {
        console.log("Priority Queue is empty");
        return;
      }
      let current = this.head;
      while (current !== null) {
        console.log(`Element: ${current.element}, Priority: ${current.priority}`);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const priorityQueue = new PriorityQueue();
  priorityQueue.enqueue("Task A", 2);
  priorityQueue.enqueue("Task B", 1);
  priorityQueue.enqueue("Task C", 3);
  priorityQueue.printQueue(); // Output: Task B (1), Task A (2), Task C (3)
  
  priorityQueue.dequeue();    // Output: Dequeued Task B
  priorityQueue.printQueue(); // Output: Task A (2), Task C (3)
  
  priorityQueue.peek();       // Output: Front element: Task A with priority 2
  