import { projectInfo } from '@/api/modules/project'
import { ProjectDataType } from '@/models/projectType'
import ws from '@/socket'
import { useStore } from '@/store'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { informationConfig } from '../../../config'
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
