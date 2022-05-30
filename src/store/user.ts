import { type } from 'os';
import { InformationConfigType, StackType } from '@/models/InformationConfigType';
import { makeAutoObservable } from 'mobx';
import { informationConfig } from "../../config";

type ArrProgressType = Array<StackType[]>
export default class UserStore {
  constructor() {
    makeAutoObservable(this)
  }
  user: InformationConfigType = informationConfig

  get ArrProgress() {
    const _arr: ArrProgressType = []
    this.user.stack.forEach((item, index) => {
      if (index % 2 === 0) {
        _arr.push([item])
      } else {
        _arr[_arr.length - 1].push(item)
      }
    })
    return _arr
  }

}

