import { useCallback, useEffect, useMemo, useState } from 'react'
import LogsResource from '../resources/LogsResource'

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

interface ILogs {
  logs: {
    id: number, userId: number, userType: string,
    body: requestLog,
    createdAt: Date,
  }[],

}

export const useLogsController = () => {
  const [pagination, setPagination] = useState({ page: 1, limit: 10 })
  const [state, setState] = useState<ILogs>({ logs: [] })
  const mountHandler = useCallback(async () => {
    const { data } = await LogsResource.index()
    setState((values) => ({ ...values, logs: data }))
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
    mountHandler()
  }, [])
  return {
    state,
    handlePagination,
    startAndLimit,
    pagination
  }
}
