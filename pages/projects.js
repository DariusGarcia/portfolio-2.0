import { useState } from 'react'
import SingleWebsite from '../components/singleWebsite'
import SingleMobileApp from '../components/singleMobileApp'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactBtn from '../components/contactBtn'
import logo from '../public/favicon.ico'
import Image from 'next/image'
import fixit from '../public/videos/fixitcredit.mp4'
import bullbear from '../public/videos/bullbear.mp4'
import kvl from '../public/videos/kvl.mp4'
import tweeter from '../public/videos/tweeter.gif'
import instapic from '../public/videos/instapic.gif'
import flixter from '../public/videos/flixter.gif'

const Projects = () => {
	const [isOpen, setIsOpen] = useState([])
	const handleStatusChange = (status) => {
		setIsOpen((prev) => [...prev, status])
	}

	return (
		<div className='bg-black2'>
			<Navbar />

			<main className='flex justify-center mx-4 md:mx-0 my-12 bg-black2 '>
				<div className=' w-full md:w-3/5'>
					<header className='mb-12'>
						<h1 className='text-4xl text-blue3'>Projects</h1>
						<p className='mt-4 text-lg '>
							Here are some of the recent projects I have completed.
						</p>
					</header>
					<section className=' '>
						<h2 className='text-2xl mb-4'>Websites and Web Apps</h2>
						<div className='flex flex-col md:grid md:grid-cols-2 md:gap-8 justify-between cursor-pointer mb-24'>
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
					<section className=''>
						<h2 className='text-2xl mb-4'>Mobile Apps</h2>
						<div className='flex flex-col md:grid md:grid-cols-2 md:gap-8 justify-between cursor-pointer mb-24'>
							{projects.webapps.map((project) => (
								<SingleMobileApp
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
