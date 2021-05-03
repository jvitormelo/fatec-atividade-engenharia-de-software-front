import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

function Logout() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('token');
    router.push('/').then();
  }, []);
  return <></>;
}

export default Logout;
