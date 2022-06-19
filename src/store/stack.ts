import { makeAutoObservable, runInAction } from 'mobx';
import { informationConfig } from "../../config";
import ws from '@/socket';

import { toast } from 'react-toast';
import { projectInfo } from '@/api/modules/project';
import { ProjectDataType } from '@/models/projectType';
import { StackType } from '@/models/StackType';
import { stackInfo } from '@/api/modules/stack';


export default class StackStore {
  
  stack: StackType[]  | null = null

  constructor() {
    makeAutoObservable(this)
    if (__STATIC__) {
      this.stack = informationConfig.stack
    } else {
      this.updateStack()
      this.connectStackSocket()
    }
  }


  async updateStack() {
    const res = await stackInfo() as Record<'data', StackType[]>
    this.stack = res.data
  }


  connectStackSocket() {
    ws.on('user-stack', () => {
      toast.success('技术栈已更新')
      this.updateStack()
    })
  }



}

