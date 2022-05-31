import { useStore } from '@/store'
import { Progress, Grid } from '@nextui-org/react'
import { useState } from 'react'
import { Fragment } from 'react'

type NormalColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gradient'

const Stack: React.FC = () => {
  const color: NormalColors[] = ['primary', 'secondary', 'success', 'warning', 'error', 'gradient']
  const randomColor = (): NormalColors => {
    return color[Math.floor(Math.random() * color.length)]
  }
  const { userStore } = useStore()
  return (
    <div className="flex flex-col overflow-y-auto p-2 animate__animated animate__fadeIn">
      <div>
        {userStore.ArrProgress.map((item, index) => {
          return (
            <div className="flex flex-row" key={index}>
              <div className="flex-1 mr-5">
              <p className='mb-0.5'>{item[0].name}</p>

                <Progress shadow value={item[0].progressValue} color={randomColor()} />
              </div>
              {item[1] ? (
                <div className="flex-1 mr-5">
                  <p className='mb-0.5'>{item[1].name}</p>

                  <Progress shadow value={item[1].progressValue} color={randomColor()} />
                </div>
              ):<div className='flex-1'/>
            }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Stack
