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
	// const [isOpen, setIsOpen] = useState([])
	const [websiteOpen, setWebsiteOpen] = useState(true)
	const [mobileOpen, setMobileOpen] = useState(false)
	const handleStatusChange = (status) => {
		setIsOpen((prev) => [...prev, status])
	}

	return (
		<div className='bg-black2'>
			<Navbar />

			<main className='flex justify-center mx-4 md:mx-0 md:pt-12 mb-12 bg-black2 '>
				<div className='md:grid md:grid-cols-3 md:grid-rows-3 w-full md:w-3/5'>
					<div className=' row-span-1 md:sticky md:top-20 md:mt-24 flex flex-col items-center md:bg-black md:bg-opacity-20 md:mr-8 h-max p-4 rounded-lg'>
						<h1 className='mb-8 md:mb-12 text-3xl'>Projects</h1>
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
										? 'bg-darkGrey w-full font-semibold p-4 rounded-lg transition ease-in-out delay-55 hover:scale-95 hover:opacity-75'
										: 'bg-blue3 w-full font-semibold p-4 rounded-lg transition ease-in-out delay-55 hover:scale-95 hover:opacity-75'
								}>
								Websites / webapps
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
										? 'bg-darkGrey w-full font-semibold p-4 rounded-lg transition ease-in-out delay-55 hover:scale-95 hover:opacity-75'
										: 'bg-blue3 w-full font-semibold p-4 rounded-lg transition ease-in-out delay-55 hover:scale-95 hover:opacity-75'
								}>
								Mobile Apps
							</button>
						</div>
					</div>
					<div className=' row-span-2 col-span-2 overflow-auto'>
						<header className='mb-8 md:mb-12'>
							<p className='mt-4 md:text-lg '>
								Here are some of the recent projects I have completed.
							</p>
						</header>
						{websiteOpen ? (
							<section className=''>
								<h2 className=' text-xl md:text-2xl mb-4'>
									Websites and Web Apps
								</h2>
								<div className='flex flex-col  md:gap-8 justify-between cursor-pointer mb-24'>
									{projects.websites.map((project) => (
										<SingleWebsite
											key={project.name}
											name={project.name}
											description={project.description}
											tech={project.tech}
											image={project.image}
											type={project.type}
											setOpen={handleStatusChange}
										/>
									))}
								</div>
							</section>
						) : (
							<section className=''>
								<h2 className='text-xl md:text-2xl mb-4'>Mobile Apps</h2>
								<div className='flex flex-col  md:gap-8 justify-between cursor-pointer mb-24'>
									{projects.webapps.map((project) => (
										<SingleMobileApp
											key={project.name}
											name={project.name}
											description={project.description}
											tech={project.tech}
											image={project.image}
											type={project.type}
											// setOpen={handleStatusChange}
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
			description: 'Freelance Next.js project for a client.',
			tech: 'Next.js, React, Tailwind CSS',
			image: fixit,
			type: 'video/mp4',
		},
		{
			name: 'BullBear Market',
			description: 'Side project using React.',
			tech: 'React, Tailwind CSS, node.js, REST APIs, user Auth',
			image: bullbear,
			type: 'video/mp4',
		},
		{
			name: 'KVL Communications',
			description: 'Freelance Next.js project for a small business.',
			tech: 'Next.js, React, Tailwind CSS',
			image: kvl,
			type: 'video/mp4',
		},
	],

	webapps: [
		{
			name: 'Tweeter',
			description: 'Android mobile app that is a clone of twitter.',
			tech: 'Next.js, React, Tailwind CSS',
			image: tweeter,
		},
		{
			name: 'Instapic',
			description: 'Side project using React.',
			tech: 'React, Tailwind CSS, node.js, REST APIs, user Auth',
			image: instapic,
		},
		{
			name: 'Flixter',
			description: 'Freelance Next.js project for a small business.',
			tech: 'Next.js, React, Tailwind CSS',
			image: flixter,
		},
	],
}

export default Projects
