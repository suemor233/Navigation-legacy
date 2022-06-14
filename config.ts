import { InformationConfigType } from './src/models/InformationConfigType'
export const informationConfig: InformationConfigType = {
  static: true, //如果为 true 就为纯静态页面，不会调用服务器端的数据，只需要配置在此配置即可。反之调用服务器端的数据, 必须填写服务器地址，其余配置项无需填写， 默认为 false
  server: 'http://localhost:2347',
  username: 'suemor',
  introduce: '前端萌新',
  avatar: 'https://suemor.oss-cn-beijing.aliyuncs.com/img/avatar.jpeg',
  backgroundImage: 'https://y.suemor.com/imagesva2022-255.png',
  socialIds: {
    middle: [
      {
        key: 'twitter',
        value: 'https://twitter.com/Suemor233',
        icon: 'icon-twitter'
      },
      {
        key: 'qq',
        value: 'https://wpa.qq.com/wpa_jump_page?v=3&uin=1502972236&site=qq&menu=yes',
        icon: 'icon-qq'
      },
      {
        key: 'zhihu',
        value: 'https://www.zhihu.com/people/Suemory',
        icon: 'icon-shejiaotubiao-46'
      },
      {
        key: 'bilibili',
        value: 'https://space.bilibili.com/291833916',
        icon: 'icon-bilibili'
      },
    ],
    bottom: [
      {
        key: 'Github',
        value: 'https://github.com/suemor233',
        icon: 'fa-brands fa-github'
      },
      {
        key: 'Blog',
        value: 'https://suemor.com',
        icon: 'fa-brands fa-blogger-b'
      },
    ],
    
  },
  about: 
    [
      {
        key: '名称',
        value: 'suemor',
        detailFlag:false
      },
      {
        key: '性格',
        value: '内向',
        detailFlag:false
      },
      {
        key: '出生日期',
        value: '2003年11月6日',
        detailFlag:false
      },
      {
        key: '体重',
        value: '160斤',
        detailFlag:false
      },
      {
        key: '坐标',
        value: '江苏常州',
        detailFlag:false
      },
      {
        key: '学历',
        value: '中专',
        detailFlag:false
      },
      {
        key: '我是谁?',
        value: `我叫 suemor，是一个有严重社恐的人，目前正在初学前端，详细介绍可以 <a href="https://www.suemor.com/about" target={'_blank'}>点击这里</a> 里`,
        detailFlag:true
      },
      {
        key: '这个网页是干什么?',
        value: `这是一个简单的引导页，属于作者刚接触 React 写的一个练手级小项目，用来展示我的个人信息`,
        detailFlag:true
      },
      {
        key: '如何获取这个引导页?',
        value: ` 代码开源在 <a target={'_blank'} href="https://github.com/suemor233/Navigation2">Github </a> ，只需要修改 config.ts 就可以自定义配置这个引导页`,
        detailFlag:true
      }
    ],
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