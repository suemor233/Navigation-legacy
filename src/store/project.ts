import { makeAutoObservable } from 'mobx';
import { informationConfig } from "../../config";
import ws from '@/socket';
import { projectInfo } from '@/api/modules/project';
import { ProjectDataType } from '@/models/projectType';
import { notice } from '@/utils/notice';
import { SocketKey } from '@/common/socketKey';

export default class ProjectStore {

  project: ProjectDataType[] | null = null

  constructor() {
    makeAutoObservable(this)
    if (__STATIC__) {
      this.project = informationConfig.project
    } else {
      this.updateProject()
      this.connectProjectSocket()
    }
  }


  async updateProject() {
    const res = (await projectInfo()) as Record<'data', ProjectDataType[]>
    if (res) {
      this.project = res.data
    }
  }


  connectProjectSocket() {
    ws.on(SocketKey.USER_PROJECT, () => {
      notice.toast('项目已更新')
      this.updateProject()
    })
  }

}

