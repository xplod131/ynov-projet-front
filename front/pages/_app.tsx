import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout/Layout";
import 'my-lib-ui/dist/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
