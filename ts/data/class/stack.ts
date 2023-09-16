class Stack {
  volum: number[];
  length: number;
  constructor() {
    this.length = 0;
    this.volum = [];
  }

  public front() {
    if (this.length == 0) return undefined;
    return this.volum[this.volum.length - 1];
  }

  public printFront() {
    if (this.length == 0) console.log(`can't find the front element`);
    console.log(`This is front element in stack: ${this.front()}`);
  }

  public size() {
    return this.length;
  }

  public pop() {
    this.volum.pop();
    this.length--;
  }

  public push(inp: number) {
    this.volum.push(inp);
    this.length++;
  }
}

export { Stack };
