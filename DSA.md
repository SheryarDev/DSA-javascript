# DSA Questions or concepts

## Q: is in both queue and stack elements are stored in contiguous memory location?


No, not necessarily. The way elements are stored in memory for stacks and queues can vary depending on the underlying implementation:

### 1. **Array-Based Implementation** (Contiguous Memory):

* **Stack**: If a stack is implemented using an array, then yes, the elements are stored in contiguous memory locations. The size of the stack is fixed, and you push and pop elements by moving an index (the stack pointer) up or down.
* **Queue**: Similarly, if a queue is implemented using an array, the elements are stored contiguously. However, managing a queue with an array can be tricky because of the need to shift elements (in a basic implementation) or manage circular wrapping (in a circular queue).

### 2. **Linked List-Based Implementation** (Non-Contiguous Memory):

* **Stack**: If a stack is implemented using a linked list, the elements are not stored in contiguous memory locations. Each element (node) points to the next one, and the nodes can be scattered throughout memory.
* **Queue**: A queue can also be implemented using a linked list, where each element points to the next. Again, the elements are not stored contiguously in this case.

### Summary:

* **Array-based implementation**: Elements are stored in contiguous memory.
* **Linked list-based implementation**: Elements are not stored in contiguous memory.

Whether elements are stored contiguously or not depends on the choice of data structure used to implement the stack or queue.
