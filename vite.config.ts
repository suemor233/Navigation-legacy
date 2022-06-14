import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'
  // @ts-ignore
import {informationConfig} from './config'
export default ({ mode }) => {
  const isDev = mode === 'development'
  return defineConfig({
    plugins: [
      react(),
    ],
    resolve:{
      alias:{
        '@': join(__dirname, "src"),
      }
    },
    define: {
      __DEV__: isDev,
      __STATIC__: informationConfig.static,
    },
  })
}
