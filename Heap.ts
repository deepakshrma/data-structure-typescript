export default class Heap<T extends any> {
  static MAX_SIZE = 20;
  #elements: T[];
  #count = 0;
  // comparator function for generic data structure
  protected comparator: Function;
  constructor(
    size: number = Heap.MAX_SIZE,
    comparator: (a: T, b: T) => number = (a: T, b: T) => Number(a) - Number(b)
  ) {
    this.#elements = new Array<T>(size);
    this.comparator = comparator;
  }
  /**
   * return count
   */
  get count() {
    return this.#count;
  }
  /**
   * isEmpty: Check for empty
   */
  get isEmpty() {
    return this.#count === 0;
  }
  /**
   * isFull: Check for full
   */
  get isFull() {
    return this.#count === this.#elements.length;
  }
  /**
   * swap: swap two index value
   * @param i1
   * @param i2
   */
  protected swap(i1: number, i2: number) {
    let temp = this.#elements[i1];
    this.#elements[i1] = this.#elements[i2];
    this.#elements[i2] = temp;
  }
  /**
   * getLeftChildIndex: get the left child index
   * 2i + 1
   * @param index
   */

  protected getLeftChildIndex(index: number) {
    let rightChildindex = 2 * index + 1;
    if (rightChildindex >= this.#count) return -1;
    return rightChildindex;
  }
  /**
   * getRightChildIndex: get the right child index
   * 2i + 2
   * @param index
   */
  protected getRightChildIndex(index: number) {
    let rightChildindex = 2 * index + 2;
    if (rightChildindex >= this.#count) return -1;
    return rightChildindex;
  }
  /**
   * getParentIndex: get the parent index
   * (i - 1 )/2 whole number
   * @param index
   */
  protected getParentIndex(index: number) {
    if (index < 0 || index > this.#count) return -1;
    return Math.floor((index - 1) / 2);
  }

  /**
   * getElementAtIndex: get element at index i
   * @param i
   */
  protected getElementAtIndex(i: number) {
    return this.#elements[i];
  }
  /**
   * Abstract method has to be overriden in child class
   * @param index
   */
  protected siftDown(index: number) {
    throw Error("siftDown: Override this in child class");
  }
  /**
   * Abstract method has to be overriden in child class
   * @param index
   */
  protected siftUp(index: number) {
    throw Error("siftUp: Override this in child class");
  }
  /**
   * insert: Insert a data to end and siftUp
   * @param data
   */
  public insert(data: T) {
    if (this.#count >= this.#elements.length) throw Error("Heap is full");
    this.#elements[this.#count] = data;
    this.siftUp(this.#count);
    this.#count++;
  }
  /**
   * removeHighestPriority: remove the top element as highest priority
   */
  public removeHighestPriority(): T {
    console.log(this.#elements);
    let min = this.#elements[0];
    this.#elements[0] = this.#elements[this.#count - 1];
    this.#count--;
    this.siftDown(0);
    return min;
  }
}
export class MinHeap<T extends any> extends Heap<T> {
  constructor(
    size: number = Heap.MAX_SIZE,
    comparator?: (a: T, b: T) => number
  ) {
    super(size, comparator);
  }
  /**
   * siftDown: siftDown implementation for MinHeap
   * @param index
   */
  protected siftDown(index: number) {
    const lChildIndex = this.getLeftChildIndex(index);
    const rChildIndex = this.getRightChildIndex(index);
    let smallerIndex = -1;
    if (lChildIndex !== -1 && rChildIndex !== -1) {
      smallerIndex =
        this.comparator(
          this.getElementAtIndex(lChildIndex),
          this.getElementAtIndex(rChildIndex)
        ) < 0
          ? lChildIndex
          : rChildIndex;
    } else if (lChildIndex !== -1) {
      smallerIndex = lChildIndex;
    } else if (rChildIndex !== -1) {
      smallerIndex = rChildIndex;
    }
    if (smallerIndex === -1) return;
    if (
      this.comparator(
        this.getElementAtIndex(smallerIndex),
        this.getElementAtIndex(index)
      ) < 0
    ) {
      this.swap(smallerIndex, index);
      this.siftDown(smallerIndex);
    }
  }
  /**
   * siftUp: siftUp implementation for MinHeap
   * @param index
   */
  protected siftUp(index: number) {
    const parentIndex = this.getParentIndex(index);
    if (
      parentIndex !== -1 &&
      this.comparator(
        this.getElementAtIndex(index),
        this.getElementAtIndex(parentIndex)
      ) < 0
    ) {
      this.swap(parentIndex, index);
      this.siftUp(parentIndex);
    }
  }
  public insert(data: T) {
    super.insert(data);
  }
  public removeHighestPriority(): T {
    return super.removeHighestPriority();
  }
}
