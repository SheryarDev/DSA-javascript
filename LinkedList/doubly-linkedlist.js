// Node class for a doubly linked list
class Node {
    constructor(data) {
        this.data = data;       // The value stored in the node
        this.next = null;       // Reference to the next node
        this.prev = null;       // Reference to the previous node
    }
}

// Doubly Linked List class
class DoublyLinkedList {
    constructor() {
        this.head = null;       // Reference to the head (first node)
        this.tail = null;       // Reference to the tail (last node)
        this.size = 0;          // Size of the list
    }

    // Add a node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {      // If the list is empty, set the new node as both head and tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // Link the current tail to the new node
            newNode.prev = this.tail; // Link the new node back to the current tail
            this.tail = newNode;      // Update the tail to be the new node
        }
        this.size++;            // Increase the size of the list
    }

    // Add a node to the beginning of the list
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {       // If the list is empty, set the new node as both head and tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head; // Link the new node to the current head
            this.head.prev = newNode; // Link the current head back to the new node
            this.head = newNode;      // Update the head to be the new node
        }
        this.size++;            // Increase the size of the list
    }

    // Remove a node from the list by its value
    remove(data) {
        if (!this.head) return null; // If the list is empty, return null

        let current = this.head;

        while (current) {
            if (current.data === data) {
                if (current === this.head && current === this.tail) {
                    // If the node is the only node in the list
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    // If the node is the head
                    this.head = this.head.next;
                    this.head.prev = null;
                } else if (current === this.tail) {
                    // If the node is the tail
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                } else {
                    // If the node is in the middle
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.size--; // Decrease the size of the list
                return current.data; // Return the removed data
            }
            current = current.next; // Move to the next node
        }

        return null; // If the data is not found, return null
    }

  
    // Remove a node from the list by its index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null; // Index out of bounds
        }

        let current;
        if (index === 0) {
            // Remove the head
            current = this.head;
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        } else if (index === this.size - 1) {
            // Remove the tail
            current = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            // Remove a node in the middle
            current = this.head;
            let i = 0;
            while (i < index) {
                current = current.next;
                i++;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }

        this.size--; // Decrease the size of the list
        return current.data; // Return the removed data
    }

    // Print the list data
    print() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(' <-> '));
    }

    // Get the size of the list
    getSize() {
        return this.size;
    }

    // Check if the list is empty
    isEmpty() {
        return this.size === 0;
    }
}

// Example usage
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print(); // Output: 0 <-> 1 <-> 2 <-> 3

// list.remove(2);
list.removeAt(1)
list.print(); // Output: 0 <-> 1 <-> 3

console.log(list.getSize()); // Output: 3
console.log(list.isEmpty()); // Output: false
