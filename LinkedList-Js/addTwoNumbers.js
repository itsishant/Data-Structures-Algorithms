let l1;
let l2; 

// these all are the two linked list which are given

let dummy = new ListNode();
let carry = 0;

while (l1 || l2 || carry) {

    let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    let ansNode = new ListNode(digit);
    dummy.next = ansNode;
    dummy = dummy.next;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;

}

return dummy.next;
