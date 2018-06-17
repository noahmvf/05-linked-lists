'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor () {
    this.head = null;
  }

//REMOVE O(n)
  remove(value) {
    if (!this.head) {
      return; //if no head just return
    }

    if(head.value === value) {
      head = head.next; //if we want to delete head, delete
    }

    let currentNode = this.head;

    while(currentNode.next) { //while there's a subsequent node in the list, go down list until next value is the one we want to delete
      if(currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
  }

    //POP: remove the last element and return that element

}