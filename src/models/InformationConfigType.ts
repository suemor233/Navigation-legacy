import { BasicDataType, DetailDataType } from "./About"

export interface InformationConfigType {
  static:boolean
  server:string
  username: string
  introduce: string
  avatar:string
  socialIds: SocialType
  about: AboutType
  backgroundImage:string
  project: ProjectType[]
  stack: StackType[]

}

export interface SocialType {
  middle: SocialDetailType[]
  bottom: SocialDetailType[]
}

export interface AboutType {
  basic: BasicDataType[]
  detail: DetailDataType[]
}



export interface SocialDetailType {
  key: string
  value: string
  icon: string
}

interface ProjectType {
  name: string
  url?: string
  img: string
}

export interface StackType {
  name: string
  progressValue: number
}


