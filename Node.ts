export type NullableNode<T> = Node<T> | null;

export default class Node<T extends any> {
  #data: T;
  #next: NullableNode<T>;
  constructor(data: T, next: NullableNode<T> = null) {
    this.#data = data;
    this.#next = next;
  }
  get data() {
    return this.#data;
  }
  set data(d: T) {
    this.#data = d;
  }
  get next() {
    return this.#next;
  }
  set next(d: Node<T> | null) {
    this.#next = d;
  }
  public toString() {
    return `Node {data: ${this.#data}, next: ${this.#next}} `;
  }
}
