import { useState } from 'react'
import styles from './index.module.scss'

type tabsType = Array<[string, boolean]>

const Tab: React.FC = () => {
  const [tabs, setTabs] = useState<tabsType>([
    ['关于', true],
    ['项目', false],
    ['技术栈', false]
  ])

  const handleSelecated = (tab: string) => {
    setTabs(
      tabs.map(item => {
        if (item[0] === tab) {
          return [item[0], true]
        }
        return [item[0], false]
      })
    )
  }
  return (
    <>
      <div className='flex justify-around w-full text-xl px-12'>
        {tabs.map(key => {
          return (
            <button
              onClick={() => handleSelecated(key[0])}
              key={key[0]}
              className={styles.btn + ' ' + (key[1] ? styles.selected : '')}
            >
              {key[0]}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default Tab
