import { useState } from 'react'
import SingleProject from '../components/singleProject'
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

const projectList = [
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
	{
		name: 'KVL Communications',
		description: 'Freelance Next.js project for a small business.',
		tech: 'Next.js, React, Tailwind CSS',
		image: kvl,
		type: 'video/mp4',
	},
]
const mobileApps = [
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
]
const Projects = () => {
	const [isOpen, setIsOpen] = useState([])
	const handleStatusChange = (status) => {
		setIsOpen((prev) => [...prev, status])
	}

	return (
		<div className='bg-black2'>
			<Navbar />

			<main className='flex justify-center mx-4 md:mx-0 my-12 md:my-24 h-full bg-black2 '>
				<div className='w-full md:w-3/5'>
					<header className='mb-12'>
						<h1 className='text-4xl text-blue3'>Projects</h1>
					</header>
					<section className='mb-12 '>
						<h2 className='text-2xl mb-4'>Websites and Web Apps</h2>
						<div className='flex flex-col md:grid md:grid-cols-2 md:gap-8 justify-between cursor-pointer mb-56'>
							{projectList.map((project) => (
								<SingleProject
									key={project.name}
									name={project.name}
									description={project.description}
									tech={project.tech}
									image={project.image}
									type={project.type}
									setOpen={handleStatusChange}
								/>
							))}
							{/* {projectList.map((project) => (
								<article
									onClick={() => {
										setOpen('i')
										setOpen(!'i')
									}}
									key={project.name}
									className='shadow-xl p-4 border-2 border-darkGrey rounded-md hover:scale-110 transition ease-in-out delay-75 '>
									{open === 'i' ? (
										<>
											<h3 className=''> {project.name}</h3>
											<p className='text-darkGrey'>{project.description}</p>
										</>
									) : (
										<>
											<Image src={project.image} width='10' height='10'></Image>
											<h3 className=''> {project.name}</h3>
											<p className='text-darkGrey'>{project.description}</p>
											<p className=''>{project.tech}</p>
										</>
									)}
								</article>
							))} */}
						</div>
					</section>
					<section className=''>
						<h2 className='text-2xl'>Mobile Apps</h2>
						<div className='flex flex-col md:grid md:grid-cols-2 md:gap-8 justify-between cursor-pointer mb-56'>
							{mobileApps.map((project) => (
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

export default Projects
