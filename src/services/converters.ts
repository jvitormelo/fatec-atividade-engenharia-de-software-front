import { format, parseISO } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

export const useDate = (value: string | Date, dateFormat = 'P  pp') => {
  if (!value) return value
  return format(typeof value === 'string' ? parseISO(value) : value, dateFormat, { locale: ptBr })
}
