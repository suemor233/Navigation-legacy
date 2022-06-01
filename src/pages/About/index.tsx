import AboutDetail from '@/components/About/Detail'
import AboutSimple from '@/components/About/Simple'
import { useStore } from '@/store'

const About: React.FC = () => {
  const { userStore } = useStore()
  return (
    <>
      <div className="px-10 pt-10 overflow-y-auto animate__animated animate__fadeIn h-full">
        <AboutSimple userStore={userStore}/>
        <AboutDetail userStore={userStore}/>
      </div>
    </>
  )
}

export default About
