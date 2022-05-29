import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar } from '@nextui-org/react'
import styles from './index.module.scss'
import Icon from '../Icon'
import { useStore } from '@/store'
const Left: React.FC = () => {
  const {userStore} = useStore()

  return (
    <>
      <div className="absolute w-72 p-12 flex justify-center items-center h-full">
        <div className='mb-4'>
          <Avatar
            src="https://cdn.jsdelivr.net/gh/suemor233/static@main/img/89030875.jpeg"
            bordered
            css={{ size: '10em' ,margin: 'auto'}}
          />
          <div className="text-center">
            <p className="text-3xl m-0 my-2">{userStore.user.name}</p>
            <p className="text-md m-0 mb-5">{userStore.user.introcuce}</p>
          </div>
          <div className='flex justify-between'>
            <a target={'view-windows'}>
              <Icon id={'icon-bilibili'} />
            </a>
            <a target={'view-windows'}>
              <Icon id={'icon-bilibili'} />
            </a>
            <a target={'view-windows'}>
              <Icon id={'icon-bilibili'} />
            </a>
            <a target={'view-windows'}>
              <Icon id={'icon-bilibili'} />
            </a>
          </div>

          <div className={styles['card-button']}>
            <a target={'view-windows'} href="https://suemor.com">
              <i className="fa-brands fa-blogger-b"></i>
              <span className="ml-0.5">Blog</span>
            </a>
            <a target={'view-windows'} href="https://github.com/suemor233">
              <i className="fa-brands fa-github"></i>
              <span className="ml-0.5">Github</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Left
