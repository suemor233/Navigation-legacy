import { RootStore } from '@/store/root-store'
import { configure } from 'mobx'
import { createContext, ReactNode, useContext } from 'react'

configure({
  useProxies: 'always'
})

export const store = initializeStore()

const StoreContext = createContext<RootStore | undefined>(undefined)
StoreContext.displayName = 'StoreContext'

export function useRootStore() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider')
  }

  return context
}

export function RootStoreProvider({ children }: { children: ReactNode }) {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

function initializeStore(): RootStore {
  return new RootStore()
}
