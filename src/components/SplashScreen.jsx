import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function SplashScreen({ onFinish }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Always show splash on each page load (no persistence)
    const timer = setTimeout(() => setVisible(false), 1700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          onAnimationComplete={() => {
            if (!visible && onFinish) onFinish()
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
            <motion.img
              src="/images/logo.png"
              alt="Peggy Beauty"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="splash-logo shadow-lg"
            />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen
