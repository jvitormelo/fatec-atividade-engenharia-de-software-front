import React, { useCallback, useMemo } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { TLogs, useLogsController } from '../../../controllers/useLogsController'
import { useDate } from '../../../services/converters'
import { PrimaryButton } from '../../../components/global/buttons/primary_button'
import { LogsHeader } from '../../../components/dashboard/logs/header'

const Logs = () => {
  const { state, loading, setState, handlePagination, startAndLimit: { start, offSet }, pagination } = useLogsController()
  const isInSearch = useCallback(({ userType, userId }: TLogs) => {
    return String(userId).includes(state.search) || userType.includes(state.search)
  }, [state])

  const filteredRows = useMemo(() => {
    let logs = [...state.logs]
    console.log(state.authentication)
    if (state.search) logs = state.logs.filter((log, index) => index >= start && index < offSet && isInSearch(log))
    if (state.authentication) return logs.filter((log) => state.authentication === 1 ? log.userId > 0 : log.userId === 0)
    return logs
  }, [state])

  const paginatedRows = useMemo(() => {
    return filteredRows.filter((_log, index) => index >= start && index < offSet)
  }, [start, offSet, state, filteredRows])

  const rows = useMemo(() => {
    return paginatedRows.map((log) => (
      <tr key={log.id} className='border-2 border-[#eee] text-center'>
        <td className="border border-white ">{log.id}</td>
        <td className="border border-white">{log.userId}</td>
        <td className="border border-white">{log.userType}</td>
        <td className="border border-white">
          <div className='flex flex-col '>
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
  }, [paginatedRows])

  if (loading || state.logs.length === 0) return null

  return (
    <div className='flex flex-1 flex-col'>
    <LogsHeader setState={setState}/>
      <table className='min-w-[100%] table-fixed rounded-lg border-collapse'>
        <thead>
        <tr>
          <th className={'w-[48px]'} >Id</th>
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

        <div className='flex  mt-4  flex-grow items-center justify-between'>

          <span>Página {pagination.page} de {Math.round(paginatedRows.length / pagination.limit)}</span>
          <div className='flex '>
            <PrimaryButton
              className='mr-4'
              buttonProps={{ disabled: pagination.page === 1 }}
              onClick={() => handlePagination(-1)}>Voltar</PrimaryButton>
            <PrimaryButton buttonProps={{ disabled: paginatedRows.length / pagination.limit < pagination.page }}
                           onClick={() => handlePagination(1)}>Proxima</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

Logs.layout = DashboardLayout

export default Logs
