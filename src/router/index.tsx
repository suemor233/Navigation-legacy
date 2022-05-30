import About from '@/pages/About'
import Project from '@/pages/Project'
import Stack from '@/pages/stack'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export const Router: React.FC = () => {
  const location = useLocation()
  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Routes location={location}>
            <Route index element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/stack" element={<Stack />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}
