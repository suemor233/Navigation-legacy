import About from '@/pages/About'
import Project from '@/pages/Project'
import Stack from '@/pages/stack'
import { Loading } from '@nextui-org/react'
import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export const Router: React.FC = () => {
  const location = useLocation()
  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <Routes location={location}>
          <Route index element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </React.Suspense>
    </>
  )
}
