import ProjectImageCard from '@/components/Project/ImageCard'
import { useStore } from '@/store'
import styles from './index.module.scss'
const Project: React.FC = () => {
  const { userStore } = useStore()
  return (
    <>
      <div className={ styles.project + " transition-all items-center h-full overflow-y-auto animate__animated animate__fadeIn"}>
        <ProjectImageCard userStore={userStore}/>
      </div>
    </>
  )
}

export default Project
