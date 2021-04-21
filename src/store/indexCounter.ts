import { makeAutoObservable } from "mobx";
class IndexCounter {
  count = 0;
  maxIndex = Infinity;
  constructor() {
    makeAutoObservable(this);
  }
  increment() {
    if (this.count !== this.maxIndex) {
      this.count++;
    }
  }
  decrement() {
    if (this.count !== 0) {
      this.count--;
    }
  }
  setMaxIndex(newMax: number) {
    this.maxIndex = newMax;
  }
}
export default new IndexCounter();
