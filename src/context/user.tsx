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
  return {
    loading,
    setLoading,
  };
}

export default function UserProvider({ children }: any) {
  const [user, setUser] = useState({
    idAdmin: false,
    name: '',
  });

  const [loading, setLoading] = useState({ active: false, message: '' });

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
