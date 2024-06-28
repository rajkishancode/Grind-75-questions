//Given an array convert it to linked list and find the head from the converted linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return false;
  }

  let head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }

  return head;
}

// Example usage
const inputArray = [1, 2, 3, 4, 5];
const head = arrayToLinkedList(inputArray);
// console.log(head);

// Function to print the linked list (for verification)
function printLinkedList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.next);
    current = current.next;
  }
}

printLinkedList(head); // Output: 1, 2, 3, 4, 5
