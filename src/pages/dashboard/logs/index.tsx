import React, { useCallback, useMemo } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { TLogs, useLogsController } from '../../../controllers/useLogsController'
import { useDate } from '../../../services/converters'
import { PrimaryButton } from '../../../components/global/buttons/primary_button'
import { TextField } from '../../../components/global/input/default_input'

const Logs = () => {
  const { state, loading, setState, handlePagination, startAndLimit: { start, offSet }, pagination } = useLogsController()
  const isInSearch = useCallback(({ userType, userId }: TLogs) => {
    return String(userId).includes(state.search) || userType.includes(state.search)
  }, [state])

  const filteredRows = useMemo(() => {
    let logs = [...state.logs]
    if (state.search) logs = state.logs.filter((log, index) => index >= start && index < offSet && isInSearch(log))
    if (state.authentication) return logs.filter((log) => state.authentication === 1 ? log.userId > 0 : log.userId < 0)
    return logs
  }, [state])

  const paginatedRows = useMemo(() => {
    return filteredRows.filter((_log, index) => index >= start && index < offSet)
  }, [start, offSet, state, filteredRows])

  const rows = useMemo(() => {
    return paginatedRows.map((log) => (
      <tr key={log.id} className='border-2 border-[#eee] text-center'>
        <td className="border border-white">{log.id}</td>
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

  if (loading) return <></>

  return (
    <div className='flex flex-1 flex-col'>
      <div className='flex mb-4 justify-end items-center  '>
        <div className='mt-auto'>
          Autenticação
          <div className='relative mr-4'>
            <select
              onChange={(e) => setState((value) => ({ ...value, authentication: Number(e.target.value) }))}
              className='block appearance-none w-full bg-gray-200 h-[56px] border border-gray-200 text-gray-700 py-4 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-state'>
              <option value={0}>Logado ou Deslogado</option>
              <option value={1}>Logado</option>
              <option value={2}>Não Logado</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        <TextField

          onChange={(event) => setState((value) => ({ ...value, search: event.target.value }))} label={'Pesquisar'}
          inputProps={{ placeholder: 'Pesquisar por tipo de usuario, e id' }} />
      </div>
      <div>

      </div>
      <table className='min-w-[100%] rounded-lg border-collapse'>
        <thead>
        <tr>
          <th >Id</th>
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

          <span>Página {pagination.page} de {Math.round(state.logs.length / pagination.limit)}</span>
          <div className='flex '>
            <PrimaryButton
              className='mr-4'
              buttonProps={{ disabled: pagination.page === 1 }}
              onClick={() => handlePagination(-1)}>Voltar</PrimaryButton>
            <PrimaryButton buttonProps={{ disabled: state.logs.length / pagination.limit < pagination.page }}
                           onClick={() => handlePagination(1)}>Proxima</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

Logs.layout = DashboardLayout

export default Logs
