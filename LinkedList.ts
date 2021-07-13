import Node, { NullableNode } from "./Node";

export default class LinkedList<T extends any> {
  #head: NullableNode<T> = null;
  /**
   * size: get the size of link list
   *
   * complexity: O(n)
   *
   */
  get size(): number {
    if (this.#head === null) {
      return 0;
    } else {
      let size = 0;
      let curr: NullableNode<T> = this.#head;
      while (curr !== null) {
        size++;
        curr = curr.next;
      }
      return size;
    }
  }
  /**
   * isEmpty: Check linklist is empty or not
   *
   * complexity: O(1)
   *
   */
  get isEmpty(): boolean {
    return this.#head === null;
  }
  /**
   * addNode: Add a new node to linklist
   *
   * complexity: O(n)
   *
   */
  public addNode(data: T): void {
    let nextNode = new Node(data);
    if (this.#head === null) {
      this.#head = nextNode;
    } else {
      let node = this.#head;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = nextNode;
    }
  }
  /**
   * popElement: pop out first node from linklist
   *
   * complexity: O(1)
   *
   */
  public popElement(): T | null {
    if (this.#head === null) return null;
    let elm = this.#head.data;
    this.#head = this.#head.next;
    return elm;
  }

  public get head(): Node<T> | null {
    return this.#head;
  }
  /**
   * hasElement: check linklist contains
   *
   * complexity: O(n)
   *
   */
  public hasElement(data: T): boolean {
    if (this.#head === null) return false;
    else {
      let node = this.#head;
      while (node.next !== null) {
        if (node.data === data) return true;
        node = node.next;
      }
      return false;
    }
  }
  /**
   * toString: prettify string
   */
  public toString() {
    return `LinkedList<${typeof this.#head?.data}> {
  head: ${this.#head}, 
  isEmpty: ${this.isEmpty}, 
  size: ${this.size}
}`;
  }
}
