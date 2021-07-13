const getCharIndex = (c: string) => c.charCodeAt(0) - "a".charCodeAt(0)
class Trie {
  static NUM_OF_CHARACTERS = 26
  #children: Trie[] = [];
  #size = 0
  #isEndOfWord = false
  #getNode = (c: string) => this.#children[getCharIndex(c)]
  #setNode = (c: string, n: Trie) => this.#children[getCharIndex(c)] = n
  add(s: string, index: number = 0) {
    this.#size++;
    if (index === s.length) {
      this.#isEndOfWord = true;
      return
    }
    const current = s.charAt(index);
    let trie: Trie = this.#getNode(current);
    if (!trie) {
      trie = new Trie()
      this.#setNode(current, trie);
    }
    trie.add(s, index + 1)
  }
  findCount(key: string, i: number = 0): number {
    if (i === key.length) return this.#size;
    let node: Trie = this.#getNode(key.charAt(i))
    if (!node) return 0
    return node.findCount(key, i + 1)
  }
  search(key: string, i: number = 0): boolean {
    if (i === key.length) return this.#isEndOfWord;
    let node: Trie = this.#getNode(key.charAt(i))
    if (!node) return false
    return node.search(key, i + 1)
  }
}
function main() {
  const dic = new Trie();
  dic.add("gayle")
  dic.add("gary")
  dic.add("geena")
  dic.add("alex")
  dic.add("andy")
  console.log(dic.findCount("ga"))
  console.log(dic.findCount("gee"))
  console.log(dic.findCount("an"))
  console.log(dic.findCount("ad"))
  console.log(dic.search("gayle"))
  console.log(dic.search("andy"))
  console.log(dic.search("ady"))
  console.log(dic.search("an"))
  console.log(dic.search("alex"))
}
main()