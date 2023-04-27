import '@/styles/globals.css';
import BaseLayour from '@layouts/base-layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cyber Vision Consulting</title>
      </Head>
      <BaseLayour>
        <Component {...pageProps} />
      </BaseLayour>
    </>
  );
}
