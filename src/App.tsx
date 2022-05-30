import React from 'react'
import Left from '@/layouts/Left'
import Right from './layouts/Right'
import CardContent from './layouts/CardContent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Project from './pages/Project'
import Stack from './pages/stack'

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="h-screen bg-gray-50 flex justify-evenly md:justify-start items-center md:items-start md:p-1">
        <CardContent>
          <Left />
          <Right />
        </CardContent>
      </div>
    </>
  )
}

export default App
