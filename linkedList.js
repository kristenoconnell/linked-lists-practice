class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }


    get length() {
        let result=0;
        let node=this.head;
    
        while (node) {
            result++;
            node=node.next;
        }
        return result;
    }

    insertAtHead(value) {
        this.head = new Node(value, this.head);
        return this;
    }

    findWithPrevious(isMatch) {
        let index = 0;
        let previous = null;
        let node = this.head;
        while (node) {
          if (isMatch(node, index, this)) {
            return [node, previous];
          }
          index++;
          previous = node;
          node = node.next;
        }
        return [null, null];
      }

    find(isMatch) {
       return this.findWithPrevious(isMatch)[0];
    }

    remove(isMatch) {
        const [matchedNode, previousNode] = this.findWithPrevious(isMatch);
        if (!matchedNode) {
            return null;
        }
        if (this.head === matchedNode) {
            this.head = this.head.next;
        } else {
            previousNode.next = matchedNode.next;
        }
        return this;
    }

    insert(value, isMatch = (node, index) => index === this.length - 1) {
        if (this.head) {
          const previousNode = this.find(isMatch);
    
          if (!previousNode) {
            throw new Error("No match found.");
          }
    
          previousNode.next = new Node(value, previousNode.next);
        } else {
          this.insertAtHead(value)
        }
        return this;
      }

    

}

module.exports = LinkedList;

/*original insert function 
const newNode = new Node(value);
        if (this.head) {
            let tail = this.head;
            while (tail.next) {
                tail = tail.next;
            }    
            tail.next = newNode;      
        } else {
            this.insertAtHead(value);
        }
        return this;
    }

    */