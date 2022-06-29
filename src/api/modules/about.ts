import client from '@/api/umi-request'
import { BasicDataType, DetailDataType } from '@/models/About'
import { PageType } from '../../models/Page';

export function basicInfo() {
  return client.get('/about/basic')
}

export function updateBasic(data: BasicDataType[]) {
  return client.post('/about/basic', { data })
}

export function detailInfo(params?: PageType) {
  return client.get('/about/detail', { params })
}

export function detailInfoById(id: string) {
  return client.get(`/about/detail/${id}`)
}

export function createDetail(data: DetailDataType) {
  return client.post('/about/detail', { data })
}

export function updateDetail(id: string, data: DetailDataType) {
  return client.put(`/about/detail/${id}`, { data })
}

export function deleteDetail(data: string[]) {
  return client.delete('/about/detail', { data })
}
