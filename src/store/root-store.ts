import ProjectStore from "./project";
import StackStore from "./stack";
import UserStore  from "./user";


export interface RootStore {
  userStore: UserStore
  projectStore: ProjectStore
  stackStore: StackStore
}

export class RootStore {
  constructor() {
    this.userStore = new UserStore()
    this.projectStore = new ProjectStore()
    this.stackStore = new StackStore()
  }

}
