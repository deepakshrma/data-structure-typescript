import { Stack } from "./main";

export default class QueueWithStack<T extends any> {
  #forwardStack = new Stack<T>();
  #reverseStack = new Stack<T>();
  get isEmpty() {
    return this.#forwardStack.isEmpty && this.#reverseStack.isEmpty;
  }
  get isFull() {
    return this.#forwardStack.isFull || this.#reverseStack.isFull;
  }

  public enqueue(data: T) {
    if (this.isFull) throw Error("Queue is full");
    if (this.#forwardStack.isEmpty) {
      while (!this.#reverseStack.isEmpty)
        this.#forwardStack.push(this.#reverseStack.pop());
    }
    this.#forwardStack.push(data);
  }
  public dequeue() {
    if (this.isEmpty) throw Error("Queue is empty");
    if (this.#reverseStack.isEmpty) {
      while (!this.#forwardStack.isEmpty)
        this.#reverseStack.push(this.#forwardStack.pop());
    }
    return this.#reverseStack.pop();
  }
}
