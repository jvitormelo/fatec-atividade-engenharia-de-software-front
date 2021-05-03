import React from 'react';

// eslint-disable-next-line import/order
import { AppProps } from 'next/app';

import '../styles/main.css';

import { useRouter } from 'next/router';

import { Loading } from '../components/global/loading';
import Snackbar from '../components/global/snackbar';
import SnackbarProvider from '../context/snackbar';
import UserProvider from '../context/user';
import DashboardLayout from '../layout/DashboardLayout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  if (router.pathname.includes('dashboard')) {
    return (
      <UserProvider>
        <SnackbarProvider>
          <Loading />
          <Snackbar />
          <DashboardLayout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </DashboardLayout>
        </SnackbarProvider>
      </UserProvider>
    );
  }

  return (
    <UserProvider>
      <SnackbarProvider>
        <Loading />
        <Snackbar />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </SnackbarProvider>
    </UserProvider>
  );
};

export default MyApp;
