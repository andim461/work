import {makeAutoObservable} from 'mobx';
class IndexCounter{
    count = 0;
    constructor(){
        makeAutoObservable(this);
    }
    increment(){
        this.count++;
    }
    decrement(){
        this.count++;
    }
}
export default new IndexCounter();
