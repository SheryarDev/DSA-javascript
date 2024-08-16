

class Queue {
  MAXSIZE = 5;
  queue = [];


  isEmpty() {
    if (this.queue.length === 0) {
      console.log("queue is Emty");
      return true;
    }
  }
  isFull() {
    if (this.queue.length === this.MAXSIZE) {
      console.log("queue is full");
      return true;
    }
  }
 // Front: Get the front element of the queue
  peek() {
    if(!this.isEmpty()){
    console.log("font",this.queue[0])
    return this.queue[0];
    }
  }
  // Enqueue: Add an element to the end of the queue
  enuque(val) {
    if (!this.isFull()) {
      console.log("val",val);
      this.queue.push(val);
    }
  }
 // Dequeue: Remove an element from the front of the queue
  dequeue() {
    if (!this.isEmpty()) {
        console.log("remove",this.queue.shift())
    }
  }
}

const queue=new Queue()
queue.enuque(2)
queue.enuque(3)
// queue.peek()
console.log("quqeue",queue.queue)
queue.dequeue()
queue.dequeue()