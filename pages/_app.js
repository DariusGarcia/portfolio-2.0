import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import Router, { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	return (
		// <AnimatePresence exitBeforeEnter>
		// 	<motion.div
		// 		key={router.route}
		// 		initial='initialState'
		// 		animate='animateState'
		// 		exit='exitState'
		// 		transition={{ duration: 0.25 }}
		// 		variants={{
		// 			initialState: {
		// 				opacity: 0,
		// 				clipPath: 'polygon(0, 0, 100%, 0, 100% 100%, 0% 100%)',
		// 			},

		// 			animateState: {
		// 				opacity: 1,
		// 				clipPath: 'polygon(0, 0, 100%, 0, 100% 100%, 0% 100%)',
		// 			},
		// 			exitState: { clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' },
		// 		}}>
		// 	</motion.div>
		// </AnimatePresence>
		<div>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
