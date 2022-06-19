import { makeAutoObservable } from 'mobx';
import { informationConfig } from "../../config";
import ws from '@/socket';
import { toast } from 'react-toast';
import { projectInfo } from '@/api/modules/project';
import { ProjectDataType } from '@/models/projectType';


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
    ws.on('user-project', () => {
      toast.success('项目已更新')
      this.updateProject()
    })
  }

}

