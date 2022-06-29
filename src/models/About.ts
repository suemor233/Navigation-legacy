export interface BasicDataType {
  id?: string
  key: string
  value: string
  created?: string
}


export interface DetailDataType {
  id?: string
  title: string
  content: string
  created?: string
  modified?: string
}


export interface DetailReturnDataType {
  aboutDetail: DetailDataType[]
  pagination: {
    pageCount: number
    page: number
    pageSize: number
    itemCount: number
  }
}