import { TextField } from '../../../global/input/default_input'
import React, { SetStateAction } from 'react'

export const LogsHeader = ({ setState } : { setState: React.Dispatch<SetStateAction<{authentication:number, search: string, logs: any[]}>>}) => {
  return (
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
        className="text-text-primary min-w-[300px]"
        onChange={(event) => setState((value) => ({ ...value, search: event.target.value }))} label={'Pesquisar'}
        inputProps={{ placeholder: 'Pesquisar por tipo de usuario ou id' }} />
    </div>
  )
}
