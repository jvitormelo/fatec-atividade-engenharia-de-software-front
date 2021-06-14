import { useCallback } from 'react'
import SignInResource from '../resources/SignInResource'
import { useUserContext } from '../context/user'
import { useRouter } from 'next/router'
import { useSnackbarContext } from '../context/snackbar'
import ErrorAPI from '../services/ErrorAPI'
import { useLoadingContext } from '../context/loadingContext'

export const useAdminLoginController = () => {
  const router = useRouter()
  const { setLoading } = useLoadingContext()
  const { setSnackbar } = useSnackbarContext()

  const { setUser } = useUserContext()

  const doLogin = useCallback(async (values) => {
    const { error, data, response } = await SignInResource.login({ ...values, type: 'admin' })
    if (error) throw new ErrorAPI(response)
    return data
  }, [])

  const handleLogin = useCallback(async (values: { email: string, password: string }) => {
    try {
      setLoading(true)
      const user = await doLogin(values)
      localStorage.setItem('token', user.token)
      setUser({ email: values.email, isAdmin: true })
      setSnackbar({ message: 'Logado com sucesso', status: 'success' })
      return router.push('/dashboard/home')
    } catch (e) {
      return setSnackbar({ message: e?.message || 'Problema ao logar', status: 'error' })
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    handleLogin
  }
}
