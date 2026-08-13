let head;

// 1 -> 2 -> 3 -> 4 -> 5 -> null 

if (!head || !head.next) {
    return head;
}

let oddNode = head;
let evenNode = head.next;

let oddStart = evenNode;

while (oddNode.next && evenNode.next) {
    oddNode.next = oddNode.next.next;
    evenNode.next = evenNode.next.next;

    oddNode = oddNode.next;
    evenNode = evenNode.next;

}

oddNode.next = oddStart;
return head;
