import '~/styles/globals.css';

import type { AppProps } from 'next/app';

import MasterLayout from '~/components/layout/MasterLayout';
import { RecoilRoot } from 'recoil';
import { GlobalPortal } from '~/GlobalPortal';

// import { AppProvider } from '~/store/AppContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <AppProvider>
    <GlobalPortal.Provider>
      <RecoilRoot>
        <MasterLayout>
          <Component {...pageProps} />
        </MasterLayout>
      </RecoilRoot>
    </GlobalPortal.Provider>
    // </AppProvider>
  );
}
