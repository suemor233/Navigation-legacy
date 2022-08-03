import { useStore } from '@/store'
import { observer } from 'mobx-react'
import ProjectImageCard from './card'

import styles from './index.module.scss'

const Project: React.FC = () => {
  const { projectStore } = useStore()
  return (
    <>
      <div
        className={
          styles.project + ' transition-all items-center h-full overflow-y-auto animate__animated animate__fadeIn'
        }
      >
        {projectStore.project && <ProjectImageCard project={projectStore.project} />}
      </div>
    </>
  )
}

export default observer(Project)
