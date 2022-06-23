import { useStore } from '@/store'
import { observer } from 'mobx-react'
import AboutDetail from './detail'
import AboutSimple from './simple'
import { useMediaQuery } from 'react-responsive'
const About: React.FC = () => {
  const { aboutStore } = useStore()
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })
  return (
    <>
      <div className="px-10 pt-10 animate__animated animate__fadeIn h-full" style={!isMobile ? {'overflow':'overlay'} : undefined}>
        {aboutStore.about && <AboutSimple aboutData={aboutStore.about} />}
        {aboutStore.about && <AboutDetail aboutData={aboutStore.about} />}
      </div>
    </>
  )
}

export default observer(About)
