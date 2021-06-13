// eslint-disable-next-line react/prop-types
import React from 'react'

import { useSnackbarContext } from '../../../context/snackbar'

const Snackbar = () => {
  const {
    state: { status, message, active }
  } = useSnackbarContext()
  if (!active) return null
  return (
    <div
      style={{ zIndex: 99 }}
      className={`absolute  left-2/4 transform -translate-x-2/4  bottom-4 min-w-[20.23rem] ${
        status === 'success' ? 'bg-success' : 'bg-error'
      } rounded-lg  `}
    >
      <div className="text-white p-8 text-blue-900 text-xl ">{message}</div>
    </div>
  )
}
export default Snackbar
