import { InformationConfigType } from './src/models/InformationConfigType'
export const informationConfig: InformationConfigType = {
  name: 'suemor',
  introcuce: '我是废物',
  socail: {
    middle: [
      {
        name: 'twitter',
        url: 'https://twitter.com/Suemor233',
        icon: 'icon-twitter'
      },
      {
        name: 'qq',
        url: 'https://wpa.qq.com/msgrd?v=3&amp;uin=1502972236&amp;site=qq&amp;menu=yes',
        icon: 'icon-qq'
      },
      {
        name: 'zhihu',
        url: 'https://www.zhihu.com/people/Suemory',
        icon: 'icon-shejiaotubiao-46'
      },
      {
        name: 'bilibili',
        url: 'https://space.bilibili.com/291833916',
        icon: 'icon-bilibili'
      },
    ],
    bottom: [//左侧底部的社交信息
      {
        blog: 'https://suemor.com',
        github: 'https://github.com/suemor233'
      }
    ]
  }
}