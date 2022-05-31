import { AboutSimpleType, InformationConfigType, StackType } from '@/models/InformationConfigType';
import { makeAutoObservable } from 'mobx';
import { informationConfig } from "../../config";

type ArrProgressType = Array<StackType[]>
type ArrAboutSimpleType= Array<AboutSimpleType[]>
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

  get ArrAboutSimple() {
    const _arr: ArrAboutSimpleType = []
    this.user.about.simple.forEach((item, index) => {
      if (index % 2 === 0) {
        _arr.push([item])
      } else {
        _arr[_arr.length - 1].push(item)
      }
    })
    return _arr
  }

}

