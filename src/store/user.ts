import {makeAutoObservable} from 'mobx';

class User {
  constructor() {
    makeAutoObservable(this)
  }
  counter=0;
  
  increment = () => {
    this.counter++
  }
}

const userStore = new User();
export {userStore}
