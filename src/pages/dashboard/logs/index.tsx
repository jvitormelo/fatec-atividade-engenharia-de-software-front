import React, { useMemo } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { useLogsController } from '../../../controllers/useLogsController'
import { useDate } from '../../../services/converters'
import { PrimaryButton } from '../../../components/global/buttons/primary_button'
import { LogsHeader } from '../../../components/dashboard/logs/header'

const Logs = () => {
  const {
    state,
    loading,
    setState,
    handlePagination,
    filteredRows,
    paginatedRows,
    pagination
  } = useLogsController()

  const rows = useMemo(() => {
    return paginatedRows.map((log) => (
      <tr key={log.id} className='border-2 border-[#eee] text-center'>
        <td className='border border-white '>{log.id}</td>
        <td className='border border-white'>{log.userId}</td>
        <td className='border border-white'>{log.userType}</td>
        <td className='border border-white'>
          <div className='flex p-1 flex-row justify-between'>
            <span className="w-4/12">
              <div className='font-bold'>OS</div>
              {log.body.os}
            </span>
            <span className='mx-2 w-4/12'><div>browser</div>
              {log.body.browser}</span>
            <span className="w-4/12">
              <span> <div>method</div>
                {log.body.method}</span><span> {log.body.path}</span>
            </span>
          </div>
        </td>
        <td>{useDate(log.createdAt)}</td>
      </tr>
    ))
  }, [paginatedRows])

  if (loading || state.logs.length === 0) return null

  return (
    <div className='flex  flex-1  flex-col'>
      <LogsHeader setState={setState} />
      <table className='min-w-[100%] table-fixed w-full min-h-screen rounded-lg border-collapse'>
        <thead>
        <tr>
          <th className={'w-[48px]'}>Id</th>
          <th>userId</th>
          <th>userType</th>
          <th className='w-6/12'>Body</th>
          <th>createdAt</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
      <div className='flex'>
        <div className='flex  mt-4  flex-grow items-center justify-between'>
          <span>Página {pagination.page} de {Math.round(filteredRows.length / pagination.limit)}</span>
          <div className='flex '>
            <PrimaryButton
              className='mr-4'
              buttonProps={{ disabled: pagination.page === 1 }}
              onClick={() => handlePagination(-1)}>Voltar</PrimaryButton>
            <PrimaryButton buttonProps={{ disabled: filteredRows.length / pagination.limit < pagination.page }}
                           onClick={() => handlePagination(1)}>Proxima</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

Logs.layout = DashboardLayout

export default Logs
