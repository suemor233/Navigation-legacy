import { Avatar, Button } from '@nextui-org/react'
import styles from './index.module.scss'
import Icon from '@/components/Icon'
import { useStore } from '@/store'
import { observer } from 'mobx-react'

const Left: React.FC<{}> = ():JSX.Element => {
  const { userStore } = useStore()
  return (
    <>
      <div className="relative h-full md:h-auto flex md:w-full">
        <div className={styles['card'] + ' p-14 flex justify-center items-center h-full md:w-full'}>
          <div className="mb-4">
            <Avatar src={userStore.user?.avatar} bordered css={{ size: '10em', margin: 'auto' }} />
            <div className="text-center">
              <p className="text-3xl m-0 my-2">{userStore.user?.username}</p>
              <p className="text-md m-0 mb-5 md:mb-1 w-44">{userStore.user?.introduce}</p>
            </div>
            <div className="flex justify-between">
              {userStore.user?.socialIds.middle.map(item => {
                if (!item.value) {
                  return
                }
                return (
                  <a key={item.key} target={'_blank'} href={item.value}>
                    <Icon id={item.icon} />
                  </a>
                )
              })}
            </div>
            <div className={styles['card-button']}>
              {userStore.user?.socialIds.bottom.map(item => {
                if (!item.value) {
                  return
                }
                return (
                  <a target={'_blank'} href={item.value} key={item.key}>
                    <i className={item.icon}></i>
                    <span className="ml-0.5">{item.key}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <div className={styles['fg'] + ' md:hidden'} />
      </div>
    </>
  )
}

export default observer(Left)
