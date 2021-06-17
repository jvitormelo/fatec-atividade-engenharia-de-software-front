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

interface ILogs {
  logs: TLogs[],
  search: string,
  authentication: number,

}

export const useLogsController = () => {
  const { routeHandler } = useProtectedPage()
  const { setLoading, loading } = useLoadingContext()
  const [pagination, setPagination] = useState({ page: 1, limit: 10 })
  const [state, setState] = useState<ILogs>({ logs: [], search: '', authentication: 0 })
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

  const handlePagination = useCallback((page) => {
    setPagination((values) => ({ ...values, page: values.page + page }))
  }, [pagination, setPagination])

  useEffect(() => {
    routeHandler()
    mountHandler()
  }, [])
  return {
    state,
    handlePagination,
    startAndLimit,
    pagination,
    setState,
    loading
  }
}
