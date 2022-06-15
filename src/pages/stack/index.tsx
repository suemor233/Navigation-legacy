import { stackInfo } from '@/api/modules/stack'
import { StackType } from '@/models/StackType'
import ws from '@/socket'
import { useStore } from '@/store'
import { useEffect, useState } from 'react'
import { informationConfig } from '../../../config'
import StackProgress from './progress'

const Stack: React.FC = () => {
  const [stack,setStack] = useState<StackType[] | null>(null) 
  const handleStackUpdate = async() =>{
      const res = await stackInfo() as Record<'data', StackType[]>
      setStack(res.data)
  }

  useEffect(()=>{
    if (__STATIC__) {
      setStack(informationConfig.stack)
    } else {
      handleStackUpdate()
      ws.on('user-stack', () => {
        handleStackUpdate()
      })
    }
  },[])
  return (
    <div className="flex flex-col overflow-y-auto p-2 animate__animated animate__fadeIn md:pb-10">
      {
        stack && <StackProgress stack={stack} />
      }
    </div>
  )
}

export default Stack
