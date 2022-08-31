import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactBtn from '../components/contactBtn'

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

			<div className='relative flex flex-col items-center w-full py-12 bg-grey'>
				<main className='flex flex-col justify-start h-full md:w-3/5'>
					<header className='mx-4 md:mx-0'>
						<h1 className='mb-4 text-5xl'>Welcome</h1>
						<h1 className='mb-4 text-3xl'>
							My name is <span className='text-orange'>Darius</span>
						</h1>
						<p className='md:w-1/2'>
							I'm a front-end developer that is driven to uncover the "why" in
							how things work. I'm looking to contribute to interesting projects
							that will make a meaningful impact on people.
						</p>
					</header>
				</main>
				<div className='z-10 mb-10 w-full h-screen shadow-xl  '>
					<Spline
						className='rounded-sm cursor-grab'
						// scene='https://prod.spline.design/jM7iJtkNdHonXjTv/scene.splinecode'
						scene='https://prod.spline.design/6IcN6I8oOqHh40BT/scene.splinecode'
					/>
				</div>
				<section className='mx-4 md:mx-0 md:w-3/5 my-24 '>
					<article className=''>
						<h2 className='mb-4 text-4xl text-orange'> About Me</h2>
						<p className=''>
							{' '}
							I'm a recent UC Irvine graduate with a B.A. degree in Business
							Economics. I'm not afraid of failure as that's where true growth
							flourishes. I'm highly motivated and a fast learner. I found a
							passion for programming due to having to think outside the box for
							solving various real world problems and being able to let my
							creativity run freely. I'm always trying to learn new technologies
							to further advance my capabilities to see where my imagination
							leads me. I strive to keep learning new things to not only apply
							to my everyday life, but to constantly challenge what's possible.
							I try to refrain from accepting one approach of doing something,
							but rather try to seek comfort in embracing the unknown to be able
							to shed light on new solutions. I'm a problem solver that wants to
							utilize my skills to help other people and to make the world a
							better place for all.
						</p>
					</article>
				</section>
			</div>
			<Footer />
			<ContactBtn />
		</>
	)
}
