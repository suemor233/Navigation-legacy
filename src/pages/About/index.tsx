import { Collapse, Text } from '@nextui-org/react'

import styles from './index.module.scss'
const About: React.FC = () => {
  return (
    <>
      <div className="p-10 overflow-y-auto animate__animated animate__fadeIn">
        <div className="flex flex-col ">
          <div className="flex flex-row justify-around">
            <div className="flex-1">
              <span className="font-bold">名字: </span>
              <span className="ml-1">Suemor</span>
            </div>
            <div className="flex-1">
              <span className="font-bold">性格: </span>
              <span className="ml-1">内向</span>
            </div>
          </div>

          <div className="flex flex-row justify-around mt-3 ">
            <div className="flex-1">
              <span className="font-bold">生日: </span>
              <span className="ml-1">11月6日</span>
            </div>
            <div className="flex-1">
              <span className="font-bold">体重: </span>
              <span className="ml-1">160斤</span>
            </div>
          </div>

          <div className="flex flex-row justify-around mt-3 ">
            <div className="flex-1">
              <span className="font-bold">坐标: </span>
              <span className="ml-1">江苏常州</span>
            </div>
            <div className="flex-1">
              <span className="font-bold">学历: </span>
              <span className="ml-1">中专</span>
            </div>
          </div>
        </div>
        <Collapse.Group css={{'paddingLeft':'0px','marginTop':'3em'}}>
          <Collapse title="我是谁?" expanded>
            <Text>
                我是个萌新
            </Text>
          </Collapse>
          <Collapse title="Option B">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse title="Option C">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Text>
          </Collapse>
        </Collapse.Group>
      </div>
    </>
  )
}

export default About
