import { useEffect } from 'react';

function ManageUserController() {
  function mountHandler() {
    console.log('Montei');
  }

  useEffect(() => {
    mountHandler();
  });

  return {};
}

export default ManageUserController;
