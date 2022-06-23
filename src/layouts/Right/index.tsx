import Tab from '../../components/Tab'
import { Router } from '@/router'
const Right: React.FC = () => {

  return (
    <>
      <div className="flex-1 flex flex-col px-5 h-full">
        <div className="flex flex-col mt-6">
          <Tab />
        </div>
        <Router />
      </div>
    </>
  )
}

export default Right
