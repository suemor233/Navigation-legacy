import styles from './index.module.scss'
import { Image } from "@nextui-org/react";
import UserStore from '@/store/user';

const ProjectImageCard: React.FC<{ userStore: UserStore }> = ({ userStore }) => {
 return (
   <>    
      {userStore.user?.project &&
          userStore.user?.project.map(item => {
            return (
              <div className={styles.wrapper + ' flex flex-col'} key={item.name}>
                <div className={styles.imgWrapper}>
                  <Image
                    className={styles.imgCard}
                    src={item.img}
                    alt={item.name}
                    width={'100%'}
                    height={'100%'}
                    objectFit={'cover'}
                  />
                  {
                    item.url && <div className={styles.link}>
                    <a className={styles.details} href={item.url} target="_blank">
                      详情
                    </a>
                  </div>
                  } 
                </div>
                <div className='mt-2'>
                  <p className="text-center mt-1 lg:mt-0.5 text-xl font-sans">{item.name}</p>
                </div>
              </div>
            )
          })}
   </> 
 ); 
}; 

export default ProjectImageCard;