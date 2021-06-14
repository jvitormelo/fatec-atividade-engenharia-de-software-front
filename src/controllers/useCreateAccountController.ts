import { useCallback } from 'react'
import { CreateAccountInputs } from '../components/home/create_account'
import { useUserContext } from '../context/user'
import UserResource from '../resources/UserResource'
import ErrorAPI from '../services/ErrorAPI'
import { useRouter } from 'next/router'
import { useSnackbarContext } from '../context/snackbar'
import { useLoadingContext } from '../context/loadingContext'

export const useCreateAccountController = () => {
  const router = useRouter()
  const { setLoading } = useLoadingContext()
  const { setUser } = useUserContext()
  const { setSnackbar } = useSnackbarContext()

  const createUser = useCallback(async (values:CreateAccountInputs) => {
    const { error, data, response } = await UserResource.create(values)
    if (error) throw new ErrorAPI(response)
    return data
  }, [])

  const onSubmit = useCallback(async (values:CreateAccountInputs) => {
    try {
      setLoading(true)
      const createdUser = await createUser(values)
      setUser({ name: values.name, email: values.email, isAdmin: false })
      console.log(createdUser)
      localStorage.setItem('token', createdUser.token || '')

      setSnackbar(({ message: `Bem-vindo ${values.name}`, status: 'success' }))
      await router.push('/dashboard/home/')
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    onSubmit

  }
}
