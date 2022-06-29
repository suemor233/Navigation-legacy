import { makeAutoObservable, runInAction } from 'mobx';
import ws from '@/socket';
import { DetailDataType } from '@/models/About';
import { informationConfig } from '../../../config';
import { detailInfo } from '@/api/modules/about';
import { notice } from '@/utils/notice';


export default class DetailStore {

  detail: DetailDataType[]  | null = null

  constructor() {
    makeAutoObservable(this)
    if (__STATIC__) {
      this.detail = informationConfig.about.detail
    } else {
      this.updateabout()
      this.connectaboutSocket()
    }
  }


  async updateabout() {
    const res = await detailInfo() as Record<'data', DetailDataType[]>
    runInAction(()=>{
      this.detail = res.data
    })
  }


  connectaboutSocket() {
    ws.on('about-detail', (res) => {
      notice.toast('关于已更新')
      this.detail = res
    })
  }



}

