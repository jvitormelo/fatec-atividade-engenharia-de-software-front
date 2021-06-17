import React from 'react'

import DashboardLayout from '../../../layout/DashboardLayout'
import { useUserContext } from '../../../context/user'

const DashboardHome = () => {
  const { user } = useUserContext()
  return (
    <div className="flex flex-1 flex-col">
      <div>
        <div className="text-xl">
          Bem vindo <span className="text-primary-dark text-3xl">{user.name}</span>, ID: {user.id}, email: {user.email}!
        </div>
        <div>
          Você <span className="text-xl font-bold text-primary-dark">{user.isAdmin ? 'é' : 'não é'}</span>   administrador
        </div>
      </div>
    </div>
  )
}

DashboardHome.layout = DashboardLayout
export default DashboardHome
