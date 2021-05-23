import React, { FunctionComponent } from 'react';

// eslint-disable-next-line import/order
import { AppProps } from 'next/app';

import '../styles/main.css';

import { Loading } from '../components/global/loading';
import Snackbar from '../components/global/snackbar';
import SnackbarProvider from '../context/snackbar';
import UserProvider from '../context/user';

// eslint-disable-next-line react/prop-types
const DefaultLayout: FunctionComponent = ({ children }) => <>{children}</>;

const MyApp = ({ Component, pageProps }: AppProps) => {
  // @ts-ignore
  const Layout = Component?.layout || DefaultLayout;

  return (
    <UserProvider>
      <SnackbarProvider>
        <Loading />
        <Snackbar />
        <Layout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Layout>
      </SnackbarProvider>
    </UserProvider>
  );
};

export default MyApp;
