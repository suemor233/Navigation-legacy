import { InformationConfigType } from '@/models/InformationConfigType';
import {makeAutoObservable} from 'mobx';
import { informationConfig } from "../../config";
export default class UserStore {
  constructor() {
    makeAutoObservable(this)
  }
  user:InformationConfigType = informationConfig
}

