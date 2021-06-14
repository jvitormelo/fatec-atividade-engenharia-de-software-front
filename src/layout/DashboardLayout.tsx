import React from 'react'

import { ImExit } from 'react-icons/im'

import useDashboardLayoutController from '../controllers/dashboardLayoutController'
import { Main } from '../templates/Main'
import { Meta } from './Meta'

const DashboardLayout = ({ children }: any) => {
  const { routes, router } = useDashboardLayoutController()
  return (
    <Main meta={<Meta title="Dashboard" description="Gerenciar" />}>
      <div className="bg-gray-200 min-h-screen">
        <div className="flex min-h-screen">
          <div className="hidden sm:flex md:flex lg:flex xl:flex flex-shrink p-8 min-w-[15.23rem]  sticky top-0 left-0 justify-center">
            <div className="flex  flex-col ">
              <div className="mb-4 text-2xl">Study Wisely</div>
              <div className="grid grid-flow-row gap-3">
                {routes.map(({ url, name }) => (
                  <div
                    key={name}
                    onClick={() => router.push(url)}
                    className="text-xl border-2 border-[#eee] rounded-lg p-2 text-gray-900 cursor-pointer "
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

          <div className="flex flex-grow bg-blue-200  p-8">{children}</div>
        </div>
      </div>
    </Main>
  )
}

export default DashboardLayout
