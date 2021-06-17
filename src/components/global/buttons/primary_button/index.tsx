import React, { HTMLAttributes, ReactNode } from 'react'

import styles from './primary_button.module.css'
interface IPrimaryButton {
  buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  onClick?: () => void,
  children: ReactNode,
  className?: string | HTMLAttributes<HTMLDivElement>,
  outlined?: boolean,
  maxHeight?: number
}

export const PrimaryButton = ({ buttonProps, onClick, children, className, outlined, maxHeight }: IPrimaryButton) => {
  return (
    <div className={`flex  ${className}`} >
      <button
        style={{ maxHeight: maxHeight ? `${maxHeight}px` : '100%' }}

        {...buttonProps}
        onClick={onClick}
        className={outlined ? styles.outlined : styles.primary}

      >
        {children}
      </button>
    </div>

  )
}
