import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { RootStoreProvider } from './context/root-store'
import './styles/index.css'
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <RootStoreProvider>
          <App />
        </RootStoreProvider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
)
