export default class Node<T extends any> {
  #data: T;
  #next: Node<T> | null = null;
  constructor(data: T) {
    this.#data = data;
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
}
