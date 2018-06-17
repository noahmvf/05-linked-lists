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

    //POP: remove the last element and return that element O(n)
  pop() {
    if (!this.head) {
      return; //if no head just return
    }

    while(currentNode.next != null) { //while we're not at the end of the linked list, keep moving until we get to the end of the linked list
      current = current.next;
    }

    return current;
  }

  //MAP: 
  map(callback) {
    if (typeof callback !== 'function') { 
      throw new Error('Expected a function');
    }

    if (!this.length) { 
      throw new Error('List is empty.');
    }
    const result = new LinkedList();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i));
    }
    return result;
    }
  }
}