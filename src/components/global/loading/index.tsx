import React from 'react';

import { useLoadingContext } from '../../../context/user';
import styles from './loading.module.css';

export const Loading = () => {
  const { loading } = useLoadingContext();
  if (!loading.active) return null;

  return (
    <div className="absolute bg-black min-h-screen min-w-full opacity-50 ">
      <span className={styles.loader} />
    </div>
  );
};
