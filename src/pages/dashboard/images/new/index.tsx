import React from 'react'
import DashboardLayout from '../../../../layout/DashboardLayout'
import { useImagesController } from '../../../../controllers/useImagesController'

const Images = () => {
  const { state, handleImageUpload, inputRef, setStateHandler, uploadImageHandler } = useImagesController()

  return (
    <div className='flex flex-col flex-grow'>

      <div className='flex flex-1 flex-grow '>
        <div className='flex flex-grow items-center justify-center'>
          <div className='flex flex-col'>
            {state.file
              ? <div className='flex-col flex '>
                <div className='flex justify-center'>
                  <button onClick={() => setStateHandler({ file: undefined, blob: '' })}
                          className='mx-auto mb-3 px-3 py-1 bg-error text-white  rounded-lg focus:outline-none'>Remover
                  </button>
                  <button
                    className='mb-3 px-3 py-1 bg-success hover:bg-primary-dark text-black  rounded-lg focus:outline-none'
                    onClick={uploadImageHandler}>Salvar
                  </button>
                </div>
                <img alt={'preview'} className='min-w-[10rem] mx-auto max-w-[600px] max-h-[800px] aspect-w-1 aspect-h-2'
                     src={state.blob} />
              </div>
              : <>
                <div
                  onClick={() => inputRef.current?.click()}
                  className='bg-white p-3 cursor-pointer rounded-lg  flex items-center justify-center  min-h-[10rem]'>
                  <div className='max-w-[50%] font-bold rounded-lg text-black text-center'>
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
      <input ref={inputRef} type='file'
             onChange={(event) => handleImageUpload(event.target?.files ? event.target?.files[0] : undefined)}
             className='hidden' accept={'image/jpeg'} />
    </div>
  )
}
Images.layout = DashboardLayout
export default Images
