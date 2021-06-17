import { useEffect, useMemo } from 'react'

import { useRouter } from 'next/router'

import { useUserContext } from '../context/user'
import PersonResource from '../resources/PersonResource'
import { useLoadingContext } from '../context/loadingContext'

const dashboardLayoutController = () => {
  const { setUser, user } = useUserContext()
  const { setLoading, loading } = useLoadingContext()
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
    }
  }

  const routes = useMemo(() => {
    if (loading) return []
    if (user.isAdmin) {
      return [
        { name: 'Home', url: '/dashboard/home' },
        { name: 'Logs', url: '/dashboard/logs' }
      ]
    }
    return [{ name: 'Home', url: '/dashboard/home' }, { name: 'Imagens', url: '/dashboard/images' }]
  }, [user.isAdmin, loading])

  useEffect(() => {
    mountHandler()
  }, [])

  return {
    routes,
    router
  }
}

export default dashboardLayoutController
