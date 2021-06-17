import { TImageCard } from '../../../../controllers/useImagesController'
import React from 'react'
import { MdClose } from 'react-icons/md'

export const ImageCard = ({ image, removeImageHandler }: { image: TImageCard, removeImageHandler: (id: number) => void }) => {
  return (
    <div className="relative">
      <div className="absolute cursor-pointer top-0 right-0" onClick={() => removeImageHandler(image.id)} >
        <MdClose size={'20px'} className="text-red-900 bg-[rgba(0,0,0,0.5)] rounded-3xl" />
      </div>
      <div className="flex flex-grow-1 md:flex-grow-0 lg:flex-grow-0 lg:flex-none ">
      <img alt={'ImageCardPreview'} src={image.url}
           className='flex rounded-xl' />
      </div>
    </div>
  )
}
