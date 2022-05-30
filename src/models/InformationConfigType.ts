import { type } from "os"

export interface InformationConfigType {
  name: string
  introcuce: string
  socail: SocialType
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


