import { motion as m, AnimatePresence, staggerChildren } from 'framer-motion'

import React from 'react'

export const PageWrapper = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <m.div
          initial={{ opacity: 0, y: 125 }}
          animate={{ opacity: 1, y: 0 }}
          exist={{ opacity: 0, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </>
  )
}

export default PageWrapper
