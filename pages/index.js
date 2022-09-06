import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactBtn from '../components/contactBtn'
import { BsBoxArrowInRight } from 'react-icons/bs'

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

			<div className='h-full flex flex-col items-center w-full py-12 selection:bg-blue3 bg-black2'>
				<main className='flex flex-col justify-start h-full md:w-5/6 md:px-4'>
					<header className='mx-4 md:mx-0'>
						<h1 className='mb-4 text-5xl'>Welcome</h1>
						<h1 className='mb-4 text-3xl'>
							My name is <span className='text-blue3'>Darius</span>
						</h1>
						<p className='md:w-1/2 mb-8'>
							I'm a front-end developer that is driven to uncover the "why" in
							how things work. I'm looking to contribute to interesting projects
							that will make a meaningful impact on people.
						</p>
						<Link href='/projects'>
							<a className='flex flex-row w-max shadow-2xl items-center gap-2 p-4 font-semibold bg-blue3 bg-opacity-20 border-2 border-blue3 text-blue3 transition ease-in-out delay-100 hover:scale-95 hover:opacity-75  rounded-lg'>
								<div>Check out my projects </div>
								<BsBoxArrowInRight size={25}></BsBoxArrowInRight>
							</a>
						</Link>
					</header>
				</main>
				<div className='z-10 my-12 h-screen w-full shadow-xl  '>
					<Spline
						className='rounded-sm cursor-grab'
						// scene='https://prod.spline.design/jM7iJtkNdHonXjTv/scene.splinecode'
						scene='https://prod.spline.design/6IcN6I8oOqHh40BT/scene.splinecode'
					/>
				</div>
				<section className=' mx-4 md:mx-0 md:w-5/6 my-24 '>
					<article className='md:flex md:items-center flex-col'>
						<h2 className='mb-4 text-4xl text-blue3'> About Me</h2>
						<p className='mb-4 md:w-3/5'>
							I'm a 2022 UC Irvine graduate with a B.A. degree in Business
							Economics. I'm a passionate front-end developer that is looking to
							bring immediate value and positive attitude. I've played baseball
							for most of my life, until my time came to an end during my first
							couple of years in college. I recently started getting into golf
							too, which is definitely a different pace from baseball. I'm not
							the best at it, but trying to improve each time I played allowed
							steady growth. I'm not afraid of failure as that's where I think
							most of my best growth has come from. I'm highly motivated and a
							fast learner.
						</p>
						<p className='md:w-3/5'>
							I'm always trying to learn new technologies to further advance my
							capabilities to see where my imagination leads me. I strive to
							keep learning new things to not only apply to my everyday life,
							but to constantly challenge what's possible. I'm a problem solver
							that wants to utilize my skills to help other people and to make
							the world a better place for all.
						</p>
					</article>
				</section>
			</div>
			<Footer />
			<ContactBtn />
		</>
	)
}
