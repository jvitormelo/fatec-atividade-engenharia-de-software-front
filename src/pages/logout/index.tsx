import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Logout() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('token');
    router.push('/').then();
  }, []);
  return <div />;
}

export default Logout;
