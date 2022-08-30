import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

// spline animation library
import Spline from '@splinetool/react-spline'

export default function Home() {
	return (
		<>
			<Head>
				<title>Darius Garcia</title>
				<meta name='description' content='Portfolio created by Darius Garcia' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/*       Nav bar     */}
			<Navbar />

			<div className='flex flex-col items-center w-full py-12 bg-navy'>
				<main className='flex flex-col justify-start h-full bg-navy md:w-3/5'>
					<header className='mx-4'>
						<h1 className='mb-4 text-3xl'>
							Hey, I'm <span className='text-orange'>Darius.</span>
						</h1>
						<p className='md:w-1/2'>
							I'm a front-end developer that is driven to uncover the "why" in
							how things work. I'm looking to contribute to interesting projects
							that will make a meaningful impact on people.
						</p>
					</header>
				</main>
				<div className='mb-10 w-full h-screen bg-navy shadow-xl  '>
					<Spline
						className='rounded-lg'
						scene='https://prod.spline.design/jM7iJtkNdHonXjTv/scene.splinecode'
					/>
				</div>
			</div>
			<Footer />
		</>
	)
}
