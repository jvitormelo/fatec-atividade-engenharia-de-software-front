import React, { HTMLAttributes } from 'react'

interface IDefaultInput {
  errors?: string,
  register?: any,
  inputProps?: Partial<HTMLInputElement>,
  className?: string | HTMLAttributes<HTMLDivElement>
  label?: string,
  onChange?: (e:React.ChangeEvent<HTMLInputElement>) => any
}

export const DefaultInput = ({ errors = '', register, inputProps, className, label, onChange }: IDefaultInput) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div>{label}</div>
      <input {...register}
             {...inputProps}
             onChange={onChange}
             className='p-4 bg-[#eee] rounded-lg focus:outline-none focus:bg-[#ddd]' />
      <span className='text-error'>{errors}</span>
    </div>
  )
}
