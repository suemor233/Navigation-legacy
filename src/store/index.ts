import * as React from 'react'
import {configure} from 'mobx'
import {userStore} from './user'

configure({enforceActions: 'always'})

export const stores = {userStore}
export const UserContext = React.createContext(stores)

export const useStores = () => React.useContext(UserContext)
