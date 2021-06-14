import React, { HTMLAttributes } from 'react'

interface IDefaultInput {
  errors?: string,
  register?: any,
  inputProps?: Partial<HTMLInputElement>,
  className?: string | HTMLAttributes<HTMLDivElement>
}

export const DefaultInput = ({ errors = '', register, inputProps, className }: IDefaultInput) => {
  return (
    <div className={`flex flex-col ${className}`} >
      <input {...register}
             {...inputProps}
             className='p-4 bg-[#eee] rounded-lg focus:outline-none focus:bg-[#ddd]' />
      <span className='text-error'>{errors}</span>
    </div>
  )
}
