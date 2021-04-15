import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useLoadingContext, useUserContext } from '../../context/user';
import UserResource from '../../resources/UserResource';

const Dashboard = () => {
  const { user, setUser } = useUserContext();
  const { setLoading, loading } = useLoadingContext();
  const router = useRouter();
  const verifyAuth = () => {
    if (!localStorage.getItem('token')) router.push('/');
  };

  async function getUser() {
    try {
      setLoading((oldValue: any) => ({ ...oldValue, active: true, message: 'carregando...' }));
      const { error, data } = await UserResource.find('0');
      if (error) return await router.push('/');
      return setUser((oldValue: object) => ({ ...oldValue, ...data }));
    } finally {
      setLoading((oldValue: any) => ({ ...oldValue, active: false }));
    }
  }

  useEffect(() => {
    verifyAuth();
    getUser();
  }, []);

  return (
    <div className="bg-gray-200 flex justify-center flex-1 ">
      {loading.active ? null : (
        <div className="text-4xl">
          Parabens você esta logado como
          {user.isAdmin ? 'Administrador' : 'Usuário'}
          !!
        </div>
      )}
    </div>
  );
};

export default Dashboard;
