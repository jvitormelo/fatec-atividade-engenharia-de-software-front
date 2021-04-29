import React, { createContext, useContext, useState } from 'react';

const SnackbarContext = createContext({});
const SnackbarProvider = ({ children }: any) => {
  const [state, setState] = useState({ active: false, status: '', message: '' });

  return (
    <SnackbarContext.Provider value={{ state, setState }}>{children}</SnackbarContext.Provider>
  );
};
export const useSnackbarContext = () => {
  // @ts-ignore
  const { state, setState } = useContext(SnackbarContext);

  function setSnackbar({ message = '', status = '' }) {
    setState((previousValue: any) => ({
      ...previousValue,
      message,
      status,
      active: true,
    }));
    setTimeout(() => {
      setState((previousValue: any) => ({
        ...previousValue,
        message: '',
        status: '',
        active: false,
      }));
    }, 2000);
  }

  return {
    setSnackbar,
    state,
  };
};

export default SnackbarProvider;
