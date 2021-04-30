import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import { ImExit } from 'react-icons/im';

import { useLoadingContext, useUserContext } from '../../context/user';
import UserResource from '../../resources/UserResource';

const Dashboard = ({ children }: any) => {
  const { setUser, user } = useUserContext();
  const { openLoading, closeLoading, loading } = useLoadingContext();
  const router = useRouter();
  const routes = [{ name: 'Home', url: '/dashboard/home' }];
  const adminRoutes = [
    { name: 'Home', url: '/dashboard/home' },
    { name: 'Gerenciar usuários', url: '/dashboard/manage_users' },
  ];
  const verifyAuth = () => {
    if (!localStorage.getItem('token')) return router.push('/');
    return null;
  };

  async function getUser() {
    const { error, data } = await UserResource.find('0');
    if (error) return router.push('/logout');
    return setUser((oldValue: object) => ({ ...oldValue, ...data }));
  }
  async function mountHandler() {
    try {
      openLoading();
      await verifyAuth();
      await getUser();
    } finally {
      closeLoading();
    }
  }

  useEffect(() => {
    mountHandler();
  }, []);

  function decideRoutes(): Array<any> {
    if (loading.active) return [];
    return user.isAdmin ? adminRoutes : routes;
  }

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex min-h-screen">
        <div className="hidden sm:flex md:flex lg:flex xl:flex flex-shrink p-8 min-w-[15.23rem]  justify-center">
          <div className="flex flex-col">
            <div className="mb-4 text-2xl">Study Wisely</div>
            <div className="grid grid-flow-row gap-3">
              {decideRoutes().map(({ url, name }) => (
                <div
                  key={name}
                  onClick={() => router.push(url)}
                  className="text-xl text-gray-900 cursor-pointer "
                >
                  {name}
                </div>
              ))}
            </div>
            <div
              onClick={() => router.push('/logout')}
              className="mt-auto text-xl text-gray-900 cursor-pointer bg-gray-400 p-2 rounded-xl flex justify-between items-center"
            >
              <div>Sair</div>
              <div>
                <ImExit />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden lg:hidden md:hidden xl:hidden">Teste mobile </div>
        <div className="flex flex-grow bg-blue-200  p-8">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
