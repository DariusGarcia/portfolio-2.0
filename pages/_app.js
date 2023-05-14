import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import Router, { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
