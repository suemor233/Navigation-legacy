import { makeAutoObservable, runInAction } from 'mobx';
import { informationConfig } from "../../config";
import ws from '@/socket';

import { toast } from 'react-toast';
import { aboutInfo } from '@/api/modules/about';
import { AboutType } from '@/models/InformationConfigType';


export default class AboutStore {
  
  about: AboutType[]  | null = null

  constructor() {
    makeAutoObservable(this)
    if (__STATIC__) {
      this.about = informationConfig.about
    } else {
      this.updateabout()
      this.connectaboutSocket()
    }
  }


  async updateabout() {
    const res = await aboutInfo() as Record<'data', AboutType[]>
    this.about = res.data
  }


  connectaboutSocket() {
    ws.on('user-about', () => {
      toast.success('关于已更新')
      this.updateabout()
    })
  }



}

