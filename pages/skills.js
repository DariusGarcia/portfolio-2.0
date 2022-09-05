import Head from 'next/head'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import ContactBtn from '../components/contactBtn'

const Skills = () => {
	return (
		<>
			<Head>
				<title>skills</title>
			</Head>
			<NavBar />
			<main className='py-12 flex flex-col items-center  bg-black2'>
				<div className='px-6 flex flex-col md:w-5/6 mb-8'>
					<h1 className='text-4xl font-semibold mb-4'>Skills</h1>
					<h2 className='text-lg font-semibold'>
						Current tech stack that I use to develop my web applications:
					</h2>
				</div>
				<section className='md:w-5/6 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 '>
					{skills.current.map((skill) => (
						<article
							className='flex justify-center  items-center p-8 font-bold bg-blue3 bg-opacity-20 border-2 border-blue3 text-blue3 rounded-xl selection:bg-darkGrey selection:text-black hover:scale-105 transition ease-in-out delay-100 hover:bg-opacity-100 hover:text-white'
							key={skill}>
							{skill}
						</article>
					))}
				</section>
				<div className='px-6 flex flex-col md:w-5/6 mt-12'>
					<h2 className='text-lg font-semibold mb-8'>
						Other technologies I have worked with in the past:
					</h2>
				</div>
				<section className='md:w-5/6 md:px-6 grid grid-cols-2  gap-8'>
					{skills.previous.map((skill) => (
						<article
							className='flex justify-center items-center p-8 font-bold bg-blue3 bg-opacity-20 border-2 border-blue3 text-blue3 rounded-xl selection:bg-darkGrey selection:text-black hover:scale-105 transition ease-in-out delay-100 hover:bg-opacity-100 hover:text-white'
							key={skill}>
							{skill}
						</article>
					))}
					<article
						className='col-span-2 flex justify-center items-center p-8 font-bold bg-blue3 bg-opacity-20 border-2 border-blue3 text-blue3 rounded-xl selection:bg-darkGrey selection:text-black hover:scale-105 transition ease-in-out delay-100 hover:bg-opacity-100 hover:text-white'
						key='android'>
						Android Mobile Development
					</article>
				</section>
			</main>
			<Footer />
			<ContactBtn />
		</>
	)
}

const skills = {
	current: [
		'JavaScript',
		'Next.js',
		'React',
		'Tailwind CSS',
		'HTML',
		'SCSS',
		'CSS',
		'Node.js',
		'express.js',
		'MongoDB',
		'REST APIs',
	],

	previous: ['Python', 'Kotlin'],
}

export default Skills
