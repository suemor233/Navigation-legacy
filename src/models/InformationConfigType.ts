import { type } from "os"

export interface InformationConfigType {
  name: string
  introcuce: string
  socail: SocialType
  project: ProjectType[]
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

interface ProjectType {
  name: string
  url?: string
  img: string
}

export interface StackType {
  name: string
  progressValue: number
}


