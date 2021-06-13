import React, { useEffect, useRef, useState } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'

const Images = () => {
  const [state, setState] = useState({
    file: undefined as File | undefined | null,
    blob: ''
  })
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    window.addEventListener('dragover', (event) => {
      event.preventDefault()
    })
    window.addEventListener('drop', (event) => {
      event.preventDefault()
      console.log(event.dataTransfer?.files[0])
      setState({ file: event.dataTransfer?.files[0], blob: URL.createObjectURL(event.dataTransfer?.files[0]) })
    })
  }, [])

  return (
    <div className='flex flex-col flex-grow'>
      <div className='flex'>
        Ultimas imagens
      </div>
      <div className='flex flex-1 flex-grow '>
        <div className='flex flex-grow items-center justify-center'>
          <div className='flex flex-col'>
            {state.file
              ? <div className='flex-col flex '>
                <div className='flex justify-center'>
                  <button onClick={() => setState({ file: undefined, blob: '' })}
                          className='mx-auto mb-3 px-3 py-1 bg-error text-white  rounded-lg focus:outline-none'>Remover
                  </button>
                  <button>Salvar</button>
                </div>

                <img alt={'preview'} className='min-w-[10rem] aspect-w-1 aspect-h-2' src={state.blob} />
              </div>
              : <>
                <div
                  onClick={() => inputRef.current?.click()}
                  className='bg-gray-300 p-3 cursor-pointer rounded-lg  border-gray-400 border-4 flex items-center justify-center  min-h-[10rem]'>
                  <div className='max-w-[50%] text-center'>
                    Clique aqui para dar upload
                  </div>

                </div>
                <div className='text-center'>
                  Ou arraste a imagem
                </div>
              </>}
          </div>

        </div>
      </div>
      <input ref={inputRef} type='file' onChange={(event) => setState({
        file: event.target?.files[0] || undefined,
        blob: URL.createObjectURL(event.target?.files[0])
      })} className='hidden' accept={'image/jpeg'} />
    </div>
  )
}
Images.layout = DashboardLayout
export default Images
