
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-QRDCN3V411"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QRDCN3V411');
        `}
      </script>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
