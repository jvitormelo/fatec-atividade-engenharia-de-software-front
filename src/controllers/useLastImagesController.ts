import { useCallback, useEffect, useState } from 'react'
import ImagesResource from '../resources/ImagesResource'
import { TImageCard } from './useImagesController'
import { useLoadingContext } from '../context/loadingContext'

export const useLastImagesController = () => {
  const mountHandler = useCallback(async () => {
    const [state, setState] = useState<{images:TImageCard[]}>({
      images: []
    })
    const { setLoading } = useLoadingContext()
    try {
      setLoading(true)
      const { data } = await ImagesResource.index()
      setStateHandler({ images: data })
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }

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
  }, [])
  useEffect(() => {
    mountHandler()
  }, [])

  return {}
}
