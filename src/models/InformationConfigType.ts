import { type } from "os"

export interface InformationConfigType {
  name: string
  introcuce: string
  socail: SocialType
  stack: StackType[]

}

interface SocialType {
  middle: MiddleSocialType[]
  bottom: Record<'blog' | 'github', string>[]

}


interface MiddleSocialType {
  name: string
  url: string
  icon: string
}

export interface StackType {
  name: string
  progressValue: number
}


