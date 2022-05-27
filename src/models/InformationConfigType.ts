export interface InformationConfigType {
    name:string
    introcuce:string
    socail:SocialType
}

interface SocialType {
    middle:MiddleSocialType[]
    bottom:BottomSocialType
  
}


interface MiddleSocialType {
  name: string
  url:string
  icon:string
}

interface BottomSocialType {
  blog:string
  github:string
}

