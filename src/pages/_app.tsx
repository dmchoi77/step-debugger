import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import MasterLayout from '~/components/layout/MasterLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MasterLayout>
      <Component {...pageProps} />
    </MasterLayout>
  );
}
