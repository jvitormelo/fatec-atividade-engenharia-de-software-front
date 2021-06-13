import { useState } from 'react'

export const useHomeController = () => {
  const [state, setState] = useState({ open: false })
  return {
    state,
    setState
  }
}
