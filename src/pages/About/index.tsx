import { aboutInfo } from '@/api/modules/about'
import { AboutType } from '@/models/InformationConfigType'
import ws from '@/socket'
import { useEffect, useState } from 'react'
import { informationConfig } from '../../../config'
import AboutDetail from './detail'
import AboutSimple from './simple'
import {  toast } from 'react-toast'


const About: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutType[]>()
  
  const updateData = async () => {
    const _aboutData = await aboutInfo()
    setAboutData(_aboutData.data)
  }

  useEffect(() => {
    if (__STATIC__) {
      setAboutData(informationConfig.about)
    } else {
      updateData()
    }
  }, [])

  return (
    <>
      <div className="px-10 pt-10 overflow-y-auto animate__animated animate__fadeIn h-full">
        {aboutData && <AboutSimple aboutData={aboutData} />}
        {aboutData && <AboutDetail aboutData={aboutData} />}
      </div>
    </>
  )
}

export default About
