import React from 'react'
import Link from 'next/link'

export const Navbar = ({ openCreateAccount }: { openCreateAccount: () => void }) => {
  return (
    <div className='flex  p-2 '>
      <div className='flex px-4 py-2 flex-1 lg:px-16 lg:py-4   my-auto  justify-between'>
        <div>
          <img
            alt={'logo'} className='rounded-full cursor-pointer' width={'50'}
            src={'https://cdn.discordapp.com/attachments/707207845749194785/853470554458947634/unknown.png'} />
        </div>
        <div className='flex  text-text-primary  text-xl my-auto  ml-auto '>
          <div onClick={() => openCreateAccount()}
               className='mr-8 font-medium  cursor-pointer hover:underline'>Criar Conta
          </div>
          <Link href={'/login'}>
            <div className='cursor-pointer font-medium  hover:underline'>Logar</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
