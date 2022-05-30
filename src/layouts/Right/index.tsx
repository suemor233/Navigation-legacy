import Tab from '../../components/Tab'
import './test.css'
import { Router } from '@/router'
const Right: React.FC = () => {
  return (
    <>
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col mt-10">
          <Tab />
        </div>
        <Router />
      </div>
    </>
  )
}

export default Right
