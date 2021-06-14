import React, { HTMLAttributes, ReactNode } from 'react'

interface IPrimaryButton {
  buttonProps: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  onClick?: () => void,
  children: ReactNode,
  className?: string | HTMLAttributes<HTMLDivElement>
}

export const PrimaryButton = ({ buttonProps, onClick, children, className }: IPrimaryButton) => {
  return (
    <div className={`flex ${className}` }>
      <button
        {...buttonProps}
        onClick={onClick}
        className='bg-primary-base flex flex-grow justify-center hover:bg-primary-light  p-4 rounded-lg focus:outline-none '
      >
        {children}
      </button>
    </div>

  )
}
