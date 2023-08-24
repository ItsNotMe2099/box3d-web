import { SnackbarType } from '@/types/enums'
import { SnackbarData } from '@/types/types'
import {createContext, useContext, useState} from 'react'

interface IState {
  isMobile: boolean
  isDesktop: boolean
  isLogged: boolean
  isNotLogged: boolean
  snackbar: SnackbarData | null
  showSnackbar: (text: string, type: SnackbarType) => void
}

const defaultValue: IState = {
  isMobile: false,
  isLogged: false,
  isNotLogged: true,
  isDesktop: true,
  snackbar: null,
  showSnackbar: (text, type) => null,
}

const AppContext = createContext<IState>(defaultValue)

interface Props {
  children: React.ReactNode
  isMobile: boolean
  token?: string
}

export function AppWrapper(props: Props) {
  const [snackbar, setSnackbar] = useState<SnackbarData | null>(null)
  const [token, setToken] = useState<string | null>(props.token ?? null)

  const showSnackbar = (text: string, type: SnackbarType) => {
    setSnackbar({text, type})
    setTimeout(() => {
      setSnackbar(null)
    }, 2000)
  }

  const value: IState = {
    ...defaultValue,
    isLogged: !!token,
    isNotLogged: !token,
    isMobile: props.isMobile,
    isDesktop: !props.isMobile,
    snackbar,
    showSnackbar,
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
