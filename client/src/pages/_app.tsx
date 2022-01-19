import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/GlobalStyles';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default App;
