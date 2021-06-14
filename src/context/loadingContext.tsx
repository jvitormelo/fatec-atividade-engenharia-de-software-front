import React, { createContext, Dispatch, ReactNode, useCallback, useContext, useState } from 'react'

interface ILoadingContext {
  state: boolean,
  setState: Dispatch<React.SetStateAction<boolean>>
}

const LoadingContext = createContext<ILoadingContext>({
  state: false,
  setState: () => null
})

const loadingProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<boolean>(false)
  return <LoadingContext.Provider
    value={{ state, setState }}>{children}</LoadingContext.Provider>
}

export const useLoadingContext = () => {
  const { state, setState } = useContext(LoadingContext)

  const setLoading = useCallback((value: boolean) => {
    setState(value)
  }, [])

  return {
    setLoading,
    loading: state
  }
}

export default loadingProvider
