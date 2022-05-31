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
  },
  stack: [ // 技术栈，最好别超过16个，否则会出现进度条
    {
      name: 'HTML5',
      progressValue: 80
    },
    {
      name: 'CSS3',
      progressValue: 50
    },
    {
      name: 'JavaScript',
      progressValue: 70
    },
    {
      name: 'TypeScript',
      progressValue: 30
    },
    {
      name: 'SQL',
      progressValue: 30
    },
  
    {
      name: 'Java',
      progressValue: 50
    },
    {
      name: 'SpringBoot',
      progressValue: 10
    },

    {
      name: 'Android',
      progressValue: 50
    },
    {
      name: 'Vue3',
      progressValue: 70
    },
    {
      name: 'React',
      progressValue: 40
    },
    {
      name: 'NextJS',
      progressValue: 30
    },
    {
      name: 'NuxtJS',
      progressValue: 30
    },
    {
      name: 'Express',
      progressValue: 50
    },
    {
      name: 'NestJs',
      progressValue: 40
    },
    {
      name: 'TailWindCSS',
      progressValue: 70
    },
    {
      name: 'SCSS',
      progressValue: 50,
    },
    

  ]

}