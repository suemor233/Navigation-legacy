import AboutStore from "./about";
import ProjectStore from "./project";
import StackStore from "./stack";
import UserStore  from "./user";


export interface RootStore {
  userStore: UserStore
  projectStore: ProjectStore
  stackStore: StackStore
  aboutStore: AboutStore
}

export class RootStore {
  constructor() {
    this.userStore = new UserStore()
    this.projectStore = new ProjectStore()
    this.stackStore = new StackStore()
    this.aboutStore = new AboutStore()
  }

}
