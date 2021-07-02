import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { TextField } from '../../../components/global/input/default_input'
import { PrimaryButton } from '../../../components/global/buttons/primary_button'
import { useAdminLoginController } from '../../../controllers/useAdminLoginController'

const adminLoginSchema = Yup.object({
  email: Yup.string().required('Campo obrigatório').email('Email inválido'),
  password: Yup.string().required('Campo obrigatório').min(3, 'Precisa ter no minimo 3 caracteres')
})

const AdminLogin = () => {
  const { handleLogin } = useAdminLoginController()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<{ email: string, password: string }>({ resolver: yupResolver(adminLoginSchema), mode: 'all' })

  return (
    <div className='min-h-screen flex flex-grow-1 items-center justify-center'>
      <div className='p-8 flex  shadow-xl min-w-[30vw] min-h-[400px]'>
        <form className='flex flex-1 flex-col' onSubmit={handleSubmit(handleLogin)}>
          <span className='text-3xl text-center mb-4 '>Japones Systems</span>

          <TextField
            register={register('email')}
            inputProps={{ placeholder: 'Email', inputMode: 'email' }}
            errors={errors.email?.message}
          />

          <TextField
            className='mt-4'
            register={register('password')}
            inputProps={{ placeholder: 'Senha', inputMode: 'password', type: 'password' }}
            errors={errors.password?.message}
          />

          <PrimaryButton
            className="mt-auto"
            buttonProps={{ type: 'submit' }}>
            Login
          </PrimaryButton>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
