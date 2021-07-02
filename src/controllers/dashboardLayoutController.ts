import { useEffect, useMemo, useState } from 'react'

import { useRouter } from 'next/router'

import { useUserContext } from '../context/user'
import PersonResource from '../resources/PersonResource'
import { useLoadingContext } from '../context/loadingContext'

const dashboardLayoutController = () => {
  const { setUser, user } = useUserContext()
  const [firstLoading, setFirstLoading] = useState(true)
  const { setLoading } = useLoadingContext()
  const router = useRouter()

  const verifyAuth = () => {
    if (!localStorage.getItem('token')) return router.push('/')
    return null
  }

  async function getUser () {
    const { error, data } = await PersonResource.find()
    if (error) return router.push('/logout')
    return setUser({ id: data.id, isAdmin: data.type === 'admin', name: data.name, email: data.email })
  }

  async function mountHandler () {
    try {
      if (user.id) return
      setLoading(true)
      verifyAuth()
      await getUser()
    } finally {
      setLoading(false)
      setFirstLoading(false)
    }
  }

  const routes = useMemo(() => {
    if (firstLoading) return []
    if (user.isAdmin) {
      return [
        { name: 'Home', url: '/dashboard/home', icon: '😂' },
        { name: 'Logs', url: '/dashboard/logs', icon: '😅' }
      ]
    }
    return [
      { name: 'Home', url: '/dashboard/home', icon: '😂' },
      {
        name: 'Imagens',
        url: '',
        icon: '😁',
        nested: [
          { name: 'Listar', url: '/dashboard/images', icon: '😍' }, { name: 'Nova', url: '/dashboard/images/new', icon: '🥰' }]
      }]
  }, [user.isAdmin, firstLoading])

  useEffect(() => {
    mountHandler()
  }, [])

  return {
    routes,
    router,

    firstLoading
  }
}

export default dashboardLayoutController
