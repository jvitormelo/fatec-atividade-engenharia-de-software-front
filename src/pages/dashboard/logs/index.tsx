import React, { useEffect, useMemo } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { useLogsController } from '../../../controllers/useLogsController'
import { useDate } from '../../../services/converters'
import { PrimaryButton } from '../../../components/global/buttons/primary_button'

const Logs = () => {
  const { state, handlePagination, startAndLimit: { start, offSet }, pagination } = useLogsController()

  useEffect(() => {
    console.log()
    console.log(pagination.page)
  }, [state, pagination])

  const filteredRows = useMemo(() => {
    return state.logs.filter((_log, index) => index >= start && index < offSet)
  }, [start, offSet, state])
  const rows = useMemo(() => {
    return filteredRows.map((log) => (
      <tr key={log.id} className='border-2 border-[#eee]  text-center'>
        <td className='bg-green-500'>{log.id}</td>
        <td>{log.userId}</td>
        <td>{log.userType}</td>
        <td>
          <div className='flex flex-col text-left'>
            <span> OS: {log.body.os}</span>
            <span> browser: {log.body.browser}</span>

            <div>
              <span> method: {log.body.method}</span><span> {log.body.path}</span>
            </div>
            <span> platform: {log.body.platform}</span>
          </div>

        </td>
        <td>{useDate(log.createdAt)}</td>
      </tr>
    ))
  }, [filteredRows])
  return (
    <div className='flex flex-1 flex-col'>
      <table className={' min-w-[100%]'}>
        <thead>
        <tr>
          <th>Id</th>
          <th>userId</th>
          <th>userType</th>
          <th className='w-4/12'>Body</th>
          <th>createdAt</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
      <div className='flex'>
        <div className='flex mt-4 justify-end flex-grow'>
          <PrimaryButton className="mr-4" buttonProps={{ disabled: pagination.page === 1 }} onClick={() => handlePagination(-1)}>Voltar</PrimaryButton>
          <PrimaryButton buttonProps={{ disabled: state.logs.length / pagination.limit < pagination.page }} onClick={() => handlePagination(1)}>Proxima</PrimaryButton>
        </div>
      </div>
    </div>
  )
}

Logs.layout = DashboardLayout
export default Logs
