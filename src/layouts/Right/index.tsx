import About from '@/pages/About'
import Project from '@/pages/Project'
import Stack from '@/pages/stack'
import { BrowserRouter, Link, Outlet, Route, Router, Routes } from 'react-router-dom'
import Tab from '../../components/Tab'

const Right: React.FC = () => {
  return (
    <>
      <div className="flex-1 flex flex-col">
        <BrowserRouter>
          <div className="flex flex-col mt-10">
            <Tab />
          </div>
          <Routes>
            <Route index element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/stack" element={<Stack />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default Right
