import { useStore } from '@/store'
import { Collapse, Text } from '@nextui-org/react'
import { Fragment } from 'react'

import styles from './index.module.scss'
const About: React.FC = () => {
  const { userStore } = useStore()
  return (
    <>
      <div className="px-10 pt-2 overflow-y-auto animate__animated animate__fadeIn">
        <div className="flex flex-col justify-around  md:text-sm">
          {userStore.ArrAboutSimple.map((item, index) => {
            return (
              <div className="flex flex-row justify-around mt-5" key={index}>
                <div className="flex-1">
                  <span className="font-bold">{item[0].Aboutkey}: </span>
                  <span className="ml-1">{item[0].Aboutvalue}</span>
                </div>
                <div className="flex-1 ml-10">
                  <span className="font-bold">{item[1].Aboutkey}: </span>
                  <span className="ml-1">{item[1].Aboutvalue}</span>
                </div>
              </div>
            )
          })}
        </div>
        <Collapse.Group css={{ paddingLeft: '0px', marginTop: '3em' }} >
          {userStore.user.about.details.map((item, index) => {
            return (
              <Fragment key={index}>
                {index === 0 ? (
                  <Collapse title={item.title} expanded>
                    <Text dangerouslySetInnerHTML={{ __html: item.content }}></Text>
                  </Collapse>
                ) : (
                  <Collapse title={item.title}>
                    <Text dangerouslySetInnerHTML={{ __html: item.content }}></Text>
                  </Collapse>
                )}
              </Fragment>
            )
          })}
        </Collapse.Group>
      </div>
    </>
  )
}

export default About
