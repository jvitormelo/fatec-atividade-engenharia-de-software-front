import React from 'react'
import { useCreateAccountController } from '../../../controllers/useCreateAccountController'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const createProductSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório').min(3, 'Minimo 3 caracteres'),
  email: yup.string().required('Campo obrigatório').email('Precisa ser um email válido')
})

export type CreateAccountInputs ={
  name:string,
    password:string,
    email:string
}
export const CreateAccount = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateAccountInputs>({ resolver: yupResolver(createProductSchema) })
  const { onSubmit } = useCreateAccountController()
  return (
    <div className='flex flex-col '>
      <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col'}>
        <div className='flex flex-col mt-3'><span>Nome</span>
          <input placeholder={'Nome'}
                 {...register('name', { required: true })}
                 className='p-2 focus:outline-none  border-primary-base border-2 rounded-lg text-black border-primary-base' />
          <span>{errors.name?.message}</span>
        </div>

        <div className='flex flex-col mt-3'>
          <span>Email</span>
          <input
            {...register('email', { required: true })}
            placeholder={'Email'}
            className='p-2 focus:outline-none border-primary-base border-2 rounded-lg text-black border-primary-base' />
          {errors.email?.message}
        </div>
        <div className='flex flex-col my-3'>
          <span>Senha</span>
          <input
            placeholder={'Senha'}
            {...register('password', { required: true })}
            className='p-2 focus:outline-none  border-primary-base border-2 rounded-lg text-black border-primary-base' />
          {errors.password?.message}
        </div>
        <button
          type={'submit'}

          className='p-3 block focus:outline-none animate-pulse transform duration-200 bg-primary-base mt-8 rounded-lg text-dark-elevatedSurface text-xl'>Cadastrar
        </button>
      </form>
    </div>
  )
}
