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
				<div className='px-6 flex flex-col md:w-5/6'>
					<h1 className='text-3xl font-semibold mb-8'>Skills</h1>
					<p className=''>
						This is my current tech stack that I use to develop my applications:
					</p>
				</div>
				<section className='md:w-5/6 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mt-12'>
					{skills.current.map((skill) => (
						<article
							className='flex justify-center  items-center p-8 font-bold bg-blue3 bg-opacity-20 border-2 border-blue3 text-blue3 rounded-xl selection:bg-darkGrey selection:text-black hover:scale-105 transition ease-in-out delay-100 hover:bg-opacity-100 hover:text-white'
							key={skill}>
							{skill}
						</article>
					))}
				</section>
				<div className='px-6 flex flex-col md:w-5/6 mt-12'>
					<h1 className='text-3xl font-semibold mb-8'>
						Other technologies I have worked with in the past
					</h1>
				</div>
				<section className='md:w-5/6 md:px-6 flex flex-row  gap-8'>
					{skills.previous.map((skill) => (
						<article
							className='flex justify-center  items-center p-8 font-bold bg-blue3 bg-opacity-20 border-2 border-blue3 text-blue3 rounded-xl selection:bg-darkGrey selection:text-black hover:scale-105 transition ease-in-out delay-100 hover:bg-opacity-100 hover:text-white'
							key={skill}>
							{skill}
						</article>
					))}
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

	previous: ['Python', 'Kotlin', 'Android Mobile Development'],
}

export default Skills
