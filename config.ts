import {IInformationConfig} from "./src/typings/types";

export const informationConfig:IInformationConfig = {
    serverApi:'https://server.suemor.com/api/v2', //mx-space的后台地址
    username:'', //可不填，默认使用mx-space的名称
    introduce : '',//可不填，默认使用mx-space的介绍
    social : {
        middle:[ //Todo 这边目前只能自定义twitter qq 知乎 B站 的社交信息只可少不可多
            {
                name:'twitter',
                url:'https://twitter.com/Suemor233',
                icon:'icon-twitter'
            },
            {
                name:'qq',
                url:'https://wpa.qq.com/msgrd?v=3&amp;uin=1502972236&amp;site=qq&amp;menu=yes',
                icon:'icon-qq'
            },
            {
                name:'zhihu',
                url:'https://www.zhihu.com/people/Suemory',
                icon:'icon-shejiaotubiao-46'
            },
            {
                name:'bilibili',
                url:'https://space.bilibili.com/291833916',
                icon:'icon-bilibili'
            },
        ],
        bottom:{ //左侧底部的社交信息
            Blog:'https://suemor.com',
            Github:'https://github.com/suemor233'
        }
    }
}

