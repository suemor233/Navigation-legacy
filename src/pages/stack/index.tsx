import { stackInfo } from '@/api/modules/stack'
import { StackType } from '@/models/StackType'
import ws from '@/socket'
import { useStore } from '@/store'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toast'
import { informationConfig } from '../../../config'
import StackProgress from './progress'

const Stack: React.FC = () => {
  const {stackStore} = useStore()
  return (
    <div className="flex flex-col overflow-y-auto p-2 animate__animated animate__fadeIn md:pb-10">
      {
        stackStore.stack && <StackProgress stack={stackStore.stack} />
      }
    </div>
  )
}

export default observer(Stack)
