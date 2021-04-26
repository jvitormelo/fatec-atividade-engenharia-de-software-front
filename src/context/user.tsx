import React, { useContext, createContext, useState } from 'react';

const User = createContext({});

export function useUserContext() {
  // @ts-ignore
  const { user, setUser } = useContext(User);

  return {
    user,
    setUser,
  };
}
export function useLoadingContext() {
  // @ts-ignore
  const { loading, setLoading } = useContext(User);
  function openLoading() {
    setLoading((oldValue: any) => ({ ...oldValue, active: true }));
  }
  function closeLoading() {
    setLoading((oldValue: any) => ({ ...oldValue, active: false }));
  }
  return {
    openLoading,
    closeLoading,
    loading,
  };
}

export default function UserProvider({ children }: any) {
  const [user, setUser] = useState({
    idAdmin: false,
    name: '',
  });

  const [loading, setLoading] = useState({ active: false });

  return (
    // @ts-ignore
    <User.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </User.Provider>
  );
}
