import React from 'react';

import DataTable from '../../../components/global/data_table';
import useManageUserController from '../../../controllers/manageUserController';
import DashboardLayout from '../../../layout/DashboardLayout';

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

ManageUsers.layout = <DashboardLayout />;
export default ManageUsers;
