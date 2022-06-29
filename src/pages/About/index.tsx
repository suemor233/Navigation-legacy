import { useStore } from '@/store'
import { observer } from 'mobx-react'
import AboutDetail from './detail'
import AboutBasic from './basic'
import { useMediaQuery } from 'react-responsive'
const About: React.FC = () => {
  const { basicStore,detailStore } = useStore()
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })
  return (
    <>
      <div className="pt-5 px-10 md:px-1 animate__animated animate__fadeIn h-full" style={!isMobile ? {'overflow':'overlay'} : undefined}>
        {basicStore.basic && <AboutBasic aboutData={basicStore.basic} />}
        {detailStore.detail && <AboutDetail detail={detailStore.detail} />}
      </div>
    </>
  )
}

export default observer(About)
