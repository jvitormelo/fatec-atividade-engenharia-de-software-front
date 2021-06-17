import Link from 'next/link'
import React from 'react'
import { ImExit } from 'react-icons/im'

export const Sidebar = ({ routes = [] }: {routes: any[]}) => {
  return (
    <div className="sticky flex flex-col left-0 top-0 p-8 h-screen justify-between ">
      <div className="text-white text-2xl font-bold mb-8">Study wisely</div>
      <div className='grid grid-flow-row gap-3'>
        {routes.map(({ url, name }) => (
          <Link key={name} href={url}>
            <div
              className='text-xl text-white  hover:bg-background-secondary rounded-lg p-2  cursor-pointer '
            >
              {name}
            </div>
          </Link>
        ))}

      </div>
      <Link href={'/logout'}>
        <div
          className='mt-auto text-xl text-gray-900 cursor-pointer bg-gray-400 p-2 rounded-xl flex justify-between items-center'
        >
          <div>Sair</div>
          <div>
            <ImExit />
          </div>
        </div>
      </Link>
    </div>
  )
}
