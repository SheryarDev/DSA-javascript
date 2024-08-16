//[0,1,2,3,5] rear=5 front=2
//rear=
//cricular quque link: https://www.simplilearn.com/tutorials/data-structure-tutorial/circular-queue-in-data-structure

class CircularQueue {
  constructor(MAXSIZE = 5) {
    this.MAXSIZE = MAXSIZE;
    this.queue = new Array(MAXSIZE);
    this.front = -1; // this pointer is incremented when  element is removed fromCqueue
    this.rear = -1; // this pointer is incremented when new element is added inCqueue
  }

  isEmpty() {
    if (this.front === -1 && this.rear === -1) {
      console.log("Queue is empty");
      return true;
    }
    return false;
  }

  isFull() {
    if ((this.rear + 1) % this.MAXSIZE === this.front) {
      console.log("CircularQueue is full");
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
      //if rear pointer is at the end of the queue and front is not at 0th index then reset s Rear = 0
      if (this.rear + 1 === this.MAXSIZE && this.front !== 0) {
        //rear is set to -1 instead of 0 beacuse in our logic we first increment rear and then assign the value
        this.rear = -1;
      }

      this.rear = this.rear + 1;
      this.queue[this.rear] = val;
      console.log("Enqueued:", val);
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const value = this.queue[this.front];
      console.log("Dequeued:", value);
      if (this.front === this.rear) {
        //  If there is only one element in a queue, set both Front and Rear to -1 (IF Front = Rear, set Front = Rear = -1)
        this.front = this.rear = -1;
      } else if (this.front === this.MAXSIZE - 1) {
        this.front = 0;
      } else {
        this.front = this.front + 1;
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

const Cqueue = new CircularQueue();
Cqueue.enqueue(2);
Cqueue.enqueue(3);
Cqueue.enqueue(5);
Cqueue.printQueue(); // Output:Cqueue: 2 3 5
Cqueue.dequeue(); // Output: Dequeued: 2
Cqueue.enqueue(7);
Cqueue.enqueue(9);
Cqueue.enqueue(10); // Attempt to enqueue when full should show "Queue is full"
Cqueue.printQueue(); // Output:Cqueue: 3 5 7 9
Cqueue.dequeue(); // Output: Dequeued: 3
Cqueue.enqueue(23);
Cqueue.dequeue();
Cqueue.enqueue(32);
Cqueue.printQueue(); // Output:Cqueue: 7,9,10,23,32
