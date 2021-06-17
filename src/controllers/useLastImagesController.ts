import { useCallback, useEffect, useState } from 'react'
import { TImageCard } from './useImagesController'
import ImagesResource from '../resources/ImagesResource'
import { useLoadingContext } from '../context/loadingContext'

export const useLastImagesController = () => {
  const { setLoading } = useLoadingContext()
  const [state, setState] = useState<{images:TImageCard[]}>({
    images: []
  })
  const mountHandler = useCallback(async () => {
    try {
      setLoading(true)
      const { data } = await ImagesResource.index()
      setState({ images: data })
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const removeImageHandler = useCallback(async (id: number) => {
    try {
      setLoading(true)
      await ImagesResource.destroy(id)
      setState({ images: state.images.filter((image) => image.id !== id) })
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [state])

  useEffect(() => {
    mountHandler()
  }, [])
  return {
    state,
    removeImageHandler
  }
}
