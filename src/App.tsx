import React from 'react'
import Left from '@/layouts/Left'
import Right from './layouts/Right'
import CardContent from './layouts/CardContent'
import { useStore } from './store'
const App: React.FC = (): JSX.Element => {
  const {userStore} = useStore()
  return (
    <>
      <div
        className="h-screen w-full flex justify-center md:justify-start items-center md:items-start md:p-1 
        bg absolute overflow-hidden md:overflow-auto bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${userStore.user.backgroundImage})` }}
      >
        <CardContent>
          <Left />
          <Right />
        </CardContent>
      </div>
    </>
  )
}

export default App
