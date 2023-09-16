class Queue {
  volum: number[];
  length: number;
  public printFront() {
    if (this.length == 0) console.log(`can't find the front element`);
    console.log(`This is front element in stack: ${this.front()}`);
  }
  public front() {
    if (this.length == 0) return undefined;
    return this.volum[0];
  }
  public size() {
    return this.length;
  }
  public pop() {
    if (this.length > 0) {
      if (this.length > 1) {
        for (let i = 1; i < this.volum.length; i++) {
          this.volum[i - 1] = this.volum[i];
        }
      }
      this.length -= 1;
    }
  }
  public push(inp: number) {
    this.volum[this.length] = inp;
    this.length += 1;
  }
  constructor() {
    this.length = 0;
    this.volum = [];
  }
}
export { Queue };
