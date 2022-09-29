import {AppProps} from 'next/app';

import '@styles/globals.css';
import '@styles/colors.css';
import '@components/molecules/loading/loading-module.scss';

import {PageLoading} from '@components/molecules';
import Layout from '@components/layout';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Layout>
      <PageLoading overlay />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
