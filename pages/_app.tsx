import type { AppProps } from 'next/app'
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import Layout from '../components/Layout';

import { ChakraProvider } from '@chakra-ui/react';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>

      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
