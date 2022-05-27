import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <--
import { Avatar } from '@nextui-org/react'
import styles from './index.module.scss'
import Icon from '../Icon'
const Left: React.FC = () => {
  return (
    <>
      <div className="absolute w-72 flex justify-center items-center h-full">
        <div>
          <Avatar
            src="https://cdn.jsdelivr.net/gh/suemor233/static@main/img/89030875.jpeg"
            bordered
            css={{ size: '10em' }}
          />
          <div className="text-center">
            <p className="text-3xl">suemor</p>
            <p className="text-md">废材学生</p>
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
