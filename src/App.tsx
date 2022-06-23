import React, { useEffect } from 'react'
import Left from '@/layouts/Left'
import Right from './layouts/Right'
import CardContent from './layouts/CardContent'
import { useStore } from './store'
import { useMediaQuery } from 'react-responsive' 
import { observer } from 'mobx-react'
import { ToastContainer } from 'react-toastify'
const App: React.FC = (): JSX.Element => {
  const {userStore} = useStore()
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  
  document.body.addEventListener('touchmove', function (e) {
    e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
  }, {passive: false}); //passive 参数不能省略，用来兼容ios和android
  

  return (
    <>
      <div
        className="h-screen w-full flex justify-center md:justify-start items-center md:items-start 
        bg absolute overflow-hidden md:overflow-auto bg-cover bg-no-repeat bg-center"
        style={!isMobile ?{ backgroundImage: `url(${userStore.user?.backgroundImage})` } : undefined}
      >
        <CardContent>
          <Left />
          <Right />
        </CardContent>
      </div>
      <ToastContainer />
    </>
  )
}

export default observer(App)
