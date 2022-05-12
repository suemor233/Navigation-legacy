export interface IInformationConfig {
    username:string,
    introduce:string,
    serverApi:string,
    social:{
        middle:icon[],
        bottom:{ //左侧底部的社交信息
            Blog?:string,
            Github?:string,
        }
    }
}

export interface icon {
    name:string,
    url:string,
    icon:string
}

