import { notice } from '../../utils/notice'
import { makeAutoObservable, runInAction } from 'mobx'
import { informationConfig } from '../../../config'
import ws from '@/socket'

import { BasicDataType } from '@/models/About'
import { basicInfo } from '@/api/modules/about'

export default class BasicStore {
  basic: BasicDataType[] | null = null

  constructor() {
    makeAutoObservable(this)

    if (__STATIC__) {
      this.basic = informationConfig.about.basic
    } else {
      this.updateabout()
      this.connectaboutSocket()
    }
  }

  async updateabout() {
    const res = (await basicInfo()) as Record<'data', BasicDataType[]>
    runInAction(async () => {
      this.basic = res.data
    })
  }

  connectaboutSocket() {
    ws.on('about-basic', res => {
      this.basic = res
    })
  }
}
