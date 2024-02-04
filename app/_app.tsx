// pages/app/_app.tsx
import Head from 'next/head';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
