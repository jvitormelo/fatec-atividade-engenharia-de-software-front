import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { useUserContext } from '../context/user'
import UserResource from '../resources/UserResource'

function ManageUserController () {
  const [state, setState] = useState({
    users: []
  })
  const { user } = useUserContext()
  const router = useRouter()

  function verifyUser () {
    if (!user.isAdmin) return router.push('/dashboard/home/')
    return null
  }

  async function getUsers () {
    const { error, data } = await UserResource.index()
    if (error) throw new Error('fazer a api de error')

    return data
  }

  async function getUsersHandler () {
    try {
      const users = await getUsers()
      setState((oldValue) => ({ ...oldValue, users }))
    } catch (e) {
      console.error(e)
    }
  }

  function mountHandler () {
    verifyUser()
    return getUsersHandler()
  }

  useEffect(() => {
    mountHandler()
  }, [])

  return {
    state
  }
}

export default ManageUserController
