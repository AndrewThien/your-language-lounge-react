import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';
import {Toaster} from 'react-hot-toast';

import Providers from '../components/Providers';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Providers>
        <Component {...pageProps} />
        <Toaster />
      </Providers>
    </>
  );
});

export default MyApp;
