import { useEffect } from 'react'

import { useRouter } from 'next/router'
import { useUserContext } from '../../context/user'

const Logout = () => {
  const { setUser } = useUserContext()
  const router = useRouter()

  useEffect(() => {
    localStorage.removeItem('token')
    setUser()
    router.push('/')
  }, [])
  return null
}

export default Logout
