import React from 'react';

import { AppProps } from 'next/app';

import '../styles/main.css';

import { Loading } from '../components/global/loading';
import Snackbar from '../components/global/snackbar';
import SnackbarProvider from '../context/snackbar';
import UserProvider from '../context/user';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <SnackbarProvider>
      <Loading />
      <Snackbar />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </SnackbarProvider>
  </UserProvider>
);

export default MyApp;
