import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { RootStoreProvider } from './context/root-store'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <NextUIProvider>
        <RootStoreProvider>
          <App />
        </RootStoreProvider>
      </NextUIProvider>
  </React.StrictMode>
)
