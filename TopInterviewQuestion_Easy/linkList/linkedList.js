//isPalindrome linked List
var isPalindrome = function(head) {
      var result = [];
      var curr = head;
      while (curr) {
          result.push(curr.val);
          curr = curr.next;
      }
      if(result.join('') === result.reverse().join('')) {
          return true;
      } else {
          return false;
      }
};
//Delete Node
var deleteNode = function(node) {
    // copy next node's val into current node
    // delete next node
    node.val = node.next.val;
    node.next = node.next.next;
};

//removeNode from the List
var removeNthFromEnd = function(head, n) {
    // append a new head
    var start = {
        next: head
    };

    var cursor = head;
    var prev = start;
    var target = head;
    var step = n;

    // cursor starts from head
    while (cursor) {
        // we try waiting some steps before moving prev & start
        // cursor & target starts ad the same
        // so we wait step goes to 0 and -1 for each round
        if (step === 0) {
            prev = prev.next;
            target = target.next;
        } else {
            step -= 1;
        }
        cursor = cursor.next;
    }
    prev.next = target.next;
    return start.next;

};

//merge two sorted lists
var mergeTwoLists = function(l1, l2) {
    let mergedLinkedListHead = { val : -1, next : null }; // create dummy node to get started
    let runner = mergedLinkedListHead;
    while(l1 && l2) {
        if(l1.val > l2.val) {
            runner.next = l2;
            l2 = l2.next;
        } else {
            runner.next = l1;
            l1 = l1.next;
        }
        runner = runner.next;
    }
    // l1 = 1->2->3, l2 = 10->20->30
    // In that case l1, will point to null and while loop will break
    // Simply point runner to l2. We do not have to add individual nodes
    runner.next = l1 || l2;
    return mergedLinkedListHead.next;
};
