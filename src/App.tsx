import React from 'react'
import Left from './components/Left'
import Right from './components/Right'
import CardContent from './layouts/CardContent'
const App: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="h-screen bg-gray-50 flex justify-center items-center">
        <CardContent>
          <Left />
          <Right />
        </CardContent>
      </div>
    </>
  )
}

export default App
