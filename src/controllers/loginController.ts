import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { useSnackbarContext } from '../context/snackbar';
import { useLoadingContext } from '../context/user';
import SignInResource from '../resources/SignInResource';
import ErrorAPI from '../services/ErrorAPI';

const loginController = () => {
  const { setSnackbar } = useSnackbarContext();
  const { openLoading, closeLoading } = useLoadingContext();
  const router = useRouter();

  const [userState, setUser] = useState({
    email: '',
    password: '',
  });

  function handleAlreadyLogged() {
    if (localStorage.getItem('token')) return router.push('/dashboard/home/');
    return null;
  }

  useEffect(() => {
    handleAlreadyLogged();
  });

  async function doLogin() {
    const { response, error, data } = await SignInResource.login(userState);
    if (error) throw new ErrorAPI(response);
    return data || {};
  }

  async function loginHandler() {
    try {
      openLoading();
      const { token } = await doLogin();
      setSnackbar({ message: 'Logado com sucesso!', status: 'success' });
      localStorage.setItem('token', token);
      return await router.push('/dashboard/home/');
    } catch (e) {
      return setSnackbar({ message: e.message, status: 'error' });
    } finally {
      closeLoading();
    }
  }
  return {
    loginHandler,
    setUser,
  };
};

export default loginController;
