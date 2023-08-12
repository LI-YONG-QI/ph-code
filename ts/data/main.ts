import { Queue,Stack } from "./class";
var q = new Queue();
q.push(1);
q.printFront();
q.push(2);
q.pop();
q.printFront();

var st = new Stack();
st.printFront();
st.push(1);
st.push(2);
st.push(3);
st.pop();
st.printFront();
st.push(3);
console.log(st.length);
