import { useCallback } from 'react'
import { CreateAccountInputs } from '../components/home/create_account'
import { useLoadingContext, useUserContext } from '../context/user'
import UserResource from '../resources/UserResource'
import ErrorAPI from '../services/ErrorAPI'
import { useRouter } from 'next/router'
import { useSnackbarContext } from '../context/snackbar'

export const useCreateAccountController = () => {
  const router = useRouter()
  const { openLoading, closeLoading } = useLoadingContext()
  const { setUser } = useUserContext()
  const { setSnackbar } = useSnackbarContext()

  const createUser = useCallback(async (values:CreateAccountInputs) => {
    const { error, data, response } = await UserResource.create(values)
    if (error) throw new ErrorAPI(response)
    return data
  }, [])

  const onSubmit = useCallback(async (values:CreateAccountInputs) => {
    try {
      openLoading()
      const createdUser = await createUser(values)
      setUser((oldValue: any) => ({ ...oldValue, ...createdUser.user }))
      console.log(createdUser)
      localStorage.setItem('token', createdUser.token || '')
      // @ts-ignore
      setSnackbar((values: any) => ({ ...values, message: `Bem-vindo ${values.name}`, status: 'success' }))
      await router.push('/dashboard/home/')
    } catch (e) {
      console.error(e)
    } finally {
      closeLoading()
    }
  }, [])

  return {
    onSubmit

  }
}
