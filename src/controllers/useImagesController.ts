import { useCallback, useEffect, useRef, useState } from 'react'

import ImagesResource from '../resources/ImagesResource'
import { toBase64 } from '../services/fileConvertes'
import { useLoadingContext } from '../context/loadingContext'
import { useSnackbarContext } from '../context/snackbar'

export type TImageCard = {
  id: number,
  title: string,
  description: string,
  url: string
}

interface IImagesController {
  file: undefined | File,
  blob:string,

}

export const useImagesController = () => {
  const { setLoading } = useLoadingContext()
  const { setSnackbar } = useSnackbarContext()
  const [state, setState] = useState<IImagesController>({
    file: undefined,
    blob: ''
  })

  const setStateHandler = useCallback((payload : Partial<IImagesController> = {}) => {
    setState((value) => ({ ...value, ...payload }))
  }, [state])

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

  const uploadImageHandler = useCallback(async () => {
    try {
      setLoading(true)
      if (!state.file) return null
      const base64 = await toBase64(state.file)
      await ImagesResource.create({
        title: 'Teste Mockado',
        description: 'Descrição Mockada',
        base64
      })
      setStateHandler({ file: undefined, blob: '' })
      return setSnackbar({ message: 'Imagem cadastrada com successo!', status: 'success' })
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
    uploadImageHandler

  }
}
