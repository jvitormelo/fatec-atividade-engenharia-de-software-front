import React, { useContext, createContext, useState } from 'react'

const User = createContext({})

export function useUserContext () {
  // @ts-ignore
  const { user, setUser } = useContext(User)
  return {
    user,
    setUser
  }
}

export default function UserProvider ({ children }: any) {
  const [user, setUser] = useState({
    idAdmin: false,
    name: ''
  })

  return (
  // @ts-ignore
   <User.Provider value={{ user, setUser }}>
     {children}
   </User.Provider>
  )
}
