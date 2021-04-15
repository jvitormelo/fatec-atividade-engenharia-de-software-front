import React from 'react';

import { AppProps } from 'next/app';

import '../styles/main.css';

import { Loading } from '../components/global/loading';
import UserProvider from '../context/user';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <Loading />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </UserProvider>
);

export default MyApp;
