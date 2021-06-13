import React, { ReactNode } from 'react'

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
    <div className="fixed z-1   left-0 top-0 w-[100%] h-[100%] overflow-auto bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] overflow-hidden" >
    <div className={'bg-[#fefefe] p-[20px] rounded-lg  mx-auto '} style={{ marginTop: '7%', width: `${styleProps?.width || 50}%` }} >
      <div className='flex flex-grow justify-end'>
        <button onClick={() => closeModal()} className="p-1 focus:outline-none bg-dark-surface rounded-lg">Fechar</button>
      </div>
      {children}
    </div>
    </div>
  )
}
