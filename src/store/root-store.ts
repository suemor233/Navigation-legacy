import BasicStore from "./about/basic";
import DetailStore from "./about/detail";
import ProjectStore from "./project";
import StackStore from "./stack";
import UserStore  from "./user";


export interface RootStore {
  userStore: UserStore
  projectStore: ProjectStore
  stackStore: StackStore
  basicStore: BasicStore
  detailStore: DetailStore
}

export class RootStore {
  constructor() {
    this.userStore = new UserStore()
    this.projectStore = new ProjectStore()
    this.stackStore = new StackStore()
    this.basicStore = new BasicStore()
    this.detailStore = new DetailStore()
  }

}
