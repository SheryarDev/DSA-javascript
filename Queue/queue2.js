class Queue {
    constructor(MAXSIZE = 5) {
      this.MAXSIZE = MAXSIZE;
      this.queue = new Array(MAXSIZE);
      this.front = -1; // this pointer is incremented when  element is removed from queue
      this.rear = -1; // this pointer is incremented when new element is added in queue
    }
  
    isEmpty() {
      if (this.front === -1) {
        console.log("Queue is empty");
        return true;
      }
      return false;
    }
  
    isFull() {
      if ((this.rear + 1)  === this.MAXSIZE) {
        console.log("Queue is full");
        return true;
      }
      return false;
    }
  
    peek() {
      if (!this.isEmpty()) {
        console.log("Front:", this.queue[this.front]);
        return this.queue[this.front];
      }
    }
  
    enqueue(val) {
      if (!this.isFull()) {
        if (this.front === -1) {
          // First element to be enqueued
          this.front = 0;
        }
        this.rear = this.rear + 1
        this.queue[this.rear] = val;
        console.log("Enqueued:", val);
      }
    }
  
    dequeue() {
      if (!this.isEmpty()) {
        const value = this.queue[this.front];
        console.log("Dequeued:", value);
        if (this.front === this.rear) {
          // Queue has only one element, so reset the queue
          this.front = this.rear = -1;
        } else {
          this.front = this.front + 1
        }
        return value;
      }
    }
  
    printQueue() {
      if (!this.isEmpty()) {
        let result = [];
        for (let i = this.front; i !== this.rear; i = (i + 1) % this.MAXSIZE) {
          result.push(this.queue[i]);
        }
        result.push(this.queue[this.rear]);
        console.log("Queue:", result.join(" "));
      }
    }
  }
  
  const queue = new Queue();
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(5);
  queue.printQueue(); // Output: Queue: 2 3 5
  queue.dequeue();    // Output: Dequeued: 2
  queue.enqueue(7);
  queue.enqueue(9);
  queue.enqueue(10);  // Attempt to enqueue when full should show "Queue is full"
  queue.printQueue(); // Output: Queue: 3 5 7 9
  queue.dequeue();    // Output: Dequeued: 3
  queue.printQueue(); // Output: Queue: 5 7 9
  