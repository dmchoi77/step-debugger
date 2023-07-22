import '~/styles/globals.css';

import type { AppProps } from 'next/app';

import MasterLayout from '~/components/layout/MasterLayout';

import { AppProvider } from '~/store/AppContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <MasterLayout>
        <Component {...pageProps} />
      </MasterLayout>
    </AppProvider>
  );
}
