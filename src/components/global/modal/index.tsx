import React, { ReactNode } from 'react'
import styles from './modal.module.css'
import { useBreakpoints } from '../../../hooks/useBreakpoint'
import { PrimaryButton } from '../buttons/primary_button'

interface IModal {
  open: boolean,
  children: ReactNode,
  styleProps?: {
    width: null,

  }
  closeModal: () => void,
  maxWidth: number | string
}

export const Modal = ({ open = true, children, styleProps, closeModal, maxWidth = 60 }: IModal) => {
  if (!open) return <></>

  const { xs } = useBreakpoints()

  return (
    <div>
      <div style={{ zIndex: 99 }}
           className='fixed left-0 top-0 w-[100%] h-[100%] overflow-auto bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] overflow-hidden  overflow-y-hidden'
      >
        <div className={styles.modal}
             style={{ marginTop: '10vh', maxWidth: maxWidth ? `${maxWidth}%` : '100%', width: `${styleProps?.width || xs ? 80 : 50}%` }}>
          <div>
            <div className='flex flex-grow justify-end '>
              <PrimaryButton maxHeight={32} onClick={() => closeModal()} outlined={true}>Fechar </PrimaryButton>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
