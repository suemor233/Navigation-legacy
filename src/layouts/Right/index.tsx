import Tab from '../../components/Tab'
import './index.css'
import { Router } from '@/router'
import { useEffect } from 'react'
const Right: React.FC = () => {

  return (
    <>
      <div className="flex-1 flex flex-col px-5">
        <div className="flex flex-col mt-6">
          <Tab />
        </div>
        <Router />
      </div>
    </>
  )
}

export default Right
