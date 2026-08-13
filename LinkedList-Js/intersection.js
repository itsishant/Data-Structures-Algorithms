let store = new Set();

while (headB != null ) {
    store.add(headB);
    headB = headB.next;
}

while (headA != null) {
    if (store.has(headA)) {
        return headA;
    }
    headA = headA.next;
}
return null;
