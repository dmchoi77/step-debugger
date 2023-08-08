import '~/styles/globals.css';

import type { AppProps } from 'next/app';

import MasterLayout from '~/components/layout/MasterLayout';
import { GlobalPortal } from '~/GlobalPortal';

// import { AppProvider } from '~/store/AppContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <AppProvider>
    <GlobalPortal.Provider>
      <MasterLayout>
        <Component {...pageProps} />
      </MasterLayout>
    </GlobalPortal.Provider>
    // </AppProvider>
  );
}
