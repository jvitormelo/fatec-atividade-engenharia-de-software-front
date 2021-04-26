import React from 'react';

import DataTable from '../../../components/global/data_table';
import useManageUserController from './manageUserController';

function ManageUsers() {
  useManageUserController();
  return (
    <div>
      <DataTable
        headers={[
          { name: 'Nome', value: 'name' },
          { name: 'É admnistrador', value: 'isAdmin' },
        ]}
        data={[
          { name: 'Arthur', isAdmin: true },
          { name: 'Joao', isAdmin: true },
          { name: '(((G)))', isAdmin: true },
          { name: 'KYS', isAdmin: false },
        ]}
      />
    </div>
  );
}

export default ManageUsers;
