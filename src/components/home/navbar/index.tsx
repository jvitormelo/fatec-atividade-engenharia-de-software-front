import React from 'react'

export const Navbar = ({ openCreateAccount }: {openCreateAccount: () => void}) => {
  return (
    <div className='flex bg-light-onSurfacePrimary  p-2 sticky top-0 z-30'>
      <div className='flex flex-1 max-w-[90%]  my-auto  justify-between'>
        <div>
          <img
            alt={'logo'} className='rounded-lg cursor-pointer' width={'50'}
               src={'https://cdn.discordapp.com/attachments/707207845749194785/853470554458947634/unknown.png'} />
        </div>
        <div className='flex  text-xl my-auto  '>
          <div onClick={() => openCreateAccount()} className='mr-8 cursor-pointer text-primary-dark hover:underline'>Criar Conta</div>
          <div className='cursor-pointer text-primary-dark hover:underline'>Logar</div>
        </div>
      </div>
    </div>
  )
}
