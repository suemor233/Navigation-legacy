import { projectInfo } from '@/api/modules/project'
import { ProjectDataType } from '@/models/projectType'
import ws from '@/socket'
import { useStore } from '@/store'
import { useEffect, useState } from 'react'
import { informationConfig } from '../../../config'
import ProjectImageCard from './card'

import styles from './index.module.scss'

const Project: React.FC = () => {
  const [project, setProject] = useState<ProjectDataType[] | null>(null)

  const updatProjecteData = async () => {
    const res = (await projectInfo()) as Record<'data', ProjectDataType[]>
    if (res) {
      setProject(res.data)
    }
  }
  useEffect(() => {
    if (__STATIC__) {
      setProject(informationConfig.project)
    } else {
      updatProjecteData()
      ws.on('user-project', () => {
        updatProjecteData()
      })
    }
  }, [])
  return (
    <>
      <div
        className={
          styles.project + ' transition-all items-center h-full overflow-y-auto animate__animated animate__fadeIn'
        }
      >
        {project && <ProjectImageCard project={project} />}
      </div>
    </>
  )
}

export default Project
