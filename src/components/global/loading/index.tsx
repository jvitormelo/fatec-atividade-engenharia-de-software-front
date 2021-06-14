import React from 'react'

import styles from './loading.module.css'
import { useLoadingContext } from '../../../context/loadingContext'

export const Loading = () => {
  const { loading } = useLoadingContext()
  if (!loading) return null

  return (
    <div className="absolute bg-black min-h-screen min-w-full opacity-50  " style={{ zIndex: 999 }}>
      <span className={styles.loader} />
    </div>
  )
}
