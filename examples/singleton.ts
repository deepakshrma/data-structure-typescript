const list: Map<string, Singleton> = new Map();
export class Singleton {
  #name: string;
  constructor(props: { name: string } = { name: "default" }) {
    this.#name = props.name;
  }
  static getInstance(name: string = "default") {
    if (list.has(name)) return list.get(name);
    const newInstance = new Singleton({ name });
    list.set(name, newInstance);
    return newInstance;
  }
  toString() {
    return `{name: ${this.#name}}`
  }
}

export default Singleton.getInstance();