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
                 className="p-4 bg-[#eee] rounded-lg focus:outline-none focus:bg-[#ddd]" />
          <span>{errors.name?.message}</span>
        </div>

        <div className='flex flex-col mt-3'>
          <span>Email</span>
          <input
            {...register('email', { required: true })}
            placeholder={'Email'}
            className="p-4 bg-[#eee] rounded-lg focus:outline-none focus:bg-[#ddd]" />
          {errors.email?.message}
        </div>
        <div className='flex flex-col my-3'>
          <span>Senha</span>
          <input
            placeholder={'Senha'}
            {...register('password', { required: true })}
            className="p-4 bg-[#eee] rounded-lg focus:outline-none focus:bg-[#ddd]" />
          {errors.password?.message}
        </div>
        <button
          type={'submit'}
          className='bg-primary-base p-4 mt-3 rounded-lg text-secondary-gray focus:outline-none focus:bg-primary-dark'>Cadastrar
        </button>
      </form>
    </div>
  )
}
