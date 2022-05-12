import { acceptHMRUpdate, defineStore } from 'pinia'
import { reactive } from 'vue'
import { GetUser } from '@/api/modules/user'
import { IUSer, IUserRequest } from '@/typings/user'
import { informationConfig } from '../../config'

export const useUser = defineStore('user', () => {
  const user: IUSer = reactive({
    username: '',
    introduce: '',
    avatar: '',
    social: {
      middle:[//Todo 这边目前只能自定义twitter qq 知乎 B站 的社交信息只可少不可多
      ],
      bottom: {
        //左侧底部的社交信息
        Blog: '',
        Github: '',
      },
    },
  })

  ;(async () => {
    Object.assign(user.social, informationConfig.social)
    const res: IUserRequest = await GetUser()
    Object.assign(user, res)
    informationConfig.username
      ? (user.username = informationConfig.username)
      : ''
    informationConfig.introduce
      ? (user.introduce = informationConfig.introduce)
      : ''
  })()
  return {
    user,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
