import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

type tabsType = Array<[string, boolean, string]>

const Tab: React.FC = () => {

  const [tabs, setTabs] = useState<tabsType>([
    ['关于', true,'/about'],
    ['项目', false,'/project'],
    ['技术栈', false,'/stack']
  ])
  const navigate = useNavigate()
  const handleSelecated = (tab: any) => {
    navigate(tab[2])
    setTabs(
      tabs.map(item => {
        if (item[0] === tab[0]) {
          return [item[0], true,item[2]]
        }
        return [item[0], false,item[2]]
      })
    )
  }
  return (
    <>
      <div className='flex justify-around w-full text-xl px-12 '>
        {tabs.map(key => {
          return (
            <button
              onClick={() => handleSelecated(key)}
              key={key[0]}
              className={styles.btn + ' ' + (key[1] ? styles.selected : '')}
            >
              {key[0]}
            </button>
          )
        })}
      </div>
      <div className={styles.fg}/>
    </>
  )
}

export default Tab
