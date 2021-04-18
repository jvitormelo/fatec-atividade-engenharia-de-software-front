import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useLoadingContext, useUserContext } from '../../context/user';
import UserResource from '../../resources/UserResource';

const Dashboard = () => {
  const { setUser } = useUserContext();
  const { setLoading } = useLoadingContext();
  const router = useRouter();

  const verifyAuth = () => {
    if (!localStorage.getItem('token')) router.push('/');
  };

  // const cards = ['Gerenciar', 'Resultados'];

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
    <div className="bg-gray-200 min-h-screen">
      <div className="flex min-h-screen">
        <div className=" flex flex-shrink p-4  ">
          <div className="flex flex-col ">
            <div className="mb-4">Study Wisely</div>
            <div className="grid grid-flow-row gap-3">
              <div className="text-sm font-medium text-gray-900 cursor-pointer ">Home</div>
              <div className="text-sm font-medium text-gray-900 cursor-pointer">Revisar</div>
              <div className="text-sm font-medium text-gray-900 cursor-pointer">
                Adicionar coleção
              </div>
              <div className="text-sm font-medium text-gray-900 cursor-pointer">Estudar</div>
            </div>
          </div>
        </div>
        <div className="flex flex-grow bg-blue-200">
          <div className="flex flex-grow bg-red-200 justify-center items-center ">
            <div className="p-4 bg-white min-w-[10.23rem] min-h-[10.23rem] rounded-lg flex ">
              card
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
