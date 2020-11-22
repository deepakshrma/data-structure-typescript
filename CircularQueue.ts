export default class CircularQueue<T extends any> {
  static IS_EMPTY = -1;
  static MAX_LENGTH = 5;
  #headIndex: number = CircularQueue.IS_EMPTY;
  #tailIndex: number = CircularQueue.IS_EMPTY;
  #elements: T[];
  constructor() {
    this.#elements = new Array(CircularQueue.MAX_LENGTH);
  }
  get isEmpty() {
    return this.#headIndex === CircularQueue.IS_EMPTY;
  }
  get isFull() {
    const nextIndex = (this.#tailIndex + 1) % this.#elements.length;
    return nextIndex === this.#headIndex;
  }

  public peek() {
    return this.#elements[this.#headIndex];
  }

  public enqueue(data: T) {
    if (this.isFull) throw Error("Queue is full");
    this.#tailIndex = (this.#tailIndex + 1) % this.#elements.length;

    this.#elements[this.#tailIndex] = data;
    if (this.#headIndex === CircularQueue.IS_EMPTY)
      this.#headIndex = this.#tailIndex;
  }
  public dequeue() {
    if (this.isEmpty) throw Error("Queue is empty");
    const elm = this.#elements[this.#headIndex];

    // for display
    // this.#elements[this.#headIndex] = null;

    if (this.#headIndex === this.#tailIndex) {
      this.#headIndex = CircularQueue.IS_EMPTY;
    } else {
      this.#headIndex = (this.#headIndex + 1) % this.#elements.length;
    }
    return elm;
  }
  public toString() {
    return `CircularQueue {
  data: [${this.#elements}],
  isEmpty: ${this.isEmpty},
  head: ${this.#headIndex},
  tail: ${this.#tailIndex},
}`;
  }
}
