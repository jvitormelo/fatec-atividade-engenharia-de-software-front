import { ImageCard } from '../image_card'
import React from 'react'

export const LastImages = () => {
  return (
    <>
      <div className='flex flex-col mb-8'>
        <div className="text-xl">Ultimas imagens</div>
        <div className='flex -my-2 -mx-2 flex-wrap flex-col md:flex-row lg:flex-row' >
          {state.images.map((image) => <div className="px-2 py-2" key={image.id}><ImageCard removeImageHandler={removeImageHandler} image={image}/> </div>)}
        </div>
      </div>
      <div className='flex flex-1 flex-grow '>
        <div className='flex flex-grow items-center justify-center'>
          <div className='flex flex-col'>
            {state.file
              ? <div className='flex-col flex '>
                <div className='flex justify-center'>
                  <button onClick={() => setStateHandler({ file: undefined, blob: '' })}
                          className='mx-auto mb-3 px-3 py-1 bg-error text-white  rounded-lg focus:outline-none'>Remover
                  </button>
                  <button className='mb-3 px-3 py-1 bg-success hover:bg-primary-dark text-black  rounded-lg focus:outline-none' onClick={uploadImageHandler}>Salvar</button>
                </div>

                <img alt={'preview'} className='min-w-[10rem] aspect-w-1 aspect-h-2' src={state.blob} />
              </div>
              : <>
                <div
                  onClick={() => inputRef.current?.click()}
                  className='bg-white p-3 cursor-pointer rounded-lg  border-gray-400 border-4 flex items-center justify-center  min-h-[10rem]'>
                  <div className='max-w-[50%] text-center text-black'>
                    Clique aqui para dar upload
                  </div>

                </div>
                <div className='text-center font-bold'>
                  Ou arraste a imagem
                </div>
              </>}
          </div>

        </div>
      </div>
    </>
  )
}
