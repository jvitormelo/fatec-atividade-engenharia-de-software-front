import { useCallback, useEffect, useMemo, useState } from 'react'
import LogsResource from '../resources/LogsResource'
import { useLoadingContext } from '../context/loadingContext'
import { useProtectedPage } from '../hooks/useProtectedPage'

type requestLog = {
  body: {}
  browser: string,
  method: string,
  os:string,
  path:string,
  platform:string,
  source:string
  headers:{},
}
export type TLogs = {
  id: number, userId: number, userType: string,
  body: requestLog,
  createdAt: Date,
}

export interface ILogs {
  logs: TLogs[],
  search: string,
  authentication: number,
  userType: number

}

export const useLogsController = () => {
  const { routeHandler } = useProtectedPage()
  const { setLoading, loading } = useLoadingContext()
  const [pagination, setPagination] = useState({ page: 1, limit: 10 })
  const [state, setState] = useState<ILogs>({ logs: [], search: '', authentication: 0, userType: 0 })
  const mountHandler = useCallback(async () => {
    setLoading(true)
    const { data } = await LogsResource.index()
    setState((values) => ({ ...values, logs: data }))
    setLoading(false)
  }, [])

  const startAndLimit = useMemo(() => {
    return {
      start: (pagination.page * pagination.limit) - pagination.limit,
      offSet: pagination.page * pagination.limit
    }
  }, [pagination])

  useEffect(() => {
    setPagination((values) => ({ ...values, page: 1 }))
  }, [state])

  const handlePagination = useCallback((page) => {
    setPagination((values) => ({ ...values, page: values.page + page }))
  }, [pagination, setPagination])

  useEffect(() => {
    routeHandler()
    mountHandler()
  }, [])

  const isInSearch = useCallback(({ userId }: TLogs) => {
    const { search } = state
    return String(userId).includes(search)
  }, [state])

  const filteredRows = useMemo(() => {
    let logs = [...state.logs]
    if (state.authentication) logs = logs.filter((log) => state.authentication === 1 ? log.userId > 0 : log.userId === 0)
    if (state.userType) logs = logs.filter((log) => state.userType === 1 ? log.userType === 'admin' : log.userType === 'user')
    if (state.search) logs = logs.filter((log) => isInSearch(log))
    return logs
  }, [state])

  const paginatedRows = useMemo(() => {
    const { start, offSet } = startAndLimit
    return filteredRows.filter((_log, index) => index >= start && index < offSet)
  }, [startAndLimit, state, filteredRows])
  return {
    state,
    handlePagination,
    startAndLimit,
    pagination,
    setState,
    loading,
    paginatedRows,
    filteredRows
  }
}
