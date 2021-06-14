import React, { createContext, Dispatch, ReactNode, useCallback, useContext, useState } from 'react'

type TUser = {
  isAdmin: boolean,
  id:number,
  name: string,
  email: string
}

interface IUserContext {
  state: TUser,
  setState: Dispatch<React.SetStateAction<TUser>>
}

const User = createContext<IUserContext>({
  state: { id: 0, email: '', isAdmin: false, name: '' },
  setState: () => null
})

export const useUserContext = () => {
  const { state, setState } = useContext(User)

  const setUser = useCallback((user: Partial<TUser>) => {
    setState((values) => ({ ...values, ...user }))
  }, [state])

  return {
    user: state,
    setUser
  }
}

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState({
    id: 0,
    isAdmin: false,
    name: '',
    email: ''
  })

  return <User.Provider value={{ state, setState }}>
    {children}
  </User.Provider>
}

export default UserProvider
