import Node, { NullableNode } from "./Node";

/**
 * StackOverflowException: Error when stack is full
 */
export class StackOverflowException extends Error {
  constructor(message?: string) {
    super(message);
  }
}
/**
 * StackUnderException: Error when stack is full
 */
export class StackUnderflowException extends Error {
  constructor(message?: string) {
    super(message);
  }
}

/**
 * Stack: Stack implementation in TypeScript
 *
 */
export default class Stack<T extends any> {
  // max size of stack
  static MAX_SIZE = 50;
  #top: NullableNode<T>;
  #size = 0;
  constructor() {
    this.#top = null;
  }
  /**
   * isEmpty: Check linklist is empty or not
   *
   * complexity: O(1)
   *
   */
  get isEmpty(): boolean {
    return this.#size === 0;
  }
  /**
   * push: push a data to stack
   *
   * complexity: O(1)
   *
   */
  public push(data: T) {
    if (this.#size >= Stack.MAX_SIZE) throw new StackOverflowException();
    const elm = new Node(data);
    elm.next = this.#top;
    this.#top = elm;
    this.#size++;
  }
  /**
   * pop: push a data from stack
   *
   * complexity: O(1)
   *
   */
  public pop() {
    if (this.isEmpty) throw new StackUnderflowException();
    const elm = this.#top as Node<T>;
    this.#top = elm.next;
    this.#size--;
    return elm.data;
  }
  /**
   * peek: peek/watch a data from stack
   *
   * complexity: O(1)
   *
   */
  public peek() {
    if (this.isEmpty) throw new StackUnderflowException();
    return (this.#top as Node<T>).data;
  }

  /**
   * toString: prettify string
   */
  public toString() {
    return `Stack<${typeof this.#top?.data}> {
  top: ${this.#top}, 
  isEmpty: ${this.isEmpty},
  size: ${this.#size}
}`;
  }
}
