import { useStore } from '@/store'
import styles from './index.module.scss'
const Project: React.FC = () => {
  const { userStore } = useStore()
  return (
    <>
      <div className={ styles.project + " transition-all items-center h-full overflow-y-auto"}>
        {userStore.user.project &&
          userStore.user.project.map(item => {
            return (
              <div className={styles.wrapper + ' flex flex-col '}>
                <div className="relative w-full h-full">
                  <img
                    className={styles.imgCard}
                    src={item.img}
                    alt={item.name}
                  />
                  {
                    item.url && <div className={styles.link}>
                    <a className={styles.details} href={item.url} target="_blank">
                      详情
                    </a>
                  </div>
                  } 
                </div>
                <div>
                  <p className="text-center mt-1 lg:mt-0.5 text-xl font-sans">{item.name}</p>
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Project
