import Stack from "./Stack";

export default class MinimumStack<T extends any> {
  #minstatck: Stack<T> = new Stack<T>();
  #stack: Stack<T> = new Stack<T>();
  public push(data: T) {
    let min = data;
    if (!this.#minstatck.isEmpty && this.#minstatck.peek() < min)
      min = this.#minstatck.peek();
    this.#minstatck.push(min);
    this.#stack.push(min);
  }
  public pop(): T {
    this.#minstatck.pop();
    return this.#stack.pop();
  }
  public getMinimum(): T {
    return this.#minstatck.peek();
  }
}
