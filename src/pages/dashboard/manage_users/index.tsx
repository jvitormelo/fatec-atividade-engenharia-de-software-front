import React from 'react';

import DataTable from '../../../components/global/data_table';
import useManageUserController from '../../../controllers/manageUserController';

function ManageUsers() {
  const { state } = useManageUserController();
  return (
    <div>
      <DataTable
        headers={[
          { name: 'Nome', value: 'name' },
          { name: 'É admnistrador', value: 'isAdmin' },
        ]}
        data={state.users}
      />
    </div>
  );
}

export default ManageUsers;
