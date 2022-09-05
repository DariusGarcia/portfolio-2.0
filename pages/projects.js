import { useState } from 'react'
import SingleWebsite from '../components/singleWebsite'
import SingleMobileApp from '../components/singleMobileApp'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactBtn from '../components/contactBtn'
// import { ScrollToTop } from '../utils/ScrollToTop'
import logo from '../public/favicon.ico'
import Image from 'next/image'
import fixit from '../public/videos/fixitcredit.mp4'
import bullbear from '../public/videos/bullbear.mp4'
import kvl from '../public/videos/kvl.mp4'
import tweeter from '../public/videos/tweeter.gif'
import instapic from '../public/videos/instapic.gif'
import flixter from '../public/videos/flixter.gif'

const Projects = () => {
	const [websiteOpen, setWebsiteOpen] = useState(true)
	const [mobileOpen, setMobileOpen] = useState(false)
	const handleStatusChange = (status) => {
		setIsOpen((prev) => [...prev, status])
	}

	return (
		<div className='bg-black2'>
			<Navbar />

			<main className='flex justify-center mx-4 lg:mx-0 md:pt-12 mb-12 bg-black2 '>
				<div className='md:grid md:grid-cols-3 w-full lg:w-5/6'>
					<div>
						<div className='md:fixed px-8 pb-8 row-span-1 md:mt-4 flex flex-col items-center border-darkGrey md:border-[1px]  md:bg-opacity-20 md:mr-8 h-max  rounded-lg'>
							<h1 className='mb-4 mt-4 md:mb-8 text-3xl font-semibold'>
								Projects
							</h1>
							<div className='flex flex-col items-start gap-8'>
								<button
									onClick={() => {
										if (mobileOpen) {
											setWebsiteOpen(!websiteOpen)
											setMobileOpen(false)
											window.scrollTo(0, 0)
										} else {
											window.scrollTo(0, 0)
										}
									}}
									className={
										!websiteOpen
											? 'bg-darkGrey text-sm w-full font-semibold p-4 rounded-lg transition ease-in-out delay-55 hover:scale-95 hover:opacity-75'
											: 'bg-blue3 text-sm w-full font-semibold p-4 rounded-lg transition ease-in-out delay-55 hover:scale-95 hover:opacity-75'
									}>
									WEBSITES & WEB APPS
								</button>
								<button
									onClick={() => {
										if (websiteOpen) {
											setWebsiteOpen(false)
											setMobileOpen(!mobileOpen)
											window.scrollTo(0, 0)
										} else {
											window.scrollTo(0, 0)
										}
									}}
									className={
										!mobileOpen
											? 'bg-darkGrey text-sm w-full font-semibold p-4 rounded-lg transition ease-in-out delay-55 hover:scale-95 hover:opacity-75 '
											: 'bg-blue3 text-sm w-full font-semibold p-4 rounded-lg transition ease-in-out delay-55 hover:scale-95 hover:opacity-75 '
									}>
									MOBILE APPS
								</button>
							</div>
						</div>
						<div className='hidden sm:block '>
							<h1 className=''></h1>
						</div>
					</div>

					{/* 2nd column of the grid container */}
					{/* containers the individual projects */}
					<div className=' row-span-2 col-span-2 overflow-auto md:mr-2'>
						<header className='mb-8 md:mb-12'>
							<p className='mt-4 md:text-lg '>
								Here are some of the recent projects I have completed.
							</p>
						</header>
						{websiteOpen ? (
							<section className=''>
								<h2 className=' text-xl font-bold md:text-2xl mb-4'>
									WEBSITES AND WEB APPS
								</h2>
								<div className='flex flex-col md:gap-8 justify-between cursor-pointer mb-24'>
									{projects.websites.map((project) => (
										<SingleWebsite
											key={project.name}
											name={project.name}
											description={project.description}
											tech={project.tech}
											image={project.image}
											link={project.link}
											type={project.type}
											setOpen={handleStatusChange}
										/>
									))}
								</div>
							</section>
						) : (
							<section className=''>
								<h2 className='text-xl md:text-2xl mb-4 font-bold'>
									MOBILE APPS
								</h2>
								<div className='flex flex-col md:gap-8 justify-between cursor-pointer mb-24'>
									{projects.webapps.map((project) => (
										<SingleMobileApp
											key={project.name}
											name={project.name}
											description={project.description}
											tech={project.tech}
											image={project.image}
											type={project.type}
											link={project.link}
										/>
									))}
								</div>
							</section>
						)}
					</div>
				</div>
			</main>
			<Footer />
			<ContactBtn />
		</div>
	)
}

const projects = {
	websites: [
		{
			name: 'Fix It Credit Inc.',
			description:
				"Freelance Next.js project for a client that lets customers send payments utilizing Stripe's payment API.",
			tech: 'Next.js, React, Tailwind CSS',
			image: fixit,
			link: 'https://fititcredit.com/',
			type: 'video/mp4',
		},
		{
			name: 'BullBear Market',
			description:
				'Full-stack MERN web app that lets users add stocks from the S&P500 index to their own personal watch list.',
			tech: 'React, Tailwind CSS, node.js, REST APIs, user Auth',
			image: bullbear,
			link: 'https://bullbearmarket.net/',
			type: 'video/mp4',
		},
		{
			name: 'KVL Communications',
			description:
				"Freelance marketing website for a small business that's built with Next.js.",
			tech: 'Next.js, React, Tailwind CSS',
			image: kvl,
			link: 'https://kvl-communications.com/',
			type: 'video/mp4',
		},
	],

	webapps: [
		{
			name: 'Tweeter',
			description:
				'Full-stack Android mobile app that lets users login to their Twitter account and compose new Tweets.',
			tech: 'Kotlin, REST APIs, user Auth',
			image: tweeter,
			link: 'https://github.com/dariusgarcia/tweeter',
		},
		{
			name: 'Instapic',
			description:
				'Full-stack Android mobile photo-sharing app similar to Instagram.',
			tech: 'Kotlin, REST APIs, user Auth',
			image: instapic,
			link: 'https://github.com/dariusgarcia/instapic',
		},
		{
			name: 'Flixter',
			description:
				'Android mobile app that allows users to browse movies from the The Movie Database API.',
			tech: 'Kotlin, REST APIs, user Auth',
			image: flixter,
			link: 'https://github.com/dariusgarcia/flixter',
		},
	],
}

export default Projects
