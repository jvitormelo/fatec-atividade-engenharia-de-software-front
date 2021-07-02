import { useUserContext } from '../context/user'
import { useRouter } from 'next/router'

export const useProtectedPage = () => {
  const { push } = useRouter()
  const { user } = useUserContext()
  const routeHandler = () => {
    if (user.isAdmin) return
    return push('/logout')
  }

  return {
    routeHandler
  }
}
