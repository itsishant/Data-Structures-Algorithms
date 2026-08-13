// first find the middle element 
let slow = head;
let fast = head; 

while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
}

// reverse second half
let prev = null;
let slow = curr;
let temp;

while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
}

// compare first half and second half
let firstNode = head;
let secondNode = prev;

while (secondNode) {
    if (firstNode.val != secondNode.val) {
        return false;
    }

    firstNode = firstNode.next;
    secondNode = secondNode.next;
}
return true;