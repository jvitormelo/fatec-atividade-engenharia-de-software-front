import React from 'react'
import { useCreateAccountController } from '../../../controllers/useCreateAccountController'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { PrimaryButton } from '../../global/buttons/primary_button'
import { TextField } from '../../global/input/default_input'

const createAccountSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório').min(3, 'Minimo 3 caracteres'),
  email: yup.string().required('Campo obrigatório').email('Precisa ser um email válido')
})

export type CreateAccountInputs = {
  name: string,
  password: string,
  email: string
}
export const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateAccountInputs>({ resolver: yupResolver(createAccountSchema), mode: 'all' })
  const { onSubmit } = useCreateAccountController()
  return (
    <div className='flex flex-col '>
      <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col'}>

        <TextField label={'Nome'} inputProps={{ placeholder: 'Digite seu nome' }} register={register('name')}
                   errors={errors.name?.message} />

        <TextField
          label={'Email'}
          errors={errors.email?.message}
          inputProps={{ placeholder: 'Digite seu email' }}
          register={register('email')}
          className={'my-4'} />

        <TextField

          errors={errors.password?.message}
          label={'Senha'}
          inputProps={{ placeholder: 'Digite sua senha' }}
          register={register('password')} />

        <PrimaryButton className="mt-8" buttonProps={{ type: 'submit' }}>Cadastrar Conta</PrimaryButton>
      </form>
    </div>
  )
}
