import React, { useEffect } from 'react'

import { useRouter } from 'next/router'
import { useUserContext } from '../../context/authorization'
import UserResource from '../../resources/UserResource'

const Dashboard = () => {
  const { user, setUser } = useUserContext()
  const router = useRouter()
  const verifyAuth = () => {
    if (!localStorage.getItem('token')) router.push('/')
  }

  async function getUser () {
    const { error, data } = await UserResource.find('0')
    if (error) return router.push('/')
    return setUser((oldValue: object) => ({ ...oldValue, ...data }))
  }

  useEffect(() => {
    verifyAuth()
    getUser()
  }, [])

  return (
    <div className="bg-gray-200 flex justify-center flex-1 ">
      <div className="text-4xl">Parabens você esta logado como {user.isAdmin ? 'Administrador' : 'Usuário'}!!</div>
    </div>
  )
}

export default Dashboard
