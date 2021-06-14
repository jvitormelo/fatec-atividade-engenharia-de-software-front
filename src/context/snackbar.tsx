import React, { createContext, Dispatch, ReactNode, useCallback, useContext, useState } from 'react'

type TSnackbar = {
  active: boolean, status: 'success' | 'error', message: string
}

interface ISnackbar {
  state: TSnackbar,
  setState: Dispatch<React.SetStateAction<TSnackbar>>
}

const SnackbarContext = createContext<ISnackbar>({
  state: { active: false, status: 'success', message: '' },
  setState: () => null
})
const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<TSnackbar>({ active: false, status: 'success', message: '' })

  return (
    <SnackbarContext.Provider value={{ state, setState }}>{children}</SnackbarContext.Provider>
  )
}
export const useSnackbarContext = () => {
  const { state, setState } = useContext(SnackbarContext)
  const setSnackbar = useCallback(({ message = '', status = 'success' as 'success' | 'error' }) => {
    setState((previousValue) => ({
      ...previousValue,
      message,
      status,
      active: true
    }))
    setTimeout(() => {
      setState((previousValue) => ({
        ...previousValue,
        message: '',
        active: false
      }))
    }, 1500)
  }, [state])

  return {
    setSnackbar,
    state
  }
}

export default SnackbarProvider
