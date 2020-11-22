import { CircularQueue, LinkedList, MinimumStack, Stack } from "./main";

/// Examples

console.log(`###########################
#########LinkedList##
###########################
`);

const list = new LinkedList<number>();
list.addNode(10);
list.addNode(20);
list.addNode(30);
console.log(list.toString());
console.log(`List has 10: ${list.hasElement(10)}`);
console.log(list.popElement());
console.log(`List has 10: ${list.hasElement(10)}`);
console.log(list.toString());
console.log(list.popElement());
console.log(list.popElement());

console.log(list.toString());

/// Examples

console.log(`###########################
#########Stack##
###########################
`);

const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.toString());
stack.push(40);
console.log(stack.toString());
stack.pop();
stack.pop();
stack.pop();
console.log(stack.toString());

// Code to check all opening and closing brackets

function checkOpenCloseBrackets() {
  const matchMap = new Map(
    Object.entries({
      ")": "(",
      "}": "{",
      "]": "[",
    })
  );
  const openBrackets = new Set(matchMap.values());
  function hasMachingParens(exp: string) {
    let parensStack = new Stack<string>();
    const expA = [...exp];
    try {
      for (let index = 0; index < expA.length; index++) {
        const ch = expA[index];
        if (openBrackets.has(ch)) parensStack.push(ch);
        if (matchMap.has(ch) && parensStack.pop() !== matchMap.get(ch))
          return false;
      }
    } catch (error) {
      return false;
    }
    return parensStack.isEmpty;
  }
  console.log(hasMachingParens("(ABC){DEF}[AFD(XYZ)]"));
  console.log(hasMachingParens("(ABC){DEF}[AFD(XYZ)]{"));
  console.log(hasMachingParens("(ABC){DEF}[AFD(}XYZ)]"));
}

checkOpenCloseBrackets();
/// Examples

console.log(`###########################
#########MinimumStack##
###########################
`);

const minStack = new MinimumStack<number>();

minStack.push(2);
minStack.push(4);
minStack.push(1);
minStack.push(3);

console.log(minStack.getMinimum());
minStack.pop();
console.log(minStack.getMinimum());
minStack.pop();
console.log(minStack.getMinimum());

console.log(`###########################
#########CircularQueue##
###########################
`);

const circularQ = new CircularQueue();
circularQ.enqueue(1);
circularQ.enqueue(2);
circularQ.enqueue(3);
circularQ.enqueue(4);
circularQ.enqueue(5);
console.log(circularQ.peek());

console.log(circularQ.dequeue());
console.log(circularQ.dequeue());
console.log(circularQ.dequeue());
console.log(circularQ.dequeue());
console.log(circularQ.dequeue());
circularQ.enqueue(6);
circularQ.enqueue(7);
console.log(circularQ.dequeue());
console.log(circularQ.dequeue());
console.log(circularQ.toString());
