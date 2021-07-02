import { useEffect, useState } from 'react'

export const useBreakpoints = () => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.screen.width)
    })
    return () => {
      window.removeEventListener('resize', () => null)
    }
  })
  return {
    xs: width < 600
  }
}
