import '~/styles/globals.css';

import type { AppProps } from 'next/app';

import MasterLayout from '~/components/layout/MasterLayout';

import { AppProvider } from '~/store/AppContext';
import StepDebugger from '~/components/step/StepDebugger';

// const isDev = process.env.NODE_ENV === 'development';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <MasterLayout>
        <Component {...pageProps} />
        <StepDebugger />
      </MasterLayout>
    </AppProvider>
  );
}
