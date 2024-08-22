// Node class for a circular linked list
class Node {
    constructor(data) {
        this.data = data;       // The value stored in the node
        this.next = null;       // Reference to the next node
    }
}

// Circular Linked List class
class CircularLinkedList {
    constructor() {
        this.head = null;       // Reference to the head (first node)
        this.size = 0;          // Size of the list
    }

    // Add a node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {      // If the list is empty, set the new node as head and point it to itself
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let current = this.head;
            // Traverse to the last node
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;  // Link the last node to the new node
            newNode.next = this.head; // Link the new node back to the head
        }
        this.size++;            // Increase the size of the list
    }

    // Add a node to the beginning of the list
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {      // If the list is empty, set the new node as head and point it to itself
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let current = this.head;
            // Traverse to the last node
            while (current.next !== this.head) {
                current = current.next;
            }
            newNode.next = this.head; // Link the new node to the current head
            current.next = newNode;   // Link the last node to the new node
            this.head = newNode;      // Update the head to be the new node
        }
        this.size++;            // Increase the size of the list
    }

    // Remove a node from the list by its value
    remove(data) {
        if (!this.head) return null; // If the list is empty, return null

        let current = this.head;
        let prev = null;

        // Traverse the list
        do {
            if (current.data === data) {
                if (current === this.head) {
                    // If there's only one node in the list
                    if (this.head.next === this.head) {
                        this.head = null;
                    } else {
                        // If removing the head
                        let lastNode = this.head;
                        while (lastNode.next !== this.head) {
                            lastNode = lastNode.next;
                        }
                        this.head = this.head.next;
                        lastNode.next = this.head;
                    }
                } else {
                    // If removing a middle or last node
                    prev.next = current.next;
                }
                this.size--; // Decrease the size of the list
                return current.data; // Return the removed data
            }
            prev = current;
            current = current.next;
        } while (current !== this.head);

        return null; // If the data is not found, return null
    }

    // Print the list data
    print() {
        if (!this.head) return;

        let result = [];
        let current = this.head;
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);

        console.log(result.join(' -> ') + ' -> ' + this.head.data);
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
const list = new CircularLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print(); // Output: 0 -> 1 -> 2 -> 3 -> 0

list.remove(2);
list.print(); // Output: 0 -> 1 -> 3 -> 0

console.log(list.getSize()); // Output: 3
console.log(list.isEmpty()); // Output: false
