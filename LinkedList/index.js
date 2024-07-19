

class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    //At start tail and head will be same
    this.tail = this.head;
    this.size = 1;
  }

  //Inser new Node at the end of linkedlist
  appendNode(nodeData){
    let newNode={
        value:nodeData,
        next:null

    }

   this.tail.next=newNode;// add new Node in the next of existing last node(tail) next
   this.tail=newNode;  //make newNode the tail of linked list
   this.size+=1;  // increase the linked list size
  }

  //traverse linkedlist

  traverse(){
    let counter=0;
    let currentNode=this.head; // first node is our start refercence
    while(counter<this.size){
        // console.log("currentNode",currentNode)
        currentNode=currentNode.next; // iterate the linked list node
        counter++;
    }
    console.log("list",this.head)
  }

  //delete Node
  deleteNode(index){
    let counter=1;
    //lead Node is node that is before the node which we want to delete
    let leadNode=this.head;

    //if node to be deleted is first then replace address of second node in head;
    if(index===1){
        this.head=this.head.next;
    }else{
        while(counter<index-1){
            leadNode=leadNode.next;
            counter++;
        }
       
    }
    //nextnode is node which is after the node which we want to delete.
    //here we are adding reference of nextNode in leadNode next
    let nextNode=leadNode.next.next;
    leadNode.next=nextNode;
    this.size-=1;;
  }

  // insert node at any position
  insertNodeAtPosition(position,nodeData){
    let counter=1;
    let currentNode=this.head;

    while(counter<position){
        counter++;
        currentNode=currentNode.next
    }
    let nextNode=currentNode.next;
    currentNode.next={
        value:nodeData,
        next:nextNode
    }
  }

  // search Node in LinkedList

  searchNode(data){
    let result=undefined;
    let lead=this.head;
    let loop=true;
    while(loop){
        lead=lead.next;
        loop=!!lead;
        if(loop && lead.value===data){
            loop=false;
            result=lead;
        }
    }
    return result;

  }
}

let list=new LinkedList(200)
list.appendNode(300)
list.appendNode(400)
list.appendNode(500)
list.traverse()
list.deleteNode(2)
list.deleteNode(1)
list.traverse()
list.insertNodeAtPosition(2,10)
list.traverse()
console.log("searchednode",list.searchNode(500))
