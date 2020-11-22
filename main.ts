import LinkedList from "./LinkedList";
import Stack from "./Stack";

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

const stack = new Stack();

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
