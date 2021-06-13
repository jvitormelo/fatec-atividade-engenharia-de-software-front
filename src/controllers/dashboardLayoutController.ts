import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useLoadingContext, useUserContext } from '../context/user'
import UserResource from '../resources/UserResource'

const dashboardLayoutController = () => {
  const { setUser, user } = useUserContext()
  const { openLoading, closeLoading, loading } = useLoadingContext()
  const router = useRouter()

  const routes = [{ name: 'Home', url: '/dashboard/home' }, { name: 'Imagens', url: '/dashboard/images' }]
  const adminRoutes = [
    { name: 'Home', url: '/dashboard/home' },
    { name: 'Gerenciar usuários', url: '/dashboard/manage_users' }
  ]
  const verifyAuth = () => {
    if (!localStorage.getItem('token')) return router.push('/')
    return null
  }

  async function getUser () {
    const { error, data } = await UserResource.find(0)
    if (error) return router.push('/logout')
    return setUser((oldValue: any) => ({ ...oldValue, ...data }))
  }
  async function mountHandler () {
    try {
      openLoading()
      await verifyAuth()
      await getUser()
    } finally {
      closeLoading()
    }
  }

  function decideRoutes (): Array<any> {
    if (loading.active) return []
    return user.isAdmin ? adminRoutes : routes
  }

  useEffect(() => {
    mountHandler()
  }, [])

  return {
    decideRoutes,
    router
  }
}

export default dashboardLayoutController
