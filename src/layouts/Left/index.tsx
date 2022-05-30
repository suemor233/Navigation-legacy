import { Avatar } from '@nextui-org/react'
import styles from './index.module.scss'
import Icon from '@/components/Icon'
import { useStore } from '@/store'
import { Fragment } from 'react'
const Left: React.FC = () => {
  const { userStore } = useStore()

  return (
    <>
      <div className="relative h-full flex md:w-full">
        <div className={styles['card'] + ' p-12 flex justify-center items-center h-full md:w-full'}>
          <div className="mb-4">
            <Avatar
              src="https://cdn.jsdelivr.net/gh/suemor233/static@main/img/89030875.jpeg"
              bordered
              css={{ size: '10em', margin: 'auto' }}
            />
            <div className="text-center">
              <p className="text-3xl m-0 my-2">{userStore.user.name}</p>
              <p className="text-md m-0 mb-5 md:mb-1">{userStore.user.introcuce}</p>
            </div>
            <div className="flex justify-between">
              {userStore.user.socail.middle.map(item => {
                return (
                  <a key={item.name} target={'_blank'} href={item.url}>
                    <Icon id={item.icon} />
                  </a>
                )
              })}
            </div>

            <div className={styles['card-button']}>
              {userStore.user.socail.bottom.map((item,index) => {
                return (
                  <Fragment key={index}>
                    <a target={'_blank'} href={item.blog}>
                      <i className="fa-brands fa-blogger-b"></i>
                      <span className="ml-0.5">Blog</span>
                    </a>
                    <a target={'_blank'} href={item.github}>
                      <i className="fa-brands fa-github"></i>
                      <span className="ml-0.5">Github</span>
                    </a>
                  </Fragment>
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

export default Left
