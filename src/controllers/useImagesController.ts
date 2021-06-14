import { useCallback, useEffect, useRef, useState } from 'react'

import ImagesResource from '../resources/ImagesResource'
import { toBase64 } from '../services/fileConvertes'
import { useLoadingContext } from '../context/loadingContext'

export type TImageCard = {
  id: number,
  title: string,
  description: string,
  url: string
}

interface IImagesController {
  file: undefined | File,
  blob:string,
  images: TImageCard[]
}

export const useImagesController = () => {
  const [state, setState] = useState<IImagesController>({
    file: undefined,
    blob: '',
    images: []
  })

  const setStateHandler = useCallback((payload : Partial<IImagesController> = {}) => {
    setState((value) => ({ ...value, ...payload }))
  }, [state])
  const { setLoading } = useLoadingContext()

  const mountHandler = useCallback(async () => {
    try {
      setLoading(true)
      const { data } = await ImagesResource.index()
      setStateHandler({ images: data })
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])
  useEffect(() => {
    mountHandler()
  }, [])

  const handleImageUpload = useCallback((file: File | undefined) => {
    if (!file) return null
    return setStateHandler({ file, blob: URL.createObjectURL(file) })
  }, [])

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    window.addEventListener('dragover', (event) => {
      event.preventDefault()
    })
    window.addEventListener('drop', (event) => {
      event.preventDefault()
      handleImageUpload(event.dataTransfer?.files[0])
    })
    return () => {
      window.removeEventListener('drop', () => null)
      window.removeEventListener('dragover', () => null)
    }
  }, [])

  const removeImageHandler = useCallback(async (id: number) => {
    try {
      setLoading(true)
      await ImagesResource.destroy(id)
      setStateHandler({ images: state.images.filter((image) => image.id !== id) })
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [state])

  const uploadImageHandler = useCallback(async () => {
    try {
      setLoading(true)
      if (!state.file) return null
      const base64 = await toBase64(state.file)

      const { data } = await ImagesResource.create({
        title: 'Teste Mockado',
        description: 'Descrição Mockada',
        base64
      })
      return setStateHandler({ images: [...state.images, data], file: undefined, blob: '' })
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [state])

  return {
    inputRef,
    state,
    handleImageUpload,
    setStateHandler,
    uploadImageHandler,
    removeImageHandler

  }
}
