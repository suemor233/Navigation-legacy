import { InformationConfigType } from './src/models/InformationConfigType'
export const informationConfig: InformationConfigType = {
  name: 'suemor',
  introcuce: '我是废物',
  avatar:'https://suemor.oss-cn-beijing.aliyuncs.com/img/avatar.jpeg',
  backgroundImage:'https://y.suemor.com/imagesva2022-255.png',
  socail: {
    middle: [
      {
        name: 'twitter',
        url: 'https://twitter.com/Suemor233',
        icon: 'icon-twitter'
      },
      {
        name: 'qq',
        url: 'https://wpa.qq.com/wpa_jump_page?v=3&uin=1502972236&site=qq&menu=yes',
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
  about: {
    simple: [
      {
        Aboutkey: '名称',
        Aboutvalue: 'suemor'
      },
      {
        Aboutkey: '性格',
        Aboutvalue: '内向'
      },
      {
        Aboutkey: '出生日期',
        Aboutvalue: '2003年11月6日'
      },
      {
        Aboutkey: '体重',
        Aboutvalue: '160斤'
      },
      {
        Aboutkey: '坐标',
        Aboutvalue: '江苏常州'
      },
      {
        Aboutkey: '学历',
        Aboutvalue: '中专'
      },
    ],
    details: [
      {
        title: '我是谁?',
        content: `我叫 suemor，是一个有严重社恐的人，目前正在初学前端，详细介绍可以 <a href="https://www.suemor.com/about" target={'_blank'}>点击这里</a> 里`
      },
      {
        title: '这个网页是干什么?',
        content: `这是一个简单的引导页，属于作者刚接触 React 写的一个练手级小项目，用来展示我的个人信息`
      },
      {
        title: '如何获取这个引导页?',
        content: ` 代码开源在 <a target={'_blank'} href="https://github.com/suemor233/Navigation2">Github </a> ，只需要修改 config.ts 就可以自定义配置这个引导页`
      }
    ]

  },
  project: [ // url 可选
    {
      name: '搜索起始页',
      url: 'https://search.suemor.com/',
      img: 'https://y.suemor.com/imagessearchPage.jpg',
    },
    {
      name: '博客后台',
      url: 'https://github.com/suemor233/MyBlog-Admin',
      img: 'https://y.suemor.com/imagesMyBlog-Admin.jpeg'
    },
    {
      name: '博客后端',
      url: 'https://github.com/suemor233/MyBlog-server',
      img: 'https://y.suemor.com/imagesMyblog-Server.jpg'
    },
    {
      name: '个人引导页',
      url: 'https://n.suemor.com/',
      img: 'https://y.suemor.com/imagesnav1.jpg',
    }
  ],
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