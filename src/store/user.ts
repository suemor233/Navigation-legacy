import { InformationConfigType, SocialDetailType, SocialType, StackType } from '@/models/InformationConfigType';
import { makeAutoObservable, runInAction } from 'mobx';
import { informationConfig } from "../../config";
import ws from '@/socket';
import { userInfo } from '@/api/modules/user';
import { socialBottomKeyMap, socialKeyMap } from '@/common/social';
import { notice } from '@/utils/notice';
export interface UserStoreType extends Pick<InformationConfigType, 'username' | 'introduce' | 'avatar' | 'socialIds' | 'backgroundImage'> {

}
export interface UserResType extends Pick<InformationConfigType, 'username' | 'introduce' | 'avatar' | 'backgroundImage'> {
  socialIds: SocialDetailType[]
}

export default class UserStore {
  constructor() {
    makeAutoObservable(this)
    if (informationConfig.static) {
      this.user = informationConfig
    } else {
      this.initUser()
      this.connectUserSocket()
    }
  }

  user: UserStoreType | null = null

  async initUser(data?: UserResType) {
    const res = data || await userInfo()
    const _user: UserResType = res
    if (res) {
      runInAction(() => {
        const socialIds: Record<string, SocialDetailType[]> = {
          middle: [],
          bottom: []
        }
        _user.socialIds.map((item, index) => {
          if (socialKeyMap[item.key]) {
            item.icon = socialKeyMap[item.key]
            socialIds.middle.push(item)
          } else {
            item.key = item.key.replace(/^\S/, s => s.toUpperCase())
            item.icon = socialBottomKeyMap[item.key]
            socialIds.bottom.push(item)
          }
        })

        _user.socialIds = socialIds as any
        this.user = _user as any
      })
    }
  }




  connectUserSocket() {
    ws.on('user-update', (res) => {
      notice.toast('基本信息已更新')
      this.initUser(res)
    })
  }
}

