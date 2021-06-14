import React, { ReactNode } from 'react'
import styles from './modal.module.css'

interface IModal {
  open: boolean,
  children: ReactNode,
  styleProps?: {
    width: null,

  }
  closeModal: () => void
}

export const Modal = ({ open = true, children, styleProps, closeModal }: IModal) => {
  if (!open) return <></>

  return (
    <div>
      <div style={{ zIndex: 99 }}

           className='fixed left-0 top-0 w-[100%] h-[100%] overflow-auto bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] overflow-hidden'
      >
        <div className={styles.teste}
             style={{ marginTop: '7%', width: `${styleProps?.width || window.screen.width < 600 ? 80 : 50}%` }}>
          <div>
            <div className='flex flex-grow justify-end '>
              <button onClick={() => closeModal()}
                      className='px-3 py-1 focus:outline-none bg-primary-dark text-white rounded-lg'>Fechar
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
