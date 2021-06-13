import React from 'react'
export const TechCard = ({ img = 'https://cdn.discordapp.com/attachments/707207845749194785/853470554458947634/unknown.png', description = 'Descrição', name = 'Nome' }) => {
  return (
    <div className='flex cursor-pointer hover:translate-y-0.5 transform duration-300  p-2 m-2 w-[17rem] lg:w-[20rem] md:w-[20rem] bg-white  rounded-xl shadow-lg '>
      <div className="flex  items-center">
        <img
        alt={'logo'} className='rounded-lg cursor-pointer aspect-w-1 aspect-h-1 max-w-[3.23rem]'
        src={img} />
      </div>
      <div className="flex ml-2 flex-col">
        <span className="font-bold text  ">{name}</span>
        <span className="overflow-ellipsis">{description}</span>
      </div>

    </div>
  )
}
