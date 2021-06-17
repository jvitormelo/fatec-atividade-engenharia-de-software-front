import React from 'react'

import useDashboardLayoutController from '../controllers/dashboardLayoutController'
import { Main } from '../templates/Main'
import { Meta } from './Meta'
import { Sidebar } from '../components/dashboard/sidebar'

const DashboardLayout = ({ children }: any) => {
  const { routes } = useDashboardLayoutController()
  return (
    <Main meta={<Meta title='Dashboard' description='Gerenciar' />}>
      <div className='min-h-screen flex bg-background-primary'>
        <div className='w-2/12'><Sidebar routes={routes} /></div>
        <div className='flex flex-grow p-8 '>
          <div className="bg-background-secondary flex flex-1 rounded-lg p-8 text-white">{children}</div>
        </div>

      </div>
    </Main>
  )
}

export default DashboardLayout
