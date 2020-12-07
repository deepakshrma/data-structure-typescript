/**
 * LRUCache: A data structure that follows the constraints of a Least Recently Used (LRU) cache.
 */
class LRUCache<K = string, V = any> {
  /**
   * capacity: capacity of LRUCache
   * @default 10
   */
  #capacity: number;
  /**
   * cache: cache map to store key value
   */
  #cache: Map<K, Node<K, V>>;
  /**
   * head: head for doubly linked list
   */
  #head: Node<K, V> = new Node();
  /**
   * tail: tail for doubly linked list
   */
  #tail: Node<K, V> = new Node();
  constructor(capacity: number = 10) {
    this.#capacity = capacity;
    this.#cache = new Map();
    this.#head.next = this.#tail;
    this.#tail.prev = this.#head;
  }
  /**
   * add: Add node in front of LinkedList
   * @param node
   */
  private add(node: Node<K, V>) {
    const hNext = this.#head.next;
    this.#head.next = node;
    node.prev = this.#head;
    node.next = hNext;
    hNext.prev = node;
  }
  /**
   * remove: remove node in rare of LinkedList
   * @param node
   */
  private remove(node: Node<K, V>) {
    const nNext = node.next;
    const nPrev = node.prev;
    nNext.prev = nPrev;
    nPrev.next = nNext;
  }
  /**
   * Get value from LRUCache
   * @param key
   */
  public get(key: K) {
    let node = this.#cache.get(key);
    if (node !== undefined) {
      this.remove(node);
      this.add(node);
    }
    return node?.value;
  }
  /**
   * Put value from LRUCache
   * @param key
   */
  public put(key: K, value: V) {
    const node = this.#cache.get(key);
    if (node !== undefined) {
      this.remove(node);
      node.value = value;
      this.add(node);
    } else {
      if (this.#cache.size === this.#capacity) {
        this.#cache.delete(this.#tail.prev.key as K);
        this.remove(this.#tail.prev);
      }
      const node = new Node<K, V>();
      node.key = key;
      node.value = value;
      this.#cache.set(key, node);
      this.add(node);
    }
  }
}
/**
 * Node:
 */
class Node<K, V> {
  key: K;
  next: Node<K, V>;
  prev: Node<K, V>;
  value: V;
}
export default LRUCache;
