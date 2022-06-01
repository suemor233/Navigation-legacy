import UserStore from '@/store/user'
import { Progress } from '@nextui-org/react'

type NormalColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gradient'

const StackProgrss: React.FC<{ userStore: UserStore }> = ({ userStore }) => {
  const color: NormalColors[] = ['primary', 'secondary', 'success', 'warning', 'error', 'gradient']
  const randomColor = (): NormalColors => {
    return color[Math.floor(Math.random() * color.length)]
  }
  return (
    <>
      <div>
        {userStore.ArrProgress.map((item, index) => {
          return (
            <div className="flex flex-row" key={index}>
              <div className="flex-1 mr-5">
                <p className="mb-0.5">{item[0].name}</p>

                <Progress shadow value={item[0].progressValue} color={randomColor()} />
              </div>
              {item[1] ? (
                <div className="flex-1 mr-5">
                  <p className="mb-0.5">{item[1].name}</p>

                  <Progress shadow value={item[1].progressValue} color={randomColor()} />
                </div>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default StackProgrss
