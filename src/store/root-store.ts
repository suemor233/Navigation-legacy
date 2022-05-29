import UserStore  from "./user";


export interface RootStore {
  userStore: UserStore
}

export class RootStore {
  constructor() {
    this.userStore = new UserStore()
  }

}
