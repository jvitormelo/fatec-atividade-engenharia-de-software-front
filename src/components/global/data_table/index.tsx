import React from 'react'

// interface IDataTable {
//   headers: Array<IHeaders>;
//   data: Array<Object>;
// }
//
// interface IHeaders {
//   name: String;
//   value: String;
// }

function DataTable ({ headers, data }: any) {
  return (
    <div className="flex  rounded-lg bg-gray-200 shadow-lg content-around">
      {headers.map((header: { name: string; value: string | number }) => (
        <div className="flex">
          <div className="flex flex-col">
            <div className="border-green-700 border-b-2 p-4 pr-8 text-xl">{header.name}</div>
            {data.map((item: any) => (
              <div
                key={item.id}
                className="border-green-700 flex justify-center border-b-2 p-4 pr-8"
              >
                {String(item[header.value])}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DataTable
