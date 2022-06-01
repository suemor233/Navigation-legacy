
export interface InformationConfigType {
  name: string
  introcuce: string
  avatar:string
  socail: SocialType
  about: AboutType
  project: ProjectType[]
  stack: StackType[]

}

interface SocialType {
  middle: MiddleSocialType[]
  bottom: Record<'blog' | 'github', string>[]

}

interface AboutType {
  simple: AboutSimpleType[]
  details: {
    title: string
    content: string
  }[]
}

export interface AboutSimpleType {
  Aboutkey: string
  Aboutvalue: string
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


