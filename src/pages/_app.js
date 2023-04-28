import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
export default function App({ Component, pageProps }) {
  return <>
  <NextNProgress color="#E60304" startPosition={0.3} stopDelayMs={200} height={2} showOnShallow={true} />
  <Component {...pageProps} />
  </>
}
