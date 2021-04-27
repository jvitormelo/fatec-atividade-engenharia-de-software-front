import React from 'react';

import { AiOutlineRight } from 'react-icons/ai';

import Dashboard from '../index';

const DashboardHome = () => (
  <Dashboard>
    <div className="flex flex-1 flex-col">
      <div>
        <div className="text-2xl mb-2">Ultimas matérias</div>
        <div className="lg:grid grid-cols-4 gap-3">
          {['Programação', 'Matemática', 'teste'].map((item) => (
            <div
              key={item}
              className="p-4 bg-white animate-2s duration-150 cursor-pointer  hover:translate-y- transform hover:translate-y-1  shadow-lg hover:bg-gray-100 min-w-[10.23rem] flex justify-between items-center rounded-lg"
            >
              <div className="font-bold">{item}</div>
              <div>
                <AiOutlineRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Dashboard>
);
export default DashboardHome;
