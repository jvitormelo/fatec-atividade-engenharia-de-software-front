import React from 'react';

import { ImExit } from 'react-icons/im';

import useDashboardLayoutController from '../controllers/dashboardLayoutController';

const DashboardLayout = ({ children }: any) => {
  const { decideRoutes, router } = useDashboardLayoutController();
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

export default DashboardLayout;
