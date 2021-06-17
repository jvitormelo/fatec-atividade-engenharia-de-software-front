import { AiOutlineRight } from 'react-icons/ai'
import React from 'react'

export const LastClasses = () => {
  return (
    <>
      <div className='text-2xl mb-2'>Ultimas matérias</div>
      <div className='lg:grid grid-cols-4 gap-3'>
        {['Programação', 'Matemática', 'teste'].map((item) => (
          <div
            key={item}
            className='p-4 bg-white animate-2s duration-150 cursor-pointer text-black  hover:translate-y- transform hover:translate-y-1  shadow-lg hover:bg-gray-100 min-w-[10.23rem] flex justify-between items-center rounded-lg'
          >
            <div className='font-bold'>{item}</div>
            <div>
              <AiOutlineRight />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
